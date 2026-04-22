# Séquence 60 — Recherche textuelle

> Source : <https://lyotardjulien.forge.apps.education.fr/terminale-specialite-nsi-au-lycee-notre-dame/60_sequence_60/60_sequence_60/>

---

## TL;DR

- Problème : trouver toutes les occurrences d'un **motif M** (longueur `m`) dans un **texte T**
  (longueur `n`).
- **Algorithme naïf** : O(n × m) — simple, à connaître par cœur.
- **KMP** (Knuth-Morris-Pratt) : O(n + m), précalcul O(m) — évite les retours dans le texte.
- **Boyer-Moore** : sauts grâce au **mauvais caractère** — souvent meilleur en pratique.
- **Rabin-Karp** : utilise un **hachage glissant** ; bon pour multi-motifs.
- **Regex (`re`)** : motifs flexibles (`\d`, `*`, `+`, `[]`, `(...|...)` …).

---

## Plan de la séquence

1. Définition du problème.
2. Algorithme naïf (force brute).
3. Algorithme de Knuth-Morris-Pratt (KMP).
4. Algorithme de Boyer-Moore (notion).
5. Algorithme de Rabin-Karp (notion).
6. Expressions régulières en Python.

---

## Notions clés

### Le problème

Étant donné :
- un **texte** `T = t₀ t₁ … t_{n-1}` (longueur `n`),
- un **motif** `M = m₀ m₁ … m_{p-1}` (longueur `p`),

renvoyer la **liste des positions** `i` de `T` à partir desquelles `M` apparaît dans `T`.

### Pourquoi optimiser

- Un texte peut faire des **gigaoctets** (génome humain, archives web).
- L'algo naïf O(nm) devient vite trop lent.
- Algos sublinéaires (Boyer-Moore) ou linéaires (KMP, Rabin-Karp) deviennent indispensables.

---

## Vocabulaire

| Terme | Définition |
|-------|------------|
| Motif | Séquence à chercher dans le texte. |
| Texte | Séquence dans laquelle on cherche. |
| Occurrence | Position `i` de `T` où le motif se trouve. |
| Préfixe propre | Préfixe non vide et différent du mot. |
| Suffixe propre | Suffixe non vide et différent du mot. |
| Bord | Préfixe propre qui est aussi un suffixe propre. |
| Failure function (KMP) | Tableau π[i] = longueur du plus long bord du préfixe de longueur i+1. |
| Hachage glissant | Hachage incrémental (Rabin-Karp). |
| Regex | Expression régulière, langage de motifs. |

---

## Algorithmes & code

### 1. Algorithme naïf (brute force)

```python
def recherche_naive(motif, texte):
    """Renvoie la liste des positions de `motif` dans `texte` (algorithme naïf).

    Parcourt chaque position i de 0 à len(texte) - len(motif) et compare.

    Complexité : O((n - p + 1) * p) ≈ O(n * p).
    """
    n, p = len(texte), len(motif)
    positions = []
    for i in range(n - p + 1):
        # On compare motif et texte[i:i+p] caractère par caractère
        j = 0
        while j < p and texte[i + j] == motif[j]:
            j += 1
        if j == p:                # toutes les comparaisons OK
            positions.append(i)
    return positions


# Exemple
print(recherche_naive("abc", "abcabcabc"))  # [0, 3, 6]
```

### 2. Algorithme de Knuth-Morris-Pratt (KMP)

#### 2.1 Idée

Quand une comparaison échoue à la position `i + j` du texte (caractère `j` du motif), au
lieu de repartir à `i + 1` et de tout recomparer, KMP utilise la **structure du motif**
(via le tableau `π` calculé à l'avance) pour **avancer plus vite**, sans jamais revenir
en arrière dans le texte.

#### 2.2 Précalcul du tableau π (longueur des bords)

```python
def kmp_table(motif):
    """Calcule le tableau pi (failure function) pour KMP.

    pi[i] = longueur du plus long préfixe propre de motif[:i+1] qui est aussi suffixe.
    Complexité : O(p).
    """
    p = len(motif)
    pi = [0] * p
    k = 0
    for i in range(1, p):
        while k > 0 and motif[k] != motif[i]:
            k = pi[k - 1]
        if motif[k] == motif[i]:
            k += 1
        pi[i] = k
    return pi


# Exemple : "abcabd" -> [0, 0, 0, 1, 2, 0]
print(kmp_table("abcabd"))
```

#### 2.3 Recherche KMP

```python
def kmp_recherche(motif, texte):
    """Renvoie la liste des positions de `motif` dans `texte` avec KMP.

    Complexité : O(n + p) après précalcul O(p).
    """
    if motif == "":
        return list(range(len(texte) + 1))
    pi = kmp_table(motif)
    positions = []
    j = 0   # index dans le motif
    for i, c in enumerate(texte):
        while j > 0 and motif[j] != c:
            j = pi[j - 1]      # on saute, sans revenir dans le texte
        if motif[j] == c:
            j += 1
        if j == len(motif):
            positions.append(i - len(motif) + 1)
            j = pi[j - 1]      # on continue pour chercher d'autres occurrences
    return positions


print(kmp_recherche("ab", "ababab"))   # [0, 2, 4]
```

### 3. Algorithme de Boyer-Moore (notion)

- Compare le motif **de droite à gauche**.
- En cas d'échec, applique deux règles :
  - **Mauvais caractère** : décale le motif pour aligner le caractère du texte avec sa
    dernière occurrence dans le motif.
  - **Bon suffixe** : décale en utilisant le suffixe déjà apparié.
- Pire cas : O(n × p), mais en moyenne **sub-linéaire** (O(n / p) sur un alphabet large).

### 4. Algorithme de Rabin-Karp (notion)

- Calcule un **hachage** du motif et un hachage de chaque sous-chaîne de `texte` de longueur `p`.
- Utilise un **hachage glissant** (rolling hash) pour passer du hachage de `texte[i:i+p]` à
  `texte[i+1:i+p+1]` en O(1).
- Si les hachés correspondent, vérifier la chaîne réelle (gérer les collisions).
- Complexité moyenne : **O(n + p)**.
- Très utilisé pour la **recherche multi-motifs** (anti-plagiat).

```python
def rabin_karp(motif, texte, base=256, mod=10**9 + 7):
    """Recherche par hachage glissant (Rabin-Karp).

    Complexité moyenne : O(n + p) ; pire cas O(n*p) en cas de nombreuses collisions.
    """
    n, p = len(texte), len(motif)
    if p > n:
        return []
    h_motif = 0
    h_fenetre = 0
    base_p = pow(base, p - 1, mod)
    for i in range(p):
        h_motif = (h_motif * base + ord(motif[i])) % mod
        h_fenetre = (h_fenetre * base + ord(texte[i])) % mod
    positions = []
    for i in range(n - p + 1):
        if h_motif == h_fenetre and texte[i:i + p] == motif:
            positions.append(i)
        if i < n - p:
            h_fenetre = ((h_fenetre - ord(texte[i]) * base_p) * base
                         + ord(texte[i + p])) % mod
    return positions
```

### 5. Expressions régulières (regex)

Le module `re` de Python.

| Métacaractère | Signification |
|---------------|---------------|
| `.` | Tout caractère (sauf `\n`) |
| `^` | Début de chaîne (ou de ligne avec `re.MULTILINE`) |
| `$` | Fin |
| `*` | 0 ou plus |
| `+` | 1 ou plus |
| `?` | 0 ou 1 |
| `{n}` / `{n,m}` | exactement n / entre n et m |
| `[]` | Classe de caractères (ex `[abc]` ou `[a-z]`) |
| `[^...]` | Négation de classe |
| `\d`, `\D` | Chiffre / non-chiffre |
| `\w`, `\W` | Mot (alphanum + _) / non-mot |
| `\s`, `\S` | Espace / non-espace |
| `(...)` | Groupe de capture |
| `(?:...)` | Groupe non capturant |
| `\|` | Alternative (OU) |

```python
import re

# Trouver tous les nombres dans un texte
re.findall(r"\d+", "il y a 12 pommes et 7 oranges")   # ['12', '7']

# Vérifier un email simple
motif_email = r"^[\w.+-]+@[\w-]+\.[a-zA-Z]{2,}$"
bool(re.match(motif_email, "alice@example.com"))      # True

# Substitution
re.sub(r"\d", "*", "code 1234")                        # 'code ****'

# Groupe de capture
m = re.search(r"(\d+)/(\d+)/(\d+)", "Date: 22/04/2026")
m.group(0)  # '22/04/2026'
m.group(1), m.group(2), m.group(3)   # ('22', '04', '2026')
```

---

## Diagramme — déroulé de l'algo naïf

Recherche de `"abc"` dans `"abcabc"` :

```mermaid
flowchart TD
    A[i=0 : "abc" vs "abc" → MATCH 0] --> B[i=1 : "abc" vs "bca" → echec en 0]
    B --> C[i=2 : "abc" vs "cab" → echec en 0]
    C --> D[i=3 : "abc" vs "abc" → MATCH 3]
    D --> E[Resultat : 0, 3]
```

```mermaid
flowchart LR
    M[Motif] --> P[Precalcul de pi en O p]
    P --> R[Parcours du texte en O n]
    R --> O[Sortie : positions]
```

---

## Pièges classiques au bac

- **Compter les occurrences chevauchantes ou non** : `"aaa"` dans `"aaaa"` → 2 chevauchantes
  (positions 0, 1) ; en KMP on continue avec `pi[j-1]` pour trouver les chevauchantes.
- **Algo naïf complexité O(nm), pas O(n+m)** : ne pas confondre.
- **Indices d'arrivée** : la fenêtre de comparaison va de `i` à `i+p-1`.
- **Regex « gourmandes »** : `.*` est gourmand par défaut. `.*?` est paresseux.
- **Caractères spéciaux à échapper** dans les regex : `\.`, `\(`, `\)`.

---

## Questions types au bac

**Q1.** *Quelle est la complexité de l'algorithme naïf de recherche d'un motif de longueur p dans un texte de longueur n ?*
> O(n × p).

**Q2.** *Quelle amélioration apporte KMP par rapport à l'algorithme naïf ?*
> KMP ne revient jamais en arrière dans le texte. Sa complexité est O(n + p) au lieu de O(np).

**Q3.** *Que contient le tableau π de KMP ?*
> Pour chaque indice i, π[i] = longueur du plus long préfixe propre de motif[0..i] qui est
> aussi suffixe.

**Q4.** *Donner une expression régulière qui reconnaît un nombre entier (positif ou négatif).*
> `^-?\d+$` ou `r"-?\d+"`.

**Q5.** *Combien d'occurrences de "ab" dans "ababab" ?*
> 3 (positions 0, 2, 4).

**Q6.** *Quel algorithme est le plus rapide en pratique sur de longs textes en alphabet large ?*
> Boyer-Moore (sub-linéaire en moyenne).

---

## Liens

- Cours en ligne : <https://lyotardjulien.forge.apps.education.fr/terminale-specialite-nsi-au-lycee-notre-dame/60_sequence_60/60_sequence_60/>
- Voir aussi : [`memos/memo_complexites.md`](../memos/memo_complexites.md)
- Documentation Python : <https://docs.python.org/fr/3/library/re.html>
