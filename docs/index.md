---
title: Accueil
hide:
  - navigation
  - toc
---

<style>
.hero {
  text-align: center;
  padding: 2.5rem 1rem 1.5rem;
  background: linear-gradient(135deg, #3949ab 0%, #5e35b1 100%);
  color: white;
  border-radius: 12px;
  margin-bottom: 2rem;
}
.hero h1 { color: white; font-size: 2.4rem; margin: 0 0 0.5rem; }
.hero p  { color: rgba(255,255,255,.92); font-size: 1.05rem; max-width: 720px; margin: 0 auto; }
.countdown { font-size: 3rem; font-weight: 700; margin: 1rem 0 0.2rem; letter-spacing: 0.05em; }
.countdown-label { color: rgba(255,255,255,.85); font-size: 0.95rem; }

.cta-row { display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap; margin-top: 1.5rem; }
.cta { display: inline-block; padding: 0.6rem 1.2rem; border-radius: 999px; background: rgba(255,255,255,.18); color: white !important; text-decoration: none; font-weight: 600; transition: background 0.15s; }
.cta:hover { background: rgba(255,255,255,.28); }
.cta--solid { background: white; color: #3949ab !important; }
.cta--solid:hover { background: #f3f4f6; }
</style>

<div class="hero" markdown>

# 🎓 Révisions NSI Terminale

Pack complet pour préparer le bac NSI : **18 fiches de séquence**, **4 mémos**,
**6 diagrammes**, plan de révision sur 4 semaines. Conforme au programme officiel BO 2020.

<div id="bac-countdown" class="countdown">…</div>
<div class="countdown-label">jours avant l'épreuve écrite (date à régler dans <code>countdown.js</code>)</div>

<div class="cta-row">
  <a class="cta cta--solid" href="plan-de-revision/">📅 Plan de révision</a>
  <a class="cta" href="fiches/">📚 Fiches par séquence</a>
  <a class="cta" href="memos/memo_complexites/">🧮 Mémo complexités</a>
</div>

</div>

## 🚀 Par où commencer ?

<div class="grid cards" markdown>

- :material-rocket-launch:{ .lg .middle } **Première fois ici ?**

    ---

    Lis d'abord le **plan de révision** (4 semaines structurées), puis pioche
    dans les fiches selon ton avancement.

    [:octicons-arrow-right-24: Plan de révision](plan-de-revision.md)

- :material-book-open-page-variant:{ .lg .middle } **Réviser une notion précise**

    ---

    Toutes les fiches sont indexées par numéro de séquence (0 → 80). Chacune
    contient TL;DR, vocabulaire, code Python, diagrammes, pièges et Q/R bac.

    [:octicons-arrow-right-24: Toutes les fiches](fiches/index.md)

- :material-clipboard-list-outline:{ .lg .middle } **Avant l'épreuve**

    ---

    Garde sous la main les **mémos** : complexités, pièges Python, cheat-sheet
    SQL, glossaire alphabétique.

    [:octicons-arrow-right-24: Mémos transverses](memos/index.md)

- :material-graph:{ .lg .middle } **Visualiser**

    ---

    Cartes mentales et organigrammes pour les notions visuelles : arbre de
    décision algorithmique, parcours de graphes, modèles OSI/TCP-IP, etc.

    [:octicons-arrow-right-24: Diagrammes](diagrammes/index.md)

</div>

---

## 📚 Les 18 fiches en un coup d'œil

<div class="grid cards" markdown>

- :material-language-python: **0 — Python remise en route**

    Variables, listes, dictionnaires, slicing, compréhensions, exceptions.

    [Lire :octicons-arrow-right-16:](fiches/00_python_remise_en_route.md)

- :fontawesome-solid-arrows-spin: **1 — Récursivité**

    Cas de base, factorielle, Fibonacci, Tours de Hanoï.

    [Lire :octicons-arrow-right-16:](fiches/01_recursivite.md)

- :material-package-variant-closed: **2 — Types abstraits (ADT)**

    Pile (LIFO), File (FIFO), liste chaînée, calculatrice polonaise inversée.

    [Lire :octicons-arrow-right-16:](fiches/02_types_abstraits_donnees.md)

- :material-account-tie-hat: **3 — POO**

    Classes, instances, héritage, polymorphisme, méthodes spéciales.

    [Lire :octicons-arrow-right-16:](fiches/03_programmation_orientee_objet.md)

- :material-graph-outline: **4 — Graphes**

    Matrice / liste d'adjacence, BFS, DFS, applications.

    [Lire :octicons-arrow-right-16:](fiches/04_graphes.md)

- :material-file-tree-outline: **5 — Arbres**

    Vocabulaire, ABR, parcours préfixe / infixe / suffixe, tas.

    [Lire :octicons-arrow-right-16:](fiches/05_arbres.md)

- :material-database: **6 — Bases de données (SQL)**

    Modèle relationnel, SELECT/JOIN/GROUP BY, ACID, transactions.

    [Lire :octicons-arrow-right-16:](fiches/06_bases_de_donnees.md)

- :material-call-split: **7 — Diviser pour régner**

    Tri fusion, tri rapide, dichotomie, exponentiation rapide.

    [Lire :octicons-arrow-right-16:](fiches/07_diviser_pour_regner.md)

- :material-cog-sync-outline: **8 — Processus**

    États, ordonnancement, fork, interblocage (Coffman).

    [Lire :octicons-arrow-right-16:](fiches/08_processus.md)

- :material-linux: **9 — Linux**

    Shell, commandes, permissions, redirections, scripts.

    [Lire :octicons-arrow-right-16:](fiches/09_linux.md)

- :material-lan: **10 — Réseaux**

    OSI / TCP-IP, IPv4 + CIDR, TCP/UDP, encapsulation.

    [Lire :octicons-arrow-right-16:](fiches/10_reseaux.md)

- :material-treasure-chest: **20 — Glouton & KNN**

    Rendu de monnaie, sac à dos fractionnaire, k-plus proches voisins.

    [Lire :octicons-arrow-right-16:](fiches/20_glouton_knn.md)

- :material-table-large: **30 — Programmation dynamique**

    Mémoïsation, tabulation, sac à dos 0/1, PLSC.

    [Lire :octicons-arrow-right-16:](fiches/30_programmation_dynamique.md)

- :material-key-variant: **40 — Cryptographie**

    César, Vigenère, RSA, signature, hachage SHA-256.

    [Lire :octicons-arrow-right-16:](fiches/40_cryptographie.md)

- :material-chip: **50 — System on Chip (SoC)**

    von Neumann vs Harvard, cycle d'instruction, hiérarchie mémoire.

    [Lire :octicons-arrow-right-16:](fiches/50_soc.md)

- :material-magnify: **60 — Recherche textuelle**

    Algo naïf, KMP, Boyer-Moore, Rabin-Karp, regex.

    [Lire :octicons-arrow-right-16:](fiches/60_recherche_textuelle.md)

- :material-language-haskell: **70 — Paradigmes**

    Impératif, fonctionnel, déclaratif, événementiel.

    [Lire :octicons-arrow-right-16:](fiches/70_paradigmes_programmation.md)

- :material-trophy-outline: **80 — Synthèse & quiz**

    Récapitulatif complet, conseils méthodo, mini-quiz.

    [Lire :octicons-arrow-right-16:](fiches/80_approfondissement.md)

</div>

---

## ⚙️ Comment utiliser ce site

!!! tip "Mobile-friendly"
    Le site fonctionne aussi bien sur ordinateur que sur téléphone — révise dans le
    train, dans la queue à la cantine ou avant de t'endormir.

!!! info "Recherche full-text"
    Tape :material-magnify: ou `/` pour ouvrir la barre de recherche. Tape un mot
    (ex : « Hanoï », « JOIN », « BFS ») et tu trouveras toutes les occurrences.

!!! tip "Mode sombre"
    Bascule clair/sombre via l'icône :material-weather-night: en haut à droite.

!!! example "Code copiable"
    Sur chaque bloc de code Python, le bouton :material-content-copy: copie le
    contenu en un clic.

---

## 🧠 Mémo de dernière minute

| Mémo | Lien |
|------|------|
| Toutes les complexités à connaître | [📊 Mémo complexités](memos/memo_complexites.md) |
| Pièges Python typiques au bac | [🐍 Mémo Python](memos/memo_python_bac.md) |
| Cheat-sheet SQL complet | [🗄️ Mémo SQL](memos/memo_sql_bac.md) |
| Glossaire alphabétique des notions | [📖 Glossaire](memos/memo_vocabulaire.md) |

---

<p style="text-align:center; color: var(--md-default-fg-color--light); font-size: 0.9rem; margin-top: 2rem;">
🚀 Bonne révision et bon bac !<br>
<em>La régularité bat l'intensité.</em>
</p>
