# 🧭 Arbre de décision — « Quel algorithme choisir ? »

Diagramme synthétique reliant un **type de problème** à la bonne **stratégie algorithmique**.
À garder en tête pour le bac NSI.

---

## Vue d'ensemble

```mermaid
flowchart TD
    Start([Problème]) --> Q1{Recherche dans une structure ?}
    Q1 -- Non --> Q2{Optimisation ?}
    Q1 -- Oui --> R1{Données triées ?}
    R1 -- Oui --> DICHO[Dichotomie\nO log n]
    R1 -- Non --> R2{Beaucoup de recherches ?}
    R2 -- Oui --> HASH[Dictionnaire / set\nO 1 moyen]
    R2 -- Non --> LIN[Recherche linéaire\nO n]

    Q2 -- Non --> Q3{Tri ?}
    Q2 -- Oui --> O1{Solution exacte requise ?}

    Q3 -- Petit n --> INS[Tri par insertion\nO n²]
    Q3 -- Grand n --> FUSION[Tri fusion ou rapide\nO n log n]

    O1 -- Oui --> O2{Sous-problèmes se chevauchent ?}
    O1 -- Non --> HEUR[Heuristique / glouton]
    O2 -- Oui --> DP[Programmation dynamique\nFibo memoise, sac à dos 0/1]
    O2 -- Non --> O3{Choix glouton optimal ?}
    O3 -- Oui --> GREEDY[Glouton\nrendu monnaie €, sac fractionnaire]
    O3 -- Non --> DC[Diviser pour régner\ntri fusion, dichotomie]
```

---

## Choix de structure de données

```mermaid
flowchart TD
    Q[Quelle structure ?] --> A{Ordre LIFO ?}
    A -- Oui --> Pile[PILE\npush/pop O 1]
    A -- Non --> B{Ordre FIFO ?}
    B -- Oui --> File[FILE\nenqueue/dequeue O 1]
    B -- Non --> C{Recherche par clé ?}
    C -- Oui --> Dict[Dictionnaire / table de hachage\nO 1 moyen]
    C -- Non --> D{Données hiérarchiques ?}
    D -- Oui --> Arbre[ARBRE\nABR : O log n si équilibré]
    D -- Non --> E{Relations entre éléments ?}
    E -- Oui --> Graphe[GRAPHE\nliste ou matrice d adjacence]
    E -- Non --> List[LISTE\nindex direct O 1]
```

---

## Quand chaque parcours ?

```mermaid
flowchart LR
    Pb{But ?} -- Plus court chemin\nnon pondéré --> BFS[BFS\nfile, O V+E]
    Pb -- Composantes connexes\nDétection cycle --> DFS[DFS\npile/récursion, O V+E]
    Pb -- Arbre binaire\nordre croissant --> INF[Parcours infixe]
    Pb -- Évaluation\nexpressions --> SUF[Parcours suffixe / postfixe]
    Pb -- Copie d'arbre --> PRE[Parcours préfixe]
```

---

## Cheat-sheet « si je vois… alors »

| Indices dans l'énoncé | Algorithme |
|-----------------------|------------|
| « plus petit nombre de pièces » avec € | Glouton |
| « plus petit nombre de pièces » avec système quelconque | Programmation dynamique |
| « plus court chemin », graphe non pondéré | BFS |
| « tous les sommets atteignables » | DFS |
| « est-ce qu'il y a un cycle ? » | DFS avec marquage |
| « combien de chemins ? » dans un treillis | DP |
| « rechercher dans un texte » | Naïf / KMP |
| « trier n grandes valeurs » | Tri fusion ou rapide |
| « trouver l'élément le plus proche » | KNN |
| « tous les éléments d'un arbre dans l'ordre » | Parcours infixe |
| « hiérarchie » | Arbre |
| « liens entre entités » | Graphe |
