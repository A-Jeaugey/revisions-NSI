# 🗓️ Plan de révision NSI Terminale — J-30 → Bac

Programme bac NSI : **épreuve écrite (3h30, 3 exercices indépendants imposés)** + **épreuve pratique (1h, 2 exercices issus de la banque officielle)**.
Ce planning te fait passer en revue les 19 séquences en 4 semaines, en privilégiant les chapitres **réellement testés à l'écrit** (BDD, structures de données, algorithmique, réseaux) et en intégrant des sessions de **pratique sur poste**.

> 📌 **Stratégie clé** : 80 % du temps sur les chapitres au programme strict (note MENE2227884N de 2022). Les chapitres hors-périmètre note 2023+ (graphes, prog. dynamique, crypto, SoC, paradigmes, recherche textuelle, décidabilité) sont survolés en **1h chacun** sur l'ensemble du mois — ils ne disparaissent pas, mais ils ne sont pas la priorité.

---

## 🎯 Objectifs en sortie

- Maîtriser les **structures de données** au programme : pile, file, liste, dictionnaire, arbre binaire, ABR, graphe.
- Coder à la main : récursivité, BFS/DFS sur graphe, parcours d'arbre, tris (sélection, insertion, fusion), dichotomie.
- Lire/écrire du **SQL** au périmètre bac : `SELECT FROM WHERE JOIN`, `INSERT`, `UPDATE`, `DELETE`, agrégats simples (`COUNT`, `SUM`, `AVG`). *(GROUP BY / HAVING ne sont pas requis au bac NSI.)*
- Connaître **par cœur** les complexités du [memo](memos/memo_complexites.md).
- Savoir lire et compléter une **classe Python** (vocabulaire POO : classe, attribut, méthode, objet — héritage et polymorphisme sont **hors programme**).
- Comprendre **TCP/IP** (4 couches), **routage RIP/OSPF**, **adressage IPv4 + CIDR**, **processus + interblocage**, **commandes Linux** de base.

---

## 🗓 Calendrier par semaine

### Semaine 1 — Python + structures linéaires + récursivité (J-30 → J-23)

| Jour | Matin (1h30) | Après-midi (1h30) | Soir (30 min) |
|------|--------------|-------------------|---------------|
| **J-30** | [01 Python](fiches/01_python_remise_en_route.md) | TP : refaire 5 exos type bac pratique | Flashcards vocabulaire |
| **J-29** | [02 Récursivité](fiches/02_recursivite.md) | Coder factorielle, Fibonacci, dichotomie récursive | Flashcards récursivité |
| **J-28** | [03 Types abstraits](fiches/03_types_abstraits_donnees.md) — Pile (LIFO) | Implémenter pile (impérative + classe) | Quiz pile/file |
| **J-27** | [03 Types abstraits](fiches/03_types_abstraits_donnees.md) — File (FIFO) | Implémenter file avec `deque` + classe | — |
| **J-26** | [04 POO](fiches/04_programmation_orientee_objet.md) — vocabulaire seul | Coder une classe simple : attributs, `__init__`, méthodes | — |
| **J-25** | [memo Python bac](memos/memo_python_bac.md) | 4-6 exos type bac pratique (banque officielle) | — |
| **J-24** | **Mini-éval semaine 1** : 1 sujet pratique 2024 chronométré | Corrigé + auto-évaluation | Repos |

### Semaine 2 — Arbres, graphes, algorithmique (J-23 → J-16)

| Jour | Matin | Après-midi | Soir |
|------|-------|------------|------|
| **J-23** | [06 Arbres](fiches/06_arbres.md) — vocabulaire, parcours | Coder préfixe / infixe / suffixe + parcours en largeur | [Diagramme arbres](diagrammes/arbres_terminologie.md) |
| **J-22** | [06 Arbres](fiches/06_arbres.md) — ABR | Coder insertion + recherche dans un ABR | — |
| **J-21** | [05 Graphes](fiches/05_graphes.md) — représentations + BFS | Coder matrice d'adjacence + dictionnaire de successeurs + BFS | [Diagramme parcours](diagrammes/parcours_graphes.md) |
| **J-20** | [05 Graphes](fiches/05_graphes.md) — DFS + plus court chemin BFS | Coder DFS récursif + détection de cycle | — |
| **J-19** | [08 Diviser pour régner](fiches/08_diviser_pour_regner.md) | Coder tri fusion + dichotomie | Flashcards complexités |
| **J-18** | [12 Glouton + KNN](fiches/12_glouton_knn.md) | Rendu de monnaie + sac à dos fractionnaire | — |
| **J-17** | **Mini-éval semaine 2** : 1 sujet écrit 2024 (arbres / graphes) | Corrigé + reprise | Repos |

### Semaine 3 — BDD/SQL + POO + Processus + Linux (J-16 → J-9)

> 💡 **C'est la semaine la plus rentable** : SQL apparaît dans 26 sujets sur 28 en 2024-2025.

| Jour | Matin | Après-midi | Soir |
|------|-------|------------|------|
| **J-16** | [07 BDD](fiches/07_bases_de_donnees.md) — modèle relationnel, clés, contraintes | Lire 5 schémas relationnels + identifier clés primaires/étrangères | [Cheat-sheet SQL](memos/memo_sql_bac.md) |
| **J-15** | [07 BDD](fiches/07_bases_de_donnees.md) — SQL `SELECT/JOIN/WHERE` | 10 requêtes SQL variées (sans `GROUP BY` — hors prog) | Flashcards SQL |
| **J-14** | [07 BDD](fiches/07_bases_de_donnees.md) — `INSERT/UPDATE/DELETE` + agrégats | Refaire 5 exos SQL bac 2024-2025 | — |
| **J-13** | [09 Processus](fiches/09_processus.md) — création, ordonnancement, **interblocage** | Schéma états-processus + scénarios deadlock | [Diagramme états](diagrammes/etats_processus.md) |
| **J-12** | [10 Linux](fiches/10_linux.md) — `pwd ls cd cp mv rm chmod` | Pratique terminal : navigation + permissions rwx/octales | — |
| **J-11** | [11 Réseaux](fiches/11_reseaux.md) — IPv4, masque, CIDR, encapsulation | Exos calcul masque / sous-réseau | [Diagramme TCP/IP](diagrammes/modele_osi_tcpip.md) |
| **J-10** | **Mini-éval semaine 3** : 1 sujet bac BDD + 1 sujet réseaux | Corrigé | Repos |

### Semaine 4 — Réseaux (routage), entraînement intensif (J-9 → J-1)

| Jour | Matin | Après-midi | Soir |
|------|-------|------------|------|
| **J-9** | [11 Réseaux](fiches/11_reseaux.md) — **routage RIP / OSPF** (au programme T) | Exercices table de routage + plus court chemin | — |
| **J-8** | **Sujet écrit complet n°1** (3h30 chronométré) | Corrigé + auto-évaluation détaillée | — |
| **J-7** | Reprise des points faibles identifiés J-8 | 4 exercices type bac pratique | — |
| **J-6** | [18 Synthèse](fiches/18_approfondissement.md) — relecture transversale | Quiz transverse + révision complexités | [Memo complexités](memos/memo_complexites.md) |
| **J-5** | **Sujet écrit complet n°2** (3h30 chronométré) | Corrigé + reprise des pièges récurrents | — |
| **J-4** | Survol des chapitres "moins prioritaires" : [14 Crypto](fiches/14_cryptographie.md), [15 SoC](fiches/15_soc.md), [17 Paradigmes](fiches/17_paradigmes_programmation.md), [19 Décidabilité](fiches/19_decidabilite_calculabilite.md) — **1h chacun max** | 4 exos pratiques | — |
| **J-3** | Survol [13 Prog. dynamique](fiches/13_programmation_dynamique.md) + [16 Recherche textuelle](fiches/16_recherche_textuelle.md) | Relire les 4 mémos (complexités, Python, SQL, vocabulaire) | — |
| **J-2** | Relecture rapide des 19 fiches (TL;DR uniquement) | Quiz éclair sur tout | — |
| **J-1** | **Repos**. Lecture détendue des mémos uniquement. | Couché tôt. | — |

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
Chaque fiche se termine par 3-5 **questions types au bac**. Ferme la fiche, réponds à voix haute, puis vérifie. Si tu hésites → relis la section correspondante.

### Hiérarchiser le hors-périmètre
Certaines notions sont **au programme officiel** mais **exclues du périmètre d'évaluation à l'écrit** par la note MENE2227884N : graphes, programmation dynamique, sécurisation des communications, décidabilité, recherche textuelle, paradigmes, SoC. Elles apparaissent quand même dans certains sujets — donc on les révise, mais en survol seulement.

---

## 🎒 Sac de révision (à imprimer)

À J-3, imprime ces 4 fichiers et garde-les sous la main :

- [`memo_complexites.md`](memos/memo_complexites.md)
- [`memo_python_bac.md`](memos/memo_python_bac.md)
- [`memo_sql_bac.md`](memos/memo_sql_bac.md)
- [`memo_vocabulaire.md`](memos/memo_vocabulaire.md)

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
