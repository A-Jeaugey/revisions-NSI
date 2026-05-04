---
title: Toutes les fiches
---

# 📚 Toutes les fiches

Une fiche par séquence du cours. Chacune suit la même structure :
**TL;DR → Plan → Notions clés → Vocabulaire → Algorithmes & code → Diagramme →
Pièges au bac → Questions types → Liens.**

!!! tip "Périmètre du programme"
    Chaque fiche commence par un encadré indiquant ce qui est **au programme strict** et ce qui est **hors programme NSI**, en s'appuyant sur le BO Terminale et la note de service MENE2227884N (2022) qui définit le périmètre évaluable à l'écrit. Les notions hors programme ne sont **pas** dans ces fiches.

## 🐍 Bases Python & structures

<div class="grid cards" markdown>

- :material-language-python: **1 — Python : remise en route**

    Variables, types, structures de contrôle, listes, dictionnaires, fonctions,
    exceptions, fichiers.

    [→ Lire la fiche](01_python_remise_en_route.md)

- :fontawesome-solid-arrows-spin: **2 — Récursivité**

    Cas de base, pile d'appels, factorielle, Fibonacci, dichotomie récursive,
    Tours de Hanoï.

    [→ Lire la fiche](02_recursivite.md)

- :material-package-variant-closed: **3 — Types abstraits (ADT)**

    Pile (LIFO), File (FIFO), interface vs implémentation, vérification de
    parenthésage.

    [→ Lire la fiche](03_types_abstraits_donnees.md)

- :material-account-tie-hat: **4 — Programmation orientée objet (POO)**

    Vocabulaire (classe, attribut, méthode, objet), `__init__`, méthodes,
    `__str__` / `__repr__`. *(Héritage et polymorphisme : hors programme.)*

    [→ Lire la fiche](04_programmation_orientee_objet.md)

</div>

## 🌳 Structures non linéaires

<div class="grid cards" markdown>

- :material-graph-outline: **5 — Graphes** *(moins prioritaire — note 2023+)*

    Définitions, matrice / liste d'adjacence, BFS, DFS, plus court chemin BFS
    non pondéré, détection de cycle simple.

    [→ Lire la fiche](05_graphes.md)

- :material-file-tree-outline: **6 — Arbres**

    Vocabulaire (racine, feuille, hauteur), arbre binaire, ABR, parcours
    préfixe/infixe/suffixe/largeur.

    [→ Lire la fiche](06_arbres.md)

</div>

## 🗄 Données

<div class="grid cards" markdown>

- :material-database: **7 — Bases de données (SQL)**

    Modèle relationnel, clés primaires/étrangères, contraintes, SQL au
    périmètre bac : `SELECT/FROM/WHERE/JOIN/INSERT/UPDATE/DELETE/DISTINCT/ORDER BY`,
    agrégats simples. *(`GROUP BY`, `HAVING`, ACID : hors programme.)*

    [→ Lire la fiche](07_bases_de_donnees.md)

</div>

## ⚡ Stratégies algorithmiques

<div class="grid cards" markdown>

- :material-call-split: **8 — Diviser pour régner**

    Tri fusion, dichotomie, récurrences.

    [→ Lire la fiche](08_diviser_pour_regner.md)

- :material-treasure-chest: **12 — Glouton & KNN**

    Rendu de monnaie, sac à dos fractionnaire, ordonnancement d'activités,
    K-plus proches voisins.

    [→ Lire la fiche](12_glouton_knn.md)

- :material-table-large: **13 — Programmation dynamique** *(moins prioritaire)*

    Mémoïsation top-down, tabulation bottom-up, rendu de monnaie non canonique.

    [→ Lire la fiche](13_programmation_dynamique.md)

- :material-magnify: **16 — Recherche textuelle** *(moins prioritaire)*

    Algorithme naïf, présentation de Boyer-Moore et son efficacité. *(KMP, regex : hors programme.)*

    [→ Lire la fiche](16_recherche_textuelle.md)

</div>

## 🖥 Système & réseaux

<div class="grid cards" markdown>

- :material-cog-sync-outline: **9 — Processus**

    États, ordonnancement, création de processus, **interblocage** (Coffman).

    [→ Lire la fiche](09_processus.md)

- :material-linux: **10 — Linux**

    Shell, arborescence, commandes de base (`ls`, `cd`, `cp`, `chmod`),
    permissions rwx + octales, redirections simples (`|`, `>`, `<`).

    [→ Lire la fiche](10_linux.md)

- :material-lan: **11 — Réseaux**

    TCP/IP en 4 couches, IPv4 + CIDR, plages privées, encapsulation, **routage
    RIP/OSPF** (programme Terminale).

    [→ Lire la fiche](11_reseaux.md)

- :material-chip: **15 — System on Chip (SoC)** *(moins prioritaire)*

    Identification des composants d'un SoC, avantages de l'intégration
    (vitesse, consommation), architecture de von Neumann en bref.

    [→ Lire la fiche](15_soc.md)

</div>

## 🔐 Sécurité & paradigmes

<div class="grid cards" markdown>

- :material-key-variant: **14 — Cryptographie** *(moins prioritaire)*

    Vocabulaire, distinction symétrique/asymétrique, principe HTTPS, masque
    jetable XOR (sécurité parfaite de Shannon). *(RSA détaillé, signature, hash : hors programme.)*

    [→ Lire la fiche](14_cryptographie.md)

- :material-language-haskell: **17 — Paradigmes de programmation** *(moins prioritaire)*

    Identifier les 4 paradigmes (impératif, OO, fonctionnel, déclaratif) et
    choisir un paradigme selon le contexte.

    [→ Lire la fiche](17_paradigmes_programmation.md)

</div>

## 🏆 Synthèse finale

<div class="grid cards" markdown>

- :material-trophy-outline: **18 — Approfondissement & synthèse**

    **À lire à J-2 et J-1.** Récapitulatif algorithmes + structures, conseils
    méthodo écrit/pratique, vocabulaire piégeux, mini-quiz.

    [→ Lire la fiche](18_approfondissement.md)

- :material-infinity: **19 — Décidabilité & calculabilité** *(moins prioritaire)*

    Problème de l'arrêt, indécidabilité, démonstration par l'absurde
    (programme `halt` → `sym(sym)`).

    [→ Lire la fiche](19_decidabilite_calculabilite.md)

</div>
