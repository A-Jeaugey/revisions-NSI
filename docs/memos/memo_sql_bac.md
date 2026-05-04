# 🗄️ Mémo SQL — Cheat-sheet bac NSI

Le SQL au bac NSI = **lecture et rédaction de requêtes** sur des tables données.
Tu n'auras pas à concevoir une base, mais à **interroger** une base existante.

!!! warning "Périmètre officiel BO Terminale"
    Le BO précise : « Les requêtes SQL d'interrogation **sans utiliser les clauses `GROUP BY` et `HAVING`**. »

    Donc **`GROUP BY`, `HAVING`, sous-requêtes, transactions et propriétés ACID** sont **hors programme NSI** et ne figurent pas dans ce mémo. Le périmètre testé : `SELECT FROM WHERE JOIN`, `INSERT`, `UPDATE`, `DELETE`, `DISTINCT`, `ORDER BY`, et les agrégats simples (`COUNT`, `SUM`, `AVG`, `MIN`, `MAX`) appliqués globalement (sans regroupement).

---

## 1. Anatomie d'une requête SELECT

```sql
SELECT [DISTINCT] colonnes    -- ce qu'on veut afficher
FROM table                    -- d'où ça vient
[JOIN autre_table ON ...]     -- jointures (optionnel)
[WHERE conditions]            -- filtre des lignes
[ORDER BY colonnes [ASC|DESC]] -- tri
[LIMIT n [OFFSET k]];         -- nb max de résultats
```

**Ordre d'évaluation logique** (≠ ordre d'écriture !) :
`FROM → JOIN → WHERE → SELECT → ORDER BY → LIMIT`

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

### 3.4 DISTINCT
```sql
SELECT DISTINCT classe FROM Eleve;   -- elimine les doublons
```

### 3.5 Tri
```sql
SELECT * FROM Eleve ORDER BY nom ASC;
SELECT * FROM Note  ORDER BY note DESC, matiere ASC;
```

### 3.6 LIMIT
```sql
SELECT * FROM Note ORDER BY note DESC LIMIT 3;   -- top 3
```

---

## 4. Fonctions d'agrégation (utilisation globale)

| Fonction | Rôle |
|----------|------|
| `COUNT(*)` | nombre de lignes |
| `COUNT(col)` | nombre de valeurs **non NULL** |
| `COUNT(DISTINCT col)` | nb de valeurs distinctes |
| `SUM(col)` | somme |
| `AVG(col)` | moyenne |
| `MIN(col)`, `MAX(col)` | min, max |

> ⚠️ Au bac NSI, ces agrégats s'utilisent **sans `GROUP BY`** (donc en agrégeant sur toute la table ou un sous-ensemble filtré par `WHERE`).

```sql
SELECT COUNT(*) FROM Eleve;                          -- 3
SELECT AVG(note) FROM Note WHERE matiere='NSI';      -- (17+12+18)/3 = 15.66
SELECT MAX(note) FROM Note;                          -- 18
SELECT MIN(note) FROM Note WHERE matiere = 'Maths';  -- 14
```

---

## 5. Jointures (JOIN)

### 5.1 INNER JOIN — intersection
```sql
SELECT e.nom, e.prenom, n.matiere, n.note
FROM Eleve e
INNER JOIN Note n ON e.id = n.id_eleve;
```
Renvoie uniquement les élèves qui ont au moins une note.

### 5.2 LEFT JOIN — toutes les lignes de la gauche, NULL si pas de match
```sql
SELECT e.nom, n.matiere, n.note
FROM Eleve e
LEFT JOIN Note n ON e.id = n.id_eleve;
```
Renvoie aussi les élèves sans note (avec `NULL` dans matiere/note).

### 5.3 Jointure naturelle (équivalente à INNER JOIN)
```sql
SELECT * FROM Eleve, Note
WHERE Eleve.id = Note.id_eleve;
```

### 5.4 Schéma visuel

```
INNER JOIN      LEFT JOIN
  ┌───┐╲        ┌───┐
  │ A │ B       │ A │ B (NULL si pas de match côté B)
  └───┘╱        └───┘
  inter         tout A
```

---

## 6. INSERT / UPDATE / DELETE

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

## 7. CREATE TABLE (lecture suffisante au bac)

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

## 8. Algèbre relationnelle ↔ SQL

| Algèbre | Notation | SQL équivalent |
|---------|----------|----------------|
| Sélection | σ_condition(R) | `SELECT * FROM R WHERE condition` |
| Projection | π_cols(R) | `SELECT cols FROM R` (avec `DISTINCT`) |
| Jointure | R ⋈_cond S | `SELECT * FROM R JOIN S ON cond` |

---

## 9. Pièges classiques au bac

| Piège | Bonne pratique |
|-------|----------------|
| `WHERE col = NULL` | `WHERE col IS NULL` |
| Utiliser `GROUP BY` ou `HAVING` au bac NSI | **Hors programme** : repenser la requête |
| Oublier que `LIKE` est sensible à la casse (selon SGBD) | Tester ou `LOWER(col) LIKE '...'` |
| Ne pas qualifier les colonnes en JOIN (ambigu) | `e.nom`, `n.note` |
| Confondre `INNER JOIN` et `LEFT JOIN` | Lire « toutes les lignes de gauche ? » |
| Compter les NULL avec `COUNT(col)` | `COUNT(col)` IGNORE NULL ; `COUNT(*)` non |
| Modifier sans WHERE | Toujours réfléchir au WHERE de UPDATE/DELETE |

---

## 10. Questions types au bac

**Q1.** *Donner le nom et la classe des élèves de la classe `'TG3'`.*
```sql
SELECT nom, classe
FROM   Eleve
WHERE  classe = 'TG3';
```

**Q2.** *Calculer la moyenne en NSI sur l'ensemble des élèves.*
```sql
SELECT AVG(note) AS moyenne_NSI
FROM   Note
WHERE  matiere = 'NSI';
```

**Q3.** *Quels élèves n'ont aucune note ?*
```sql
SELECT e.nom
FROM   Eleve e
LEFT JOIN Note n ON e.id = n.id_eleve
WHERE  n.id_eleve IS NULL;
```

**Q4.** *Lister toutes les notes d'un élève donné (id = 1) avec son nom et la matière.*
```sql
SELECT e.nom, n.matiere, n.note
FROM   Eleve e
JOIN   Note  n ON n.id_eleve = e.id
WHERE  e.id = 1;
```

**Q5.** *Lister les classes distinctes (sans doublons) présentes dans la table `Eleve`.*
```sql
SELECT DISTINCT classe FROM Eleve;
```

---

## 🎯 Check-list bac SQL

- [ ] Je sais lire une jointure et expliquer le résultat.
- [ ] Je différencie `INNER JOIN` et `LEFT JOIN`.
- [ ] Je sais filtrer avec `LIKE`, `IN`, `BETWEEN`, `IS NULL`.
- [ ] Je sais compter, sommer, moyenner (sans `GROUP BY`).
- [ ] Je sais traduire une question naturelle en SQL.
- [ ] Je sais utiliser `DISTINCT` et `ORDER BY`.
- [ ] Je n'utilise **jamais** `GROUP BY` ni `HAVING` au bac NSI (hors programme).
