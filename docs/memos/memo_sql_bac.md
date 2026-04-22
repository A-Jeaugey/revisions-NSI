# 🗄️ Mémo SQL — Cheat-sheet bac NSI

Le SQL au bac NSI = **lecture et rédaction de requêtes** sur des tables données.
Tu n'auras pas à concevoir une base, mais à **interroger** une base existante.

---

## 1. Anatomie d'une requête SELECT

```sql
SELECT colonnes               -- ce qu'on veut afficher
FROM table                    -- d'où ça vient
[JOIN autre_table ON ...]     -- jointures (optionnel)
[WHERE conditions]            -- filtre des lignes
[GROUP BY colonnes]           -- regroupement
[HAVING conditions]           -- filtre sur les groupes
[ORDER BY colonnes [ASC|DESC]] -- tri
[LIMIT n [OFFSET k]];         -- nb max de résultats
```

**Ordre d'évaluation logique** (≠ ordre d'écriture !) :
`FROM → JOIN → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT`

---

## 2. Tables exemples utilisées dans ce mémo

```sql
-- Table Eleve(id, nom, prenom, classe)
+----+----------+---------+---------+
| id |   nom    | prenom  | classe  |
+----+----------+---------+---------+
|  1 | Dupont   | Alice   | TG3     |
|  2 | Martin   | Bob     | TG4     |
|  3 | Lefevre  | Chloe   | TG3     |
+----+----------+---------+---------+

-- Table Note(id_eleve, matiere, note)
+----------+----------+------+
| id_eleve | matiere  | note |
+----------+----------+------+
|        1 | NSI      | 17   |
|        1 | Maths    | 15   |
|        2 | NSI      | 12   |
|        2 | Maths    | 14   |
|        3 | NSI      | 18   |
+----------+----------+------+
```

---

## 3. SELECT — exemples gradués

### 3.1 Tout afficher
```sql
SELECT * FROM Eleve;
```

### 3.2 Sélection de colonnes
```sql
SELECT nom, prenom FROM Eleve;
```

### 3.3 Filtrage WHERE
```sql
SELECT * FROM Eleve WHERE classe = 'TG3';

SELECT nom FROM Eleve
WHERE classe = 'TG3' AND prenom LIKE 'A%';   -- prenom commence par A

SELECT * FROM Note WHERE note BETWEEN 10 AND 15;   -- inclus

SELECT * FROM Eleve WHERE classe IN ('TG3', 'TG4');

SELECT * FROM Note WHERE matiere IS NOT NULL;     -- jamais "= NULL"
```

**Opérateurs WHERE** : `=`, `<>` (ou `!=`), `<`, `<=`, `>`, `>=`,
`AND`, `OR`, `NOT`, `BETWEEN ... AND ...`, `IN (...)`, `LIKE 'pattern'`,
`IS NULL`, `IS NOT NULL`.

**LIKE** : `%` = n'importe quelle séquence ; `_` = exactement un caractère.

### 3.4 Tri
```sql
SELECT * FROM Eleve ORDER BY nom ASC;
SELECT * FROM Note  ORDER BY note DESC, matiere ASC;
```

### 3.5 LIMIT
```sql
SELECT * FROM Note ORDER BY note DESC LIMIT 3;   -- top 3
```

---

## 4. Fonctions d'agrégation

| Fonction | Rôle |
|----------|------|
| `COUNT(*)` | nombre de lignes |
| `COUNT(col)` | nombre de valeurs **non NULL** |
| `COUNT(DISTINCT col)` | nb de valeurs distinctes |
| `SUM(col)` | somme |
| `AVG(col)` | moyenne |
| `MIN(col)`, `MAX(col)` | min, max |

```sql
SELECT COUNT(*) FROM Eleve;                      -- 3
SELECT AVG(note) FROM Note WHERE matiere='NSI';  -- (17+12+18)/3 = 15.66
```

---

## 5. GROUP BY + HAVING

```sql
-- Moyenne par matière
SELECT matiere, AVG(note) AS moyenne
FROM Note
GROUP BY matiere;

-- Matières avec moyenne >= 14 (filtrer les groupes → HAVING, pas WHERE)
SELECT matiere, AVG(note) AS moy
FROM Note
GROUP BY matiere
HAVING AVG(note) >= 14;

-- Élèves avec au moins 2 notes
SELECT id_eleve, COUNT(*) AS nb
FROM Note
GROUP BY id_eleve
HAVING COUNT(*) >= 2;
```

**Règle d'or** : dans une requête avec `GROUP BY`, le `SELECT` ne peut contenir QUE :
- des colonnes du `GROUP BY`,
- des fonctions d'agrégation.

**WHERE vs HAVING** :
- `WHERE` filtre **les lignes** AVANT regroupement.
- `HAVING` filtre **les groupes** APRÈS regroupement.

---

## 6. Jointures (JOIN)

### 6.1 INNER JOIN — intersection
```sql
SELECT e.nom, e.prenom, n.matiere, n.note
FROM Eleve e
INNER JOIN Note n ON e.id = n.id_eleve;
```
Renvoie uniquement les élèves qui ont au moins une note.

### 6.2 LEFT JOIN — toutes les lignes de la gauche, NULL si pas de match
```sql
SELECT e.nom, n.matiere, n.note
FROM Eleve e
LEFT JOIN Note n ON e.id = n.id_eleve;
```
Renvoie aussi les élèves sans note (avec `NULL` dans matiere/note).

### 6.3 Jointure naturelle (équivalente)
```sql
SELECT * FROM Eleve, Note
WHERE Eleve.id = Note.id_eleve;
```

### 6.4 Schéma visuel

```
INNER JOIN      LEFT JOIN
  ┌───┐╲        ┌───┐
  │ A │ B       │ A │ B (NULL si pas de match côté B)
  └───┘╱        └───┘
  inter         tout A
```

---

## 7. Sous-requêtes

```sql
-- Élèves ayant la meilleure note en NSI
SELECT nom, prenom FROM Eleve
WHERE id IN (
    SELECT id_eleve FROM Note
    WHERE matiere = 'NSI'
      AND note = (SELECT MAX(note) FROM Note WHERE matiere = 'NSI')
);
```

---

## 8. INSERT / UPDATE / DELETE

```sql
-- Ajout
INSERT INTO Eleve (nom, prenom, classe)
VALUES ('Petit', 'Diane', 'TG3');

-- Modification
UPDATE Note SET note = note + 1
WHERE matiere = 'NSI';

-- Suppression
DELETE FROM Note WHERE note < 5;
```

⚠️ **Toujours mettre un WHERE** sur UPDATE/DELETE (sinon affecte TOUTES les lignes).

---

## 9. CREATE TABLE (lecture suffisante au bac)

```sql
CREATE TABLE Eleve (
    id INTEGER PRIMARY KEY,
    nom TEXT NOT NULL,
    prenom TEXT NOT NULL,
    classe TEXT,
    UNIQUE(nom, prenom)
);

CREATE TABLE Note (
    id_eleve INTEGER NOT NULL,
    matiere TEXT NOT NULL,
    note REAL CHECK (note BETWEEN 0 AND 20),
    PRIMARY KEY (id_eleve, matiere),
    FOREIGN KEY (id_eleve) REFERENCES Eleve(id)
);
```

**Contraintes** :
- `PRIMARY KEY` : clé primaire (unique + non NULL).
- `FOREIGN KEY ... REFERENCES` : clé étrangère vers une autre table.
- `NOT NULL`, `UNIQUE`, `CHECK(...)`.

---

## 10. Algèbre relationnelle ↔ SQL

| Algèbre | Notation | SQL équivalent |
|---------|----------|----------------|
| Sélection | σ_condition(R) | `SELECT * FROM R WHERE condition` |
| Projection | π_cols(R) | `SELECT cols FROM R` |
| Jointure | R ⋈_cond S | `SELECT * FROM R JOIN S ON cond` |
| Union | R ∪ S | `SELECT * FROM R UNION SELECT * FROM S` |
| Intersection | R ∩ S | `... INTERSECT ...` |
| Différence | R − S | `... EXCEPT ...` |
| Produit cartésien | R × S | `SELECT * FROM R, S` |
| Renommage | ρ | `AS` |

---

## 11. ACID (transactions)

| Lettre | Signification |
|--------|---------------|
| **A**tomicité | Une transaction est tout-ou-rien. |
| **C**ohérence | La base passe d'un état cohérent à un autre. |
| **I**solation | Les transactions concurrentes ne se gênent pas. |
| **D**urabilité | Une transaction validée est persistante. |

```sql
BEGIN;
UPDATE Compte SET solde = solde - 100 WHERE id = 1;
UPDATE Compte SET solde = solde + 100 WHERE id = 2;
COMMIT;     -- ou ROLLBACK; si problème
```

---

## 12. Pièges classiques au bac

| Piège | Bonne pratique |
|-------|----------------|
| `WHERE col = NULL` | `WHERE col IS NULL` |
| Mettre une agrégat dans WHERE | Utiliser HAVING |
| Oublier que `LIKE` est sensible à la casse (selon SGBD) | Tester ou `LOWER(col) LIKE '...'` |
| Ne pas qualifier les colonnes en JOIN (ambigu) | `e.nom`, `n.note` |
| Confondre `INNER JOIN` et `LEFT JOIN` | Lire « toutes les lignes de gauche ? » |
| Compter les NULL avec `COUNT(col)` | `COUNT(col)` IGNORE NULL ; `COUNT(*)` non |
| Modifier sans WHERE | Toujours réfléchir au WHERE de UPDATE/DELETE |

---

## 13. Questions types au bac

**Q1.** *Donner le nom et la classe des élèves ayant une moyenne supérieure à 14.*
```sql
SELECT e.nom, e.classe
FROM Eleve e
JOIN Note n ON e.id = n.id_eleve
GROUP BY e.id, e.nom, e.classe
HAVING AVG(n.note) > 14;
```

**Q2.** *Donner le nombre de notes par matière, classées de la matière la plus notée à la moins notée.*
```sql
SELECT matiere, COUNT(*) AS nb
FROM Note
GROUP BY matiere
ORDER BY nb DESC;
```

**Q3.** *Quels élèves n'ont aucune note ?*
```sql
SELECT e.nom
FROM Eleve e
LEFT JOIN Note n ON e.id = n.id_eleve
WHERE n.id_eleve IS NULL;
```

**Q4.** *Donner la moyenne générale par élève (nom, moyenne).*
```sql
SELECT e.nom, AVG(n.note) AS moy
FROM Eleve e
JOIN Note n ON e.id = n.id_eleve
GROUP BY e.id, e.nom;
```

---

## 🎯 Check-list bac SQL

- [ ] Je sais lire une jointure et expliquer le résultat.
- [ ] Je sais utiliser GROUP BY + HAVING.
- [ ] Je différencie `WHERE` et `HAVING`.
- [ ] Je sais filtrer avec `LIKE`, `IN`, `BETWEEN`, `IS NULL`.
- [ ] Je sais compter, sommer, moyenner.
- [ ] Je sais traduire une question naturelle en SQL.
