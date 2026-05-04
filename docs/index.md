---
title: Accueil
hide:
  - navigation
  - toc
  - path
---

<section class="nsi-home">

<div class="nsi-terminal" data-reveal>
  <div class="nsi-terminal__bar">
    <span class="nsi-terminal__dot nsi-terminal__dot--r"></span>
    <span class="nsi-terminal__dot nsi-terminal__dot--y"></span>
    <span class="nsi-terminal__dot nsi-terminal__dot--g"></span>
    <span class="nsi-terminal__title">bac-nsi — zsh</span>
  </div>
  <div class="nsi-terminal__body" id="nsi-term"></div>
</div>

<div class="nsi-stats" data-reveal>
  <div class="nsi-stat">
    <div class="nsi-stat__label">J−BAC</div>
    <div class="nsi-stat__value" id="bac-countdown">…</div>
  </div>
  <div class="nsi-stat">
    <div class="nsi-stat__label">Fiches</div>
    <div class="nsi-stat__value"><span data-count="19">0</span><small>séquences</small></div>
  </div>
  <div class="nsi-stat">
    <div class="nsi-stat__label">Flashcards</div>
    <div class="nsi-stat__value"><span data-count="63">0</span><small>cartes</small></div>
  </div>
  <div class="nsi-stat">
    <div class="nsi-stat__label">QCM</div>
    <div class="nsi-stat__value"><span data-count="32">0</span><small>questions</small></div>
  </div>
</div>

<div class="nsi-cta-row" style="display:flex;gap:.5rem;justify-content:center;flex-wrap:wrap;margin:0 auto 3rem;max-width:56rem;padding:0 1rem;">
  <a class="nsi-btn" href="flashcards/">▶ Démarrer les flashcards</a>
  <a class="nsi-btn nsi-btn--ghost" href="quiz/">Lancer un QCM</a>
  <a class="nsi-btn nsi-btn--ghost" href="plan-de-revision/">Plan J−30</a>
</div>

</section>

<section class="nsi-section" data-reveal>
  <div class="nsi-section__head">
    <div>
      <div class="nsi-section__eyebrow">// drill.random()</div>
      <div class="nsi-section__title">Drill du jour</div>
    </div>
    <div class="nsi-section__meta">question piochée au hasard</div>
  </div>

  <div class="nsi-drill" id="nsi-drill">
    <div class="nsi-drill__label">Question</div>
    <div class="nsi-drill__q">Chargement…</div>
    <div class="nsi-drill__a"></div>
    <div class="nsi-drill__actions">
      <button class="nsi-btn" data-drill-reveal>Révéler la réponse ↓</button>
      <button class="nsi-btn nsi-btn--ghost" data-drill-next>Question suivante ↻</button>
    </div>
  </div>
</section>

<section class="nsi-section" data-reveal>
  <div class="nsi-section__head">
    <div>
      <div class="nsi-section__eyebrow">// progress.track()</div>
      <div class="nsi-section__title">Progression</div>
    </div>
    <div class="nsi-section__meta">sauvegardé en local</div>
  </div>

  <div class="nsi-tracker" id="nsi-tracker">
    <div class="nsi-tracker__head">
      <div class="nsi-tracker__title">Séquences étudiées</div>
      <div class="nsi-tracker__progress">0/18 · 0%</div>
    </div>
    <div class="nsi-tracker__bar"><div class="nsi-tracker__bar-fill"></div></div>
    <div class="nsi-tracker__grid"></div>
  </div>
</section>

<div class="nsi-marquee" data-reveal>
  <div class="nsi-marquee__track">
    <span class="nsi-marquee__item">récursivité</span>
    <span class="nsi-marquee__item">graphes</span>
    <span class="nsi-marquee__item">arbres</span>
    <span class="nsi-marquee__item">SQL</span>
    <span class="nsi-marquee__item">tri fusion</span>
    <span class="nsi-marquee__item">POO</span>
    <span class="nsi-marquee__item">réseaux</span>
    <span class="nsi-marquee__item">cryptographie</span>
    <span class="nsi-marquee__item">dichotomie</span>
    <span class="nsi-marquee__item">DP</span>
    <span class="nsi-marquee__item">glouton</span>
    <span class="nsi-marquee__item">Linux</span>
    <span class="nsi-marquee__item">processus</span>
    <span class="nsi-marquee__item">KNN</span>
    <span class="nsi-marquee__item">Boyer-Moore</span>
    <span class="nsi-marquee__item">HTTPS</span>
    <span class="nsi-marquee__item">pile</span>
    <span class="nsi-marquee__item">file</span>
    <span class="nsi-marquee__item">indécidabilité</span>
    <!-- duplication pour loop -->
    <span class="nsi-marquee__item">récursivité</span>
    <span class="nsi-marquee__item">graphes</span>
    <span class="nsi-marquee__item">arbres</span>
    <span class="nsi-marquee__item">SQL</span>
    <span class="nsi-marquee__item">tri fusion</span>
    <span class="nsi-marquee__item">POO</span>
    <span class="nsi-marquee__item">réseaux</span>
    <span class="nsi-marquee__item">cryptographie</span>
    <span class="nsi-marquee__item">dichotomie</span>
    <span class="nsi-marquee__item">DP</span>
    <span class="nsi-marquee__item">glouton</span>
    <span class="nsi-marquee__item">Linux</span>
    <span class="nsi-marquee__item">processus</span>
    <span class="nsi-marquee__item">KNN</span>
    <span class="nsi-marquee__item">Boyer-Moore</span>
    <span class="nsi-marquee__item">HTTPS</span>
    <span class="nsi-marquee__item">pile</span>
    <span class="nsi-marquee__item">file</span>
    <span class="nsi-marquee__item">indécidabilité</span>
  </div>
</div>

<section class="nsi-section" data-reveal>
  <div class="nsi-section__head">
    <div>
      <div class="nsi-section__eyebrow">// fiches.list()</div>
      <div class="nsi-section__title">Les 18 séquences</div>
    </div>
    <div class="nsi-section__meta">cliquer pour ouvrir</div>
  </div>

  <div class="nsi-bento">
    <a class="nsi-card nsi-card--accent nsi-card--large" href="fiches/02_recursivite/" data-fiche-id="02">
      <div><div class="nsi-card__num">seq_02.py</div>
      <h3 class="nsi-card__title">Récursivité</h3>
      <p class="nsi-card__desc">Cas de base, pile d'appels, Fibonacci, Tours de Hanoï.</p></div>
      <div class="nsi-card__foot"><span>· classique écrit</span><span class="nsi-card__arrow">→</span></div>
    </a>
    <a class="nsi-card nsi-card--wide" href="fiches/01_python_remise_en_route/" data-fiche-id="01">
      <div><div class="nsi-card__num">seq_01.py</div>
      <h3 class="nsi-card__title">Python remise en route</h3>
      <p class="nsi-card__desc">Bases, listes, dicts, slicing, compréhensions.</p></div>
      <div class="nsi-card__foot"><span>· fondations</span><span class="nsi-card__arrow">→</span></div>
    </a>
    <a class="nsi-card" href="fiches/03_types_abstraits_donnees/" data-fiche-id="03">
      <div><div class="nsi-card__num">seq_03</div>
      <h3 class="nsi-card__title">Types abstraits</h3>
      <p class="nsi-card__desc">Pile, file, liste chaînée.</p></div>
      <div class="nsi-card__foot"><span class="nsi-card__arrow">→</span></div>
    </a>
    <a class="nsi-card" href="fiches/04_programmation_orientee_objet/" data-fiche-id="04">
      <div><div class="nsi-card__num">seq_04</div>
      <h3 class="nsi-card__title">POO</h3>
      <p class="nsi-card__desc">Classes, attributs, méthodes, objets.</p></div>
      <div class="nsi-card__foot"><span class="nsi-card__arrow">→</span></div>
    </a>
    <a class="nsi-card nsi-card--wide" href="fiches/05_graphes/" data-fiche-id="05">
      <div><div class="nsi-card__num">seq_05</div>
      <h3 class="nsi-card__title">Graphes</h3>
      <p class="nsi-card__desc">Matrice / liste d'adjacence, BFS, DFS.</p></div>
      <div class="nsi-card__foot"><span class="nsi-card__arrow">→</span></div>
    </a>
    <a class="nsi-card nsi-card--wide" href="fiches/06_arbres/" data-fiche-id="06">
      <div><div class="nsi-card__num">seq_06</div>
      <h3 class="nsi-card__title">Arbres</h3>
      <p class="nsi-card__desc">ABR, parcours préfixe / infixe / suffixe / largeur.</p></div>
      <div class="nsi-card__foot"><span class="nsi-card__arrow">→</span></div>
    </a>
    <a class="nsi-card nsi-card--large" href="fiches/07_bases_de_donnees/" data-fiche-id="07">
      <div><div class="nsi-card__num">seq_07.sql</div>
      <h3 class="nsi-card__title">Bases de données · SQL</h3>
      <p class="nsi-card__desc">Modèle relationnel, clés, SQL (SELECT/JOIN), agrégats simples.</p></div>
      <div class="nsi-card__foot"><span>· 26 sujets sur 28</span><span class="nsi-card__arrow">→</span></div>
    </a>
    <a class="nsi-card" href="fiches/08_diviser_pour_regner/" data-fiche-id="08">
      <div><div class="nsi-card__num">seq_08</div>
      <h3 class="nsi-card__title">Diviser pour régner</h3>
      <p class="nsi-card__desc">Tri fusion, rapide, dichotomie.</p></div>
      <div class="nsi-card__foot"><span class="nsi-card__arrow">→</span></div>
    </a>
    <a class="nsi-card" href="fiches/12_glouton_knn/" data-fiche-id="12">
      <div><div class="nsi-card__num">seq_12</div>
      <h3 class="nsi-card__title">Glouton & KNN</h3>
      <p class="nsi-card__desc">Monnaie, sac à dos, voisins.</p></div>
      <div class="nsi-card__foot"><span class="nsi-card__arrow">→</span></div>
    </a>
    <a class="nsi-card" href="fiches/13_programmation_dynamique/" data-fiche-id="13">
      <div><div class="nsi-card__num">seq_13</div>
      <h3 class="nsi-card__title">Prog. dynamique</h3>
      <p class="nsi-card__desc">Mémoïsation, tabulation.</p></div>
      <div class="nsi-card__foot"><span class="nsi-card__arrow">→</span></div>
    </a>
    <a class="nsi-card nsi-card--wide" href="fiches/11_reseaux/" data-fiche-id="11">
      <div><div class="nsi-card__num">seq_11.net</div>
      <h3 class="nsi-card__title">Réseaux</h3>
      <p class="nsi-card__desc">TCP/IP, IPv4 + CIDR, TCP/UDP, routage RIP/OSPF.</p></div>
      <div class="nsi-card__foot"><span class="nsi-card__arrow">→</span></div>
    </a>
    <a class="nsi-card" href="fiches/09_processus/" data-fiche-id="09">
      <div><div class="nsi-card__num">seq_09</div>
      <h3 class="nsi-card__title">Processus</h3>
      <p class="nsi-card__desc">États, ordonnancement, interblocage.</p></div>
      <div class="nsi-card__foot"><span class="nsi-card__arrow">→</span></div>
    </a>
    <a class="nsi-card" href="fiches/10_linux/" data-fiche-id="10">
      <div><div class="nsi-card__num">seq_10.sh</div>
      <h3 class="nsi-card__title">Linux</h3>
      <p class="nsi-card__desc">Shell, commandes de base, permissions chmod.</p></div>
      <div class="nsi-card__foot"><span class="nsi-card__arrow">→</span></div>
    </a>
    <a class="nsi-card" href="fiches/14_cryptographie/" data-fiche-id="14">
      <div><div class="nsi-card__num">seq_14</div>
      <h3 class="nsi-card__title">Cryptographie</h3>
      <p class="nsi-card__desc">Symétrique vs asymétrique, HTTPS, masque jetable.</p></div>
      <div class="nsi-card__foot"><span class="nsi-card__arrow">→</span></div>
    </a>
    <a class="nsi-card" href="fiches/15_soc/" data-fiche-id="15">
      <div><div class="nsi-card__num">seq_15</div>
      <h3 class="nsi-card__title">SoC</h3>
      <p class="nsi-card__desc">Composants intégrés, vitesse + consommation.</p></div>
      <div class="nsi-card__foot"><span class="nsi-card__arrow">→</span></div>
    </a>
    <a class="nsi-card" href="fiches/16_recherche_textuelle/" data-fiche-id="16">
      <div><div class="nsi-card__num">seq_16</div>
      <h3 class="nsi-card__title">Recherche textuelle</h3>
      <p class="nsi-card__desc">Algo naïf, Boyer-Moore.</p></div>
      <div class="nsi-card__foot"><span class="nsi-card__arrow">→</span></div>
    </a>
    <a class="nsi-card" href="fiches/17_paradigmes_programmation/" data-fiche-id="17">
      <div><div class="nsi-card__num">seq_17</div>
      <h3 class="nsi-card__title">Paradigmes</h3>
      <p class="nsi-card__desc">Impératif, OO, fonctionnel, déclaratif.</p></div>
      <div class="nsi-card__foot"><span class="nsi-card__arrow">→</span></div>
    </a>
    <a class="nsi-card" href="fiches/19_decidabilite_calculabilite/" data-fiche-id="19">
      <div><div class="nsi-card__num">seq_19</div>
      <h3 class="nsi-card__title">Décidabilité & calculabilité</h3>
      <p class="nsi-card__desc">Problème de l'arrêt, indécidabilité, raisonnement par l'absurde.</p></div>
      <div class="nsi-card__foot"><span class="nsi-card__arrow">→</span></div>
    </a>
    <a class="nsi-card nsi-card--accent nsi-card--full" href="fiches/18_approfondissement/" data-fiche-id="18">
      <div><div class="nsi-card__num">seq_18 · synthèse finale</div>
      <h3 class="nsi-card__title">Kit de survie pour le J du bac</h3>
      <p class="nsi-card__desc">Récap algorithmes + structures + complexités + vocabulaire piégeux + mini-quiz. À lire à J−2 et J−1.</p></div>
      <div class="nsi-card__foot"><span>· révision express</span><span class="nsi-card__arrow">→</span></div>
    </a>
  </div>
</section>

<section class="nsi-section" data-reveal>
  <div class="nsi-section__head">
    <div>
      <div class="nsi-section__eyebrow">// tools/</div>
      <div class="nsi-section__title">Mémos & diagrammes</div>
    </div>
  </div>

  <div class="nsi-bento">
    <a class="nsi-card nsi-card--wide" href="memos/memo_complexites/">
      <div><div class="nsi-card__num">memo/complexites.md</div>
      <h3 class="nsi-card__title">Complexités O(...)</h3>
      <p class="nsi-card__desc">Tableau complet — recherche, tri, graphes, DP, crypto.</p></div>
      <div class="nsi-card__foot"><span class="nsi-card__arrow">→</span></div>
    </a>
    <a class="nsi-card nsi-card--wide" href="memos/memo_python_bac/">
      <div><div class="nsi-card__num">memo/python.md</div>
      <h3 class="nsi-card__title">Python — pièges bac</h3>
      <p class="nsi-card__desc">Mutabilité, slicing, compréhensions, syntaxe.</p></div>
      <div class="nsi-card__foot"><span class="nsi-card__arrow">→</span></div>
    </a>
    <a class="nsi-card nsi-card--wide" href="memos/memo_sql_bac/">
      <div><div class="nsi-card__num">memo/sql.md</div>
      <h3 class="nsi-card__title">SQL cheat-sheet</h3>
      <p class="nsi-card__desc">SELECT, JOIN, INSERT, UPDATE, DELETE, agrégats.</p></div>
      <div class="nsi-card__foot"><span class="nsi-card__arrow">→</span></div>
    </a>
    <a class="nsi-card nsi-card--wide" href="memos/memo_vocabulaire/">
      <div><div class="nsi-card__num">memo/vocabulaire.md</div>
      <h3 class="nsi-card__title">Glossaire A→Z</h3>
      <p class="nsi-card__desc">Définitions courtes attendues au bac.</p></div>
      <div class="nsi-card__foot"><span class="nsi-card__arrow">→</span></div>
    </a>
    <a class="nsi-card nsi-card--wide" href="diagrammes/arbre_decision_algos/">
      <div><div class="nsi-card__num">diag/decision.mmd</div>
      <h3 class="nsi-card__title">Quel algo choisir ?</h3>
      <p class="nsi-card__desc">Arbre de décision Mermaid.</p></div>
      <div class="nsi-card__foot"><span class="nsi-card__arrow">→</span></div>
    </a>
    <a class="nsi-card nsi-card--wide" href="diagrammes/parcours_graphes/">
      <div><div class="nsi-card__num">diag/bfs-dfs.mmd</div>
      <h3 class="nsi-card__title">BFS vs DFS</h3>
      <p class="nsi-card__desc">Parcours de graphes schématisés.</p></div>
      <div class="nsi-card__foot"><span class="nsi-card__arrow">→</span></div>
    </a>
  </div>
</section>
