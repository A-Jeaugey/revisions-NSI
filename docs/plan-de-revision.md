# 🗓️ Plan de révision NSI Terminale — J-30 → Bac

Programme bac NSI : **épreuve écrite (3h30, coef 16)** + **épreuve pratique (1h, 2 exercices imposés sur 12)**.
Ce planning te fait passer en revue les 19 séquences en 4 semaines, en privilégiant
les sujets à fort poids et en intégrant des sessions de **pratique sur poste**.

---

## 🎯 Objectifs en sortie

- Maîtriser les **structures de données** (pile, file, liste chaînée, arbre, graphe, dictionnaire).
- Coder à la main : récursivité, BFS/DFS, parcours d'arbre, tris (fusion, rapide), dichotomie.
- Lire/écrire du **SQL** complet (SELECT/JOIN/GROUP BY/HAVING/ORDER BY).
- Connaître **par cœur** les complexités du [memo](memos/memo_complexites.md).
- Savoir rédiger une **classe Python** propre (POO).
- Comprendre **réseau (OSI/TCP/IP/IP)**, **processus**, **Linux** (commandes de base).

---

## 🗓 Calendrier par semaine

### Semaine 1 — Fondamentaux Python + structures linéaires (J-30 → J-23)

| Jour | Matin (1h30) | Après-midi (1h30) | Soir (30 min) |
|------|--------------|-------------------|---------------|
| **J-30** | [00 Python](fiches/00_python_remise_en_route.md) | TP : refaire 5 exos Capytale séq 0 | Flashcards vocabulaire |
| **J-29** | [01 Récursivité](fiches/01_recursivite.md) | Coder factorielle, Fibonacci, Hanoï | Flashcards récursivité |
| **J-28** | [02 ADT](fiches/02_types_abstraits_donnees.md) — Piles | Implémenter pile + calculatrice polonaise inversée | Quiz pile/file |
| **J-27** | [02 ADT](fiches/02_types_abstraits_donnees.md) — Files + Listes chaînées | Implémenter file (deque) + liste chaînée | — |
| **J-26** | [03 POO](fiches/03_programmation_orientee_objet.md) | Coder classe `Pile` puis classe `CompteBancaire` | Diagrammes UML |
| **J-25** | [memo Python bac](memos/memo_python_bac.md) | Reprendre 12 exos type bac pratique | — |
| **J-24** | **Mini-éval semaine 1** : refaire un sujet pratique 2024 | Corrigés + auto-correction | Repos |

### Semaine 2 — Structures non-linéaires + algos (J-23 → J-16)

| Jour | Matin | Après-midi | Soir |
|------|-------|------------|------|
| **J-23** | [04 Graphes](fiches/04_graphes.md) | Coder représentation par dict + BFS | [Diagramme parcours](diagrammes/parcours_graphes.md) |
| **J-22** | [04 Graphes](fiches/04_graphes.md) — DFS, applications | Coder DFS récursif + détection de cycle | — |
| **J-21** | [05 Arbres](fiches/05_arbres.md) | Coder ABR : insertion, recherche, parcours | [Diagramme arbres](diagrammes/arbres_terminologie.md) |
| **J-20** | [07 Diviser pour régner](fiches/07_diviser_pour_regner.md) | Coder tri fusion + tri rapide + dichotomie | Flashcards complexités |
| **J-19** | [20 Glouton + KNN](fiches/20_glouton_knn.md) | Rendu de monnaie + sac à dos fractionnaire | — |
| **J-18** | [30 Prog. dynamique](fiches/30_programmation_dynamique.md) | Fibonacci mémoïsé + sac à dos 0/1 | Flashcards DP |
| **J-17** | **Mini-éval semaine 2** : sujet écrit 2023 (graphes/arbres) | Corrigé + reprise | Repos |

### Semaine 3 — Bases de données + Système (J-16 → J-9)

| Jour | Matin | Après-midi | Soir |
|------|-------|------------|------|
| **J-16** | [06 BDD](fiches/06_bases_de_donnees.md) — modèle relationnel | TD modèles relationnels (PDFs) | [Cheat-sheet SQL](memos/memo_sql_bac.md) |
| **J-15** | [06 BDD](fiches/06_bases_de_donnees.md) — SQL | Faire 15 requêtes SQL variées (SELECT/JOIN/GROUP) | Flashcards SQL |
| **J-14** | [08 Processus](fiches/08_processus.md) | Schéma états-processus + interblocage | [Diagramme états](diagrammes/etats_processus.md) |
| **J-13** | [09 Linux](fiches/09_linux.md) | Pratique terminal : 30 commandes en boucle | Cheat-sheet Linux |
| **J-12** | [10 Réseaux](fiches/10_reseaux.md) — OSI/TCP-IP, IP | Exos calcul masque/sous-réseau | [Diagramme OSI](diagrammes/modele_osi_tcpip.md) |
| **J-11** | [10 Réseaux](fiches/10_reseaux.md) — TCP/UDP, encapsulation | Exos questions de cours type bac | — |
| **J-10** | **Mini-éval semaine 3** : sujet bac BDD + Réseau | Corrigé | Repos |

### Semaine 4 — Crypto, paradigmes, synthèse (J-9 → J-1)

| Jour | Matin | Après-midi | Soir |
|------|-------|------------|------|
| **J-9** | [40 Cryptographie](fiches/40_cryptographie.md) | Coder César + Vigenère + comprendre RSA | — |
| **J-8** | [50 SoC](fiches/50_soc.md) | Cycle d'instruction + von Neumann | — |
| **J-7** | [60 Recherche textuelle](fiches/60_recherche_textuelle.md) | Coder algo naïf + KMP (lecture) | — |
| **J-6** | [70 Paradigmes](fiches/70_paradigmes_programmation.md) | Comparer impératif / fonctionnel sur 3 exemples | — |
| **J-5** | [80 Approfondissement](fiches/80_approfondissement.md) | Quiz transverse + révision complexités | [Memo complexités](memos/memo_complexites.md) |
| **J-4** | **Sujet blanc complet** (3h30 chronométré) | Corrigé + auto-évaluation | Repos |
| **J-3** | Reprise des points faibles identifiés J-4 | 2 exos pratiques type bac | — |
| **J-2** | Relecture rapide des 19 fiches (TL;DR uniquement) | Quiz éclair sur tout | — |
| **J-1** | **Repos**. Lecture détendue des mémos. | Couché tôt. | — |

---

## ✅ Méthode de révision conseillée

### La technique des 3 passages
1. **Lire la TL;DR** + le plan de la fiche (5 min). Tu identifies ce que tu connais déjà.
2. **Lire la fiche en entier**, code et diagrammes inclus (30-45 min).
3. **Reformuler de mémoire** sur une feuille blanche les notions clés et un algo phare (15 min).

### La technique du « code à la main »
À chaque fiche contenant un algo, ferme l'ordinateur et **écris le code sur papier**.
À l'épreuve écrite, tu coderas Python à la main : entraîne-toi.

### Auto-questionnement
Chaque fiche se termine par 3-5 **questions types au bac**. Ferme la fiche, réponds
à voix haute, puis vérifie. Si tu hésites → relis la section correspondante.

---

## 🎒 Sac de révision (à imprimer)

À J-3, imprime ces 4 fichiers et garde-les sous la main :
- `memos/memo_complexites.md`
- `memos/memo_python_bac.md`
- `memos/memo_sql_bac.md`
- `memos/memo_vocabulaire.md`

Ce sont tes **bouées de sauvetage** mémoire le jour J.

---

## 📊 Auto-évaluation hebdomadaire (note sur 10)

| Semaine | Date | Note auto | Points faibles à retravailler |
|---------|------|-----------|-------------------------------|
| 1 | J-24 | __/10 |  |
| 2 | J-17 | __/10 |  |
| 3 | J-10 | __/10 |  |
| 4 | J-4  | __/10 |  |

---

Bonne chance. **La régularité bat l'intensité.** 🎯
