# Séquence 18 — Approfondissement (fiche transverse / récap bac)

> Source : https://lyotardjulien.forge.apps.education.fr/terminale-specialite-nsi-au-lycee-notre-dame/80_sequence_80/80_sequence_80/
>
> Note : la page source est quasi-vide (gabarit JS). Cette fiche de SYNTHÈSE finale reprend l'ensemble du programme officiel NSI Terminale (BO).

## TL;DR

Cette fiche est ton **kit de survie pour le bac NSI**. Elle condense tous les algorithmes, structures de données, complexités et points de vocabulaire piégeux à connaître. Elle se termine par des conseils méthodo et un mini-quiz de révision. À relire la veille de l'écrit ET la veille de la pratique.

## Plan

1. Récapitulatif des algorithmes obligatoires
2. Récapitulatif des structures de données
3. Récapitulatif des complexités
4. Conseils méthodologiques (écrit + pratique)
5. Vocabulaire piégeux
6. Mini-quiz de révision (10 Q/R)
7. Check-list finale

---

## 1. Récapitulatif des algorithmes obligatoires

### 1.1 Recherche

| Algorithme | Principe en 1 ligne | Pré-requis | Complexité (pire cas) |
|------------|---------------------|------------|------------------------|
| Recherche linéaire | Parcourir tous les éléments un par un | Aucun | O(n) |
| Recherche dichotomique | Couper l'intervalle en deux à chaque étape | Tableau **trié** | O(log n) |

```python
def dichotomie(t, v):
    g, d = 0, len(t) - 1
    while g <= d:
        m = (g + d) // 2
        if t[m] == v: return m
        elif t[m] < v: g = m + 1
        else: d = m - 1
    return -1
```

### 1.2 Tris

| Tri | Principe | Stable ? | Pire cas | Moyen | Meilleur |
|-----|----------|----------|----------|-------|----------|
| Sélection | À chaque tour, placer le min restant | Non | O(n²) | O(n²) | O(n²) |
| Insertion | Insérer chaque élément à sa place dans la partie triée | Oui | O(n²) | O(n²) | O(n) |
| Fusion | Diviser, trier, fusionner | Oui | O(n log n) | O(n log n) | O(n log n) |
| Rapide (quicksort) | Choisir pivot, partitionner | Non | O(n²) | O(n log n) | O(n log n) |

```python
def tri_insertion(t):
    for i in range(1, len(t)):
        x, j = t[i], i
        while j > 0 and t[j-1] > x:
            t[j] = t[j-1]
            j -= 1
        t[j] = x

def tri_fusion(t):
    if len(t) <= 1: return t
    m = len(t) // 2
    g, d = tri_fusion(t[:m]), tri_fusion(t[m:])
    return fusion(g, d)

def fusion(a, b):
    res, i, j = [], 0, 0
    while i < len(a) and j < len(b):
        if a[i] <= b[j]:
            res.append(a[i]); i += 1
        else:
            res.append(b[j]); j += 1
    return res + a[i:] + b[j:]
```

### 1.3 Récursivité

| Algorithme | Principe | Complexité |
|------------|----------|------------|
| Factorielle | `n! = n * (n-1)!` | O(n) |
| Fibonacci naïf | `F(n) = F(n-1) + F(n-2)` | O(2ⁿ) |
| Fibonacci mémoïsé | Stocker les résultats | O(n) |
| Tours de Hanoï | Déplacer n-1 disques, le grand, puis n-1 | O(2ⁿ) |

```python
def fact(n):
    return 1 if n <= 1 else n * fact(n-1)

def hanoi(n, src, aux, dst):
    if n == 0: return
    hanoi(n-1, src, dst, aux)
    print(f"{src} -> {dst}")
    hanoi(n-1, aux, src, dst)
```

### 1.4 Parcours de graphes

| Algorithme | Structure utilisée | Application typique | Complexité |
|------------|-------------------|---------------------|------------|
| BFS (parcours en largeur) | File (FIFO) | Plus court chemin (non pondéré) | O(S + A) |
| DFS (parcours en profondeur) | Pile (LIFO) ou récursion | Cycles, composantes connexes | O(S + A) |

```python
from collections import deque

def bfs(graphe, depart):
    vus = {depart}
    file = deque([depart])
    ordre = []
    while file:
        s = file.popleft()
        ordre.append(s)
        for v in graphe[s]:
            if v not in vus:
                vus.add(v)
                file.append(v)
    return ordre

def dfs(graphe, s, vus=None):
    if vus is None: vus = set()
    vus.add(s)
    for v in graphe[s]:
        if v not in vus:
            dfs(graphe, v, vus)
    return vus
```

### 1.5 Parcours d'arbres binaires

| Parcours | Ordre |
|----------|-------|
| Préfixe (NGD) | Racine → Gauche → Droite |
| Infixe (GND) | Gauche → Racine → Droite (donne tri pour ABR) |
| Suffixe (GDN) | Gauche → Droite → Racine |
| Largeur | Niveau par niveau (file) |

```python
def prefixe(noeud):
    if noeud is None: return
    print(noeud.val)
    prefixe(noeud.gauche)
    prefixe(noeud.droite)

def infixe(noeud):
    if noeud is None: return
    infixe(noeud.gauche)
    print(noeud.val)
    infixe(noeud.droite)
```

### 1.6 Programmation dynamique (DP)

| Algorithme | Principe | Complexité |
|------------|----------|------------|
| Fibonacci mémoïsé | Stocker les `F(k)` déjà calculés | O(n) |
| Sac à dos 0/1 | Tableau `dp[i][w]` = valeur max | O(n·W) |

```python
def fibo_memo(n, memo={}):
    if n <= 1: return n
    if n not in memo:
        memo[n] = fibo_memo(n-1, memo) + fibo_memo(n-2, memo)
    return memo[n]

def sac_a_dos(poids, valeurs, W):
    n = len(poids)
    dp = [[0]*(W+1) for _ in range(n+1)]
    for i in range(1, n+1):
        for w in range(W+1):
            if poids[i-1] <= w:
                dp[i][w] = max(dp[i-1][w],
                               dp[i-1][w-poids[i-1]] + valeurs[i-1])
            else:
                dp[i][w] = dp[i-1][w]
    return dp[n][W]
```

### 1.7 Algorithmes gloutons

| Algorithme | Principe | Optimal ? |
|------------|----------|-----------|
| Rendu de monnaie | Donner la plus grosse pièce ≤ reste | Oui pour système euro, non en général |
| Sac à dos fractionnaire | Trier par ratio valeur/poids | Oui |

```python
def rendu_monnaie(montant, pieces=[200,100,50,20,10,5,2,1]):
    res = []
    for p in pieces:
        while montant >= p:
            res.append(p)
            montant -= p
    return res
```

### 1.8 KNN et recherche textuelle

| Algorithme | Principe | Complexité |
|------------|----------|------------|
| KNN (k plus proches voisins) | Classer un point selon les k voisins majoritaires | O(n·d) par requête |
| Recherche naïve | Tester chaque position | O(n·m) |
| KMP (Knuth-Morris-Pratt) | Précalcule un échec → évite reculs | O(n + m) |

```python
def knn_classifier(points, classes, x, k):
    distances = [(sum((a-b)**2 for a,b in zip(p, x)), c)
                 for p, c in zip(points, classes)]
    distances.sort()
    voisins = [c for _, c in distances[:k]]
    return max(set(voisins), key=voisins.count)

def recherche_naive(texte, motif):
    n, m = len(texte), len(motif)
    for i in range(n - m + 1):
        if texte[i:i+m] == motif:
            return i
    return -1
```

### 1.9 Cryptographie

| Algorithme | Principe | Sécurité |
|------------|----------|----------|
| César | Décalage fixe k | Trivial à casser |
| Vigenère | Décalage variable selon clé | Cassable (Kasiski) |
| RSA | Clé publique / privée, basé sur factorisation | Robuste si clé ≥ 2048 bits |

```python
def cesar(texte, k):
    res = ""
    for c in texte:
        if c.isupper():
            res += chr((ord(c) - 65 + k) % 26 + 65)
        elif c.islower():
            res += chr((ord(c) - 97 + k) % 26 + 97)
        else:
            res += c
    return res

def vigenere(texte, cle):
    res = ""
    for i, c in enumerate(texte.upper()):
        if c.isalpha():
            k = ord(cle[i % len(cle)].upper()) - 65
            res += chr((ord(c) - 65 + k) % 26 + 65)
        else:
            res += c
    return res
```

---

## 2. Récapitulatif des structures de données

### 2.1 Tableau récapitulatif

| Structure | Principe | Opérations clés | Complexité |
|-----------|----------|-----------------|------------|
| Liste Python | Tableau dynamique | accès `L[i]` | O(1) |
| | | `L.append(x)` | O(1) amorti |
| | | `L.insert(0, x)` | O(n) |
| | | recherche `x in L` | O(n) |
| Pile (LIFO) | Dernier entré, premier sorti | `push`, `pop` | O(1) |
| File (FIFO) | Premier entré, premier sorti | `enqueue`, `dequeue` | O(1) avec `deque` |
| Liste chaînée | Maillons reliés par pointeurs | insertion en tête | O(1) |
| | | accès au i-ème | O(n) |
| Dictionnaire / Hash | Paires clé-valeur, table de hachage | accès, insertion | O(1) en moyenne |
| | | | O(n) en pire cas (collisions) |
| Arbre binaire | Nœud avec 2 fils max | parcours | O(n) |
| ABR (BST) | Arbre binaire trié | recherche, insertion | O(log n) si équilibré, sinon O(n) |
| Graphe (matrice adj.) | Matrice n×n | test arête | O(1) |
| | | | espace O(n²) |
| Graphe (liste adj.) | Dico clé → liste de voisins | parcours voisins | O(deg(s)) |
| | | | espace O(n + m) |

### 2.2 Implémentations Python

```python
# Pile via liste
class Pile:
    def __init__(self): self.data = []
    def empile(self, x): self.data.append(x)
    def depile(self): return self.data.pop()
    def est_vide(self): return self.data == []

# File via collections.deque
from collections import deque
file = deque()
file.append(1)        # enqueue
x = file.popleft()    # dequeue

# Liste chaînée
class Maillon:
    def __init__(self, val, suiv=None):
        self.val = val
        self.suiv = suiv

# Arbre binaire
class Noeud:
    def __init__(self, val, g=None, d=None):
        self.val = val
        self.gauche = g
        self.droite = d

# Graphe par liste d'adjacence
graphe = {
    'A': ['B', 'C'],
    'B': ['A', 'D'],
    'C': ['A', 'D'],
    'D': ['B', 'C']
}
```

### 2.3 Quand utiliser quoi ?

| Besoin | Structure conseillée |
|--------|----------------------|
| Accès rapide par index | Liste / tableau |
| Ajout/retrait à la fin uniquement | Pile (liste) |
| Ajout au bout, retrait au début | File (`deque`) |
| Recherche par clé (mot-clé → valeur) | Dictionnaire |
| Données triées avec recherche rapide | ABR / arbre équilibré |
| Relations entre objets (réseaux) | Graphe |
| Hiérarchie (filesystem, DOM) | Arbre |

---

## 3. Récapitulatif des complexités

### 3.1 Échelle des complexités

| Notation | Nom | Exemple | Croissance |
|----------|-----|---------|------------|
| O(1) | Constante | Accès `L[i]`, `dict[k]` | Idéal |
| O(log n) | Logarithmique | Dichotomie | Excellent |
| O(n) | Linéaire | Parcours, recherche linéaire | Bon |
| O(n log n) | Linéarithmique | Tri fusion, tri rapide | Très bon (tri optimal) |
| O(n²) | Quadratique | Tri sélection/insertion, double boucle | Acceptable jusqu'à ~10⁴ |
| O(n³) | Cubique | Multiplication matrices naïve | À éviter au-delà de ~500 |
| O(2ⁿ) | Exponentielle | Fibonacci naïf, sac à dos brute force | Catastrophique |
| O(n!) | Factorielle | Voyageur de commerce brute force | Inutilisable |

### 3.2 Ordres de grandeur (pour n = 1000)

| Complexité | Nombre d'opérations |
|------------|--------------------|
| O(log n) | ~10 |
| O(n) | 1 000 |
| O(n log n) | ~10 000 |
| O(n²) | 1 000 000 |
| O(n³) | 1 000 000 000 |
| O(2ⁿ) | astronomique |

### 3.3 Comment évaluer ?

- Une boucle de 1 à n → O(n)
- Deux boucles imbriquées → O(n²)
- Division par 2 à chaque tour → O(log n)
- Diviser pour régner avec combinaison linéaire à chaque niveau (type tri fusion) → O(n log n)

---

## 4. Conseils méthodologiques

### 4.1 Épreuve écrite (3h30, 2 exercices sur 3)

- **Lire les 3 sujets** au début (10 min). Choisir les 2 où on sent le mieux.
- **Gérer le temps** : ~1h45 par exercice. Garder 15 min de relecture finale.
- **Justifier** : un calcul de complexité, une réponse à « pourquoi », demande 2-3 phrases avec vocabulaire précis.
- **Annoter le code donné** : commenter chaque ligne stratégique aide à comprendre.
- **Pseudocode accepté** : si l'on ne sait plus la syntaxe Python exacte, du pseudocode clair vaut mieux qu'un code faux.
- **Soigner l'écriture** des indentations et des indices de tableaux.
- **Ne pas laisser de blanc** : même une réponse partielle peut rapporter 1-2 points.

### 4.2 Épreuve pratique (1h, 2 exercices tirés d'une banque de 12)

- **Premier exercice** (souvent une fonction simple) : 20 min max.
- **Deuxième exercice** (complète un programme) : 30 min, 10 min de relecture.
- **Tester chaque fonction** avec les exemples du sujet AVANT d'appeler l'examinateur.
- **Écrire une docstring** courte et des assertions ; cela rassure le jury.
- **En cas de bug** : tester en console, utiliser `print` pour suivre l'état.
- **Sauvegarder régulièrement** (Ctrl+S).
- **Ne pas réinventer** : utiliser les fonctions Python standards (`len`, `range`, `sorted`...).

### 4.3 Stratégie générale

- Une semaine avant : refaire des annales.
- La veille : relire les fiches (cette synthèse !).
- Le matin : un sucre lent, pas de panique.
- Pendant l'épreuve : respirer, lire deux fois, schématiser au brouillon.

---

## 5. Vocabulaire piégeux

| Termes à ne PAS confondre | Différence essentielle |
|---------------------------|------------------------|
| **Chiffrement** vs **codage** vs **encodage** | Chiffrement : confidentialité (clé). Codage : compression / représentation (Huffman). Encodage : représentation des caractères (UTF-8). |
| **Crypter** | Mot **incorrect** en français : on dit *chiffrer* / *déchiffrer* (avec clé) ou *décrypter* (sans clé, casse). |
| **Processus** vs **thread** | Processus : programme en cours d'exécution, mémoire isolée. Thread : fil d'exécution dans un processus, mémoire partagée. |
| **Classe** vs **instance** | Classe : moule. Instance : objet créé à partir du moule (`Chien` vs `Rex = Chien()`). |
| **Attribut** vs **méthode** | Attribut : variable d'un objet. Méthode : fonction d'un objet. |
| **Compilation** vs **interprétation** | Compilation : code → fichier exécutable (C). Interprétation : ligne par ligne au moment de l'exécution (Python). |
| **TCP** vs **UDP** | TCP : connexion fiable, en ordre. UDP : sans connexion, rapide, sans garantie. |
| **HTTP** vs **HTTPS** | HTTPS = HTTP + TLS (chiffré). |
| **GET** vs **POST** | GET : récupère, paramètres dans URL, idempotent. POST : envoie, données dans le corps. |
| **SQL** : **clé primaire** vs **clé étrangère** | Primaire : identifie de manière unique une ligne. Étrangère : référence une clé primaire d'une autre table. |
| **`==`** vs **`is`** en Python | `==` : égalité de valeur. `is` : identité (même objet en mémoire). |
| **Liste** vs **tuple** | Liste : mutable. Tuple : immuable. |
| **Pile** vs **file** | Pile LIFO. File FIFO. |
| **Récursif** vs **itératif** | Récursif : la fonction s'appelle elle-même. Itératif : utilise une boucle. |
| **Récursivité terminale** | La récursion est la dernière opération (Python n'optimise pas). |
| **Arbre** vs **graphe** | Arbre : graphe connexe sans cycle, orienté avec racine. Graphe : plus général. |
| **Nœud / sommet** vs **arête / arc** | Sommet : élément. Arête : non orientée. Arc : orientée. |
| **Bit** vs **octet (byte)** | 1 octet = 8 bits. |
| **Adresse IP** vs **adresse MAC** | IP : couche réseau, peut changer. MAC : couche liaison, gravée matériellement. |
| **Routeur** vs **switch** | Routeur : entre réseaux (couche 3, IP). Switch : dans un réseau (couche 2, MAC). |
| **`for x in L`** vs **`for i in range(len(L))`** | Le premier itère sur les éléments, le second sur les indices. |
| **Mutable** vs **immuable** | Mutable : on peut modifier (liste, dict). Immuable : on ne peut pas (tuple, str, int). |
| **Paramètre** vs **argument** | Paramètre : nom dans la signature. Argument : valeur passée à l'appel. |

---

## 6. Mini-quiz de révision (10 Q/R)

> Prends une feuille, réponds, puis vérifie.

**Q1.** Quelle est la complexité de la recherche dichotomique sur un tableau de taille n ?
**R1.** O(log n). Pré-requis : tableau **trié**.

**Q2.** Quelle structure de données utilise-t-on pour un parcours en largeur (BFS) ?
**R2.** Une **file** (FIFO), typiquement `collections.deque`.

**Q3.** Donnez un exemple de fonction pure et de fonction impure en Python.
**R3.** Pure : `def carre(x): return x*x`. Impure : `def ajoute(x): global s; s += x` (effet de bord).

**Q4.** Quelle est la différence entre clé primaire et clé étrangère en SQL ?
**R4.** Une **clé primaire** identifie de manière unique une ligne d'une table. Une **clé étrangère** référence une clé primaire d'une autre table pour exprimer une relation.

**Q5.** En Python, quelle est la différence entre `==` et `is` ?
**R5.** `==` compare les **valeurs**. `is` vérifie si deux variables désignent le **même objet** en mémoire.

**Q6.** Citez les quatre piliers de la POO.
**R6.** Encapsulation, héritage, polymorphisme, abstraction.

**Q7.** Quelle est la complexité du tri rapide en moyenne et en pire cas ?
**R7.** Moyenne : O(n log n). Pire cas : O(n²) (pivot mal choisi sur tableau déjà trié).

**Q8.** Qu'est-ce qu'un effet de bord ?
**R8.** Une modification d'un état hors de la fonction (variable globale, argument mutable, I/O). Les fonctions pures n'en ont pas.

**Q9.** Qu'est-ce qui différencie un processus d'un thread ?
**R9.** Un **processus** a sa propre mémoire isolée. Un **thread** est un fil d'exécution interne à un processus et partage la mémoire avec les autres threads du même processus.

**Q10.** Donnez le code Python d'un parcours infixe d'un arbre binaire et expliquez son intérêt sur un ABR.
**R10.**
```python
def infixe(n):
    if n is None: return
    infixe(n.gauche)
    print(n.val)
    infixe(n.droite)
```
Sur un **ABR** (arbre binaire de recherche), le parcours infixe affiche les valeurs **dans l'ordre croissant**.

---

## 7. Check-list finale (à cocher mentalement la veille)

- [ ] Je sais coder une recherche dichotomique de tête.
- [ ] Je connais les 4 tris au programme et leurs complexités.
- [ ] Je sais écrire BFS et DFS.
- [ ] Je sais distinguer pile et file et les implémenter.
- [ ] Je sais calculer la complexité d'une boucle simple, double, dichotomique.
- [ ] Je connais SQL : SELECT, WHERE, JOIN, INSERT, UPDATE, DELETE.
- [ ] Je sais lire un schéma de base de données (clés primaires/étrangères).
- [ ] Je sais expliquer la différence processus/thread.
- [ ] Je connais les 4 paradigmes (impératif, OO, fonctionnel, événementiel).
- [ ] Je sais protéger une section critique (verrou, mutex).
- [ ] Je connais le modèle TCP/IP grossièrement (4 couches).
- [ ] Je sais ce qu'est un protocole (HTTP, HTTPS, TCP, UDP, IP, DNS).
- [ ] Je sais expliquer chiffrement symétrique vs asymétrique.
- [ ] Je sais utiliser `assert` et écrire une docstring.

## Liens

- Fiches associées : toutes les fiches `00_` à `09_`, et `17_paradigmes_programmation.md`.
- Programme officiel NSI Terminale (BO 2019).
- Annales du bac NSI : sujets et corrigés des sessions précédentes.
- Banque d'épreuves pratiques (publiée chaque année par le Ministère).
- Source initiale : https://lyotardjulien.forge.apps.education.fr/terminale-specialite-nsi-au-lycee-notre-dame/80_sequence_80/80_sequence_80/

---

> **Bon courage pour le bac NSI !**
> Une dernière astuce : la veille au soir, pas de révision intensive. Relis cette fiche, dors 8h, mange un bon petit-déjeuner. Tu as travaillé toute l'année, tu connais ton métier.
