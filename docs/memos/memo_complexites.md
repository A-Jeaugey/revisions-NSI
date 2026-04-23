# 🧮 Mémo — Complexités à connaître par cœur

> **Convention** : `n` = taille des données ; `m` = taille du motif (recherche textuelle) ;
> `V` et `E` = nombre de sommets/arêtes d'un graphe ; `h` = hauteur d'un arbre ; `k` = clé/voisins.
> Les complexités sont exprimées en **O(...)** (pire cas sauf mention « moyenne »).

---

## 🔍 Recherche dans une structure

| Structure / opération | Pire cas | Moyenne | Notes |
|-----------------------|----------|---------|-------|
| Recherche linéaire (liste non triée) | O(n) | O(n) | Parcours séquentiel |
| Recherche dichotomique (liste triée) | O(log n) | O(log n) | Tableau **trié** indispensable |
| Recherche dictionnaire / set Python | O(n) | **O(1)** | Table de hachage, pire = collisions |
| Recherche dans un ABR équilibré | O(log n) | O(log n) | Si déséquilibré → O(n) |
| Recherche dans un ABR quelconque | O(n) | O(log n) | Cas moyen sur insertion aléatoire |

---

## 📊 Tris

| Tri | Pire | Moyenne | Meilleur | Mémoire | Stable | Au programme NSI |
|-----|------|---------|----------|---------|--------|------------------|
| Sélection | O(n²) | O(n²) | O(n²) | O(1) | Non | ✅ Première |
| Insertion | O(n²) | O(n²) | O(n) | O(1) | Oui | ✅ Première |
| Bulle (à bulles) | O(n²) | O(n²) | O(n) | O(1) | Oui | ✅ |
| **Tri fusion** | O(n log n) | O(n log n) | O(n log n) | **O(n)** | Oui | ✅ Diviser pour régner |
| **Tri rapide (quicksort)** | O(n²) | O(n log n) | O(n log n) | O(log n) | Non | ✅ Diviser pour régner |
| Tri par tas (heapsort) | O(n log n) | O(n log n) | O(n log n) | O(1) | Non | (HP) |

**À retenir** : `O(n log n)` est la borne théorique pour un tri par comparaison.

---

## 🌳 Arbres

| Opération | Arbre binaire de recherche (ABR) | Arbre binaire quelconque |
|-----------|----------------------------------|--------------------------|
| Recherche | O(h) — équilibré : O(log n) | O(n) |
| Insertion | O(h) | — |
| Suppression | O(h) | — |
| Parcours préfixe / infixe / suffixe | O(n) | O(n) |
| Parcours en largeur (BFS) | O(n) | O(n) |
| Calcul hauteur | O(n) | O(n) |
| Calcul taille (nb de nœuds) | O(n) | O(n) |

> Hauteur `h` : équilibré `h = O(log n)`, dégénéré (ABR construit sur série triée) `h = O(n)`.

---

## 🕸 Graphes

| Opération | Liste d'adjacence | Matrice d'adjacence |
|-----------|-------------------|---------------------|
| Espace mémoire | O(V + E) | O(V²) |
| Tester arête (u,v) ? | O(deg(u)) | O(1) |
| Lister voisins de u | O(deg(u)) | O(V) |
| BFS (parcours en largeur) | O(V + E) | O(V²) |
| DFS (parcours en profondeur) | O(V + E) | O(V²) |
| Plus court chemin non-pondéré | O(V + E) | O(V²) |

> **Choisir liste d'adjacence** quand le graphe est creux (E ≪ V²).
> **Choisir matrice** quand on a beaucoup de tests d'arêtes ou un graphe dense.

---

## 🔁 Récursivité — récurrences classiques

| Récurrence | Exemple | Solution |
|------------|---------|----------|
| T(n) = T(n-1) + O(1) | Factorielle, parcours linéaire | O(n) |
| T(n) = 2·T(n-1) + O(1) | Tours de Hanoï | O(2ⁿ) |
| T(n) = T(n/2) + O(1) | Dichotomie | O(log n) |
| T(n) = 2·T(n/2) + O(n) | Tri fusion | O(n log n) |
| T(n) = 2·T(n/2) + O(1) | Parcours arbre binaire équilibré | O(n) |
| T(n) = T(n-1) + T(n-2) + O(1) | Fibonacci naïf | O(φⁿ) ≈ O(2ⁿ) |

---

## ⚡ Diviser pour régner / Programmation dynamique

| Algorithme | Complexité | Type |
|------------|-----------|------|
| Recherche dichotomique | O(log n) | Diviser pour régner |
| Tri fusion | O(n log n) | Diviser pour régner |
| Tri rapide | O(n log n) moy. / O(n²) pire | Diviser pour régner |
| Fibonacci naïf | O(2ⁿ) | Récursif simple |
| Fibonacci mémoïsé | O(n) temps, O(n) espace | Prog. dynamique |
| Rendu de monnaie (DP) | O(n × S) où S = somme | Prog. dynamique |
| Sac à dos 0/1 (DP) | O(n × W) | Prog. dynamique |

---

## 💰 Algorithmes gloutons

| Problème | Glouton optimal ? | Complexité |
|----------|-------------------|------------|
| Rendu de monnaie système canonique (€ : 1/2/5/10/20/50/100/200/500) | ✅ Oui | O(n) |
| Rendu de monnaie système quelconque (ex : 1/3/4) | ❌ Non — utiliser DP | — |
| Sac à dos fractionnaire | ✅ Oui (tri par valeur/poids ↓) | O(n log n) |
| Sac à dos 0/1 | ❌ Non — utiliser DP | — |
| Ordonnancement de tâches (sélection par fin la plus tôt) | ✅ Oui | O(n log n) |

---

## 🤖 KNN (k-plus proches voisins)

| Phase | Complexité |
|-------|-----------|
| Apprentissage | O(1) (stocke juste les données) |
| Prédiction par point | O(n × d) — d = dimension |

---

## 🔎 Recherche textuelle (motif M long. m dans texte T long. n)

| Algorithme | Pire | Moyenne | Notes |
|-----------|------|---------|-------|
| Naïf (brute force) | O(n × m) | O(n × m) | Simple, base du programme |
| Knuth-Morris-Pratt (KMP) | O(n + m) | O(n + m) | Précalcul O(m) |

---

## 🔐 Cryptographie

| Opération | Complexité (clé/message de taille n bits) |
|-----------|-------------------------------------------|
| Chiffrement César / Vigenère | O(n) |
| Chiffrement / déchiffrement RSA | polynomial en la taille k (en bits) de la clé |
| Recherche brute force d'une clé n bits | O(2ⁿ) |

---

## 🧠 Aide-mémoire ordres de grandeur (n = 10⁶)

| Complexité | Temps approximatif (1 GHz) |
|-----------|----------------------------|
| O(1) | instantané |
| O(log n) | ~20 opérations |
| O(n) | 1 ms |
| O(n log n) | 20 ms |
| O(n²) | 1000 s ≈ 17 min |
| O(2ⁿ) avec n=30 | ~1 s ; avec n=60 | ~36 ans |

**À retenir** : si tu dépasses O(n²) avec n ≥ 10⁵ → repense ton algo.

---

## 🎯 Check-list bac

- [ ] Tu sais énoncer la complexité de **chaque** algo du programme sans hésiter.
- [ ] Tu sais justifier (« pourquoi O(n log n) ? » → arbre de récursion de profondeur log n × n par niveau).
- [ ] Tu sais distinguer **temps** et **espace**.
- [ ] Tu sais reconnaître **pire / moyenne / meilleur** cas.
