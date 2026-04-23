---
title: Flashcards
hide:
  - toc
---

# Flashcards

<div class="nsi-flash-wrap" id="nsi-flash-app">
  <div class="nsi-flash-meta">
    Carte <strong><span data-flash-current>1</span></strong> / <span data-flash-total>60</span>
    · séquence <strong data-flash-tag>—</strong>
    · <span data-flash-progress>0 vues · 0 acquises</span>
  </div>

  <div class="nsi-flash-filters" data-flash-filters>
    <button class="nsi-flash-filter is-active" data-filter="all">Toutes</button>
    <button class="nsi-flash-filter" data-filter="02">Récursivité</button>
    <button class="nsi-flash-filter" data-filter="03">ADT</button>
    <button class="nsi-flash-filter" data-filter="04">POO</button>
    <button class="nsi-flash-filter" data-filter="05">Graphes</button>
    <button class="nsi-flash-filter" data-filter="06">Arbres</button>
    <button class="nsi-flash-filter" data-filter="07">SQL</button>
    <button class="nsi-flash-filter" data-filter="08">D&amp;C</button>
    <button class="nsi-flash-filter" data-filter="09">Processus</button>
    <button class="nsi-flash-filter" data-filter="10">Linux</button>
    <button class="nsi-flash-filter" data-filter="11">Réseaux</button>
    <button class="nsi-flash-filter" data-filter="12">Glouton/KNN</button>
    <button class="nsi-flash-filter" data-filter="13">DP</button>
    <button class="nsi-flash-filter" data-filter="14">Crypto</button>
    <button class="nsi-flash-filter" data-filter="15">SoC</button>
    <button class="nsi-flash-filter" data-filter="16">Recherche texte</button>
    <button class="nsi-flash-filter" data-filter="17">Paradigmes</button>
    <button class="nsi-flash-filter" data-filter="todo">À revoir</button>
  </div>

  <div class="nsi-flash" data-flash-card>
    <div class="nsi-flash__inner">
      <div class="nsi-flash__side nsi-flash__side--front">
        <span class="nsi-flash__tag" data-flash-tag-front>—</span>
        <div class="nsi-flash__q" data-flash-q>Chargement…</div>
        <div class="nsi-flash__hint">Clique / espace : retourner</div>
      </div>
      <div class="nsi-flash__side nsi-flash__side--back">
        <span class="nsi-flash__tag" data-flash-tag-back>—</span>
        <div class="nsi-flash__a" data-flash-a>—</div>
      </div>
    </div>
  </div>

  <div class="nsi-flash-actions">
    <button class="nsi-flash-btn nsi-flash-btn--again" data-flash-rate="again">À revoir</button>
    <button class="nsi-flash-btn nsi-flash-btn--hard"  data-flash-rate="hard">Dur</button>
    <button class="nsi-flash-btn nsi-flash-btn--good"  data-flash-rate="good">Ok</button>
    <button class="nsi-flash-btn nsi-flash-btn--easy"  data-flash-rate="easy">Facile</button>
  </div>

  <div class="nsi-flash-meta" style="margin-top:1rem;">
    Raccourcis : <kbd>espace</kbd> retourner · <kbd>←</kbd> précédent · <kbd>→</kbd> suivant ·
    <kbd>1</kbd><kbd>2</kbd><kbd>3</kbd><kbd>4</kbd> noter
  </div>
</div>

<script>
(function () {
  const CARDS = [
    { tag: "02", q: "Définis une fonction récursive.", a: "Une fonction qui s'appelle elle-même sur un sous-problème plus petit, avec un cas de base qui arrête la récursion." },
    { tag: "02", q: "Quelle est la complexité de <code>factorielle(n)</code> récursive naïve ?", a: "Temps : O(n). Espace (pile d'appels) : O(n)." },
    { tag: "02", q: "Écris Fibonacci récursif en Python.", a: "<code>def fib(n): return n if n<2 else fib(n-1)+fib(n-2)</code>. Complexité : O(2ⁿ) sans mémoïsation." },
    { tag: "02", q: "Pourquoi la récursion peut-elle dépasser la pile ?", a: "Chaque appel empile un cadre ; Python limite ~1000 appels. Passer à une version itérative ou augmenter <code>sys.setrecursionlimit</code>." },
    { tag: "03", q: "Différence entre pile et file ?", a: "Pile = LIFO (dernier entré, premier sorti). File = FIFO (premier entré, premier sorti)." },
    { tag: "03", q: "Opérations d'une pile.", a: "<code>empiler(x)</code>, <code>depiler()</code>, <code>sommet()</code>, <code>est_vide()</code>. Toutes en O(1)." },
    { tag: "03", q: "Comment implémenter une file avec deux piles ?", a: "Pile E pour enfiler, pile S pour défiler : si S vide, on vide E dans S (inverse l'ordre), puis dépile S. Amorti O(1)." },
    { tag: "03", q: "Qu'est-ce qu'une liste chaînée ?", a: "Structure linéaire de maillons {valeur, suivant}. Insertion/suppression en tête O(1), accès i-ième O(n)." },
    { tag: "04", q: "Différence classe / instance.", a: "La classe est le plan (attributs, méthodes). L'instance est un objet concret créé à partir de ce plan." },
    { tag: "04", q: "À quoi sert <code>self</code> en Python ?", a: "Référence l'instance courante dans les méthodes — permet d'accéder à ses attributs et d'en modifier l'état." },
    { tag: "04", q: "Qu'est-ce que l'encapsulation ?", a: "Regrouper données et méthodes dans un objet, et restreindre l'accès direct aux attributs (convention <code>_attr</code>) pour protéger l'invariant." },
    { tag: "04", q: "Qu'est-ce que l'héritage ?", a: "Une classe fille hérite des attributs/méthodes de la mère (<code>class Fille(Mere):</code>) et peut en ajouter ou en redéfinir." },
    { tag: "05", q: "Qu'est-ce qu'un graphe orienté ?", a: "Ensemble de sommets reliés par des arcs (arêtes orientées) : (u,v) ≠ (v,u)." },
    { tag: "05", q: "Différence matrice vs liste d'adjacence ?", a: "Matrice : O(V²) mémoire, test d'arête O(1). Liste : O(V+E) mémoire, test O(deg). Liste = graphes creux, matrice = graphes denses." },
    { tag: "05", q: "Structure utilisée par BFS ? Par DFS ?", a: "BFS = file (FIFO). DFS = pile (LIFO) ou récursion." },
    { tag: "05", q: "Que calcule un BFS depuis s ?", a: "Le plus court chemin en nombre d'arêtes entre s et tous les autres sommets accessibles." },
    { tag: "05", q: "Complexité BFS/DFS ?", a: "O(V + E) avec liste d'adjacence." },
    { tag: "06", q: "Définition d'un arbre binaire.", a: "Arbre dont chaque nœud a au plus deux fils (gauche, droit)." },
    { tag: "06", q: "Qu'est-ce qu'un ABR ?", a: "Arbre binaire de recherche : pour tout nœud, clés du sous-arbre gauche < clé nœud < clés du sous-arbre droit." },
    { tag: "06", q: "Pourquoi le parcours infixe d'un ABR donne les valeurs triées ?", a: "Ordre : gauche (plus petit) → nœud → droite (plus grand). Par récurrence, on obtient la séquence croissante." },
    { tag: "06", q: "Hauteur max d'un ABR à n nœuds ?", a: "O(n) dans le pire cas (arbre filiforme). O(log n) si équilibré." },
    { tag: "06", q: "3 parcours en profondeur ?", a: "Préfixe (N,G,D), infixe (G,N,D), postfixe (G,D,N)." },
    { tag: "07", q: "Différence WHERE / HAVING en SQL ?", a: "WHERE filtre les LIGNES avant agrégation. HAVING filtre les GROUPES après agrégation." },
    { tag: "07", q: "Syntaxe d'une jointure interne en SQL.", a: "<code>SELECT … FROM A JOIN B ON A.id = B.a_id</code>. Ne garde que les lignes appariées." },
    { tag: "07", q: "Ordre d'exécution logique d'une requête SELECT ?", a: "FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT." },
    { tag: "07", q: "Qu'est-ce qu'une clé étrangère ?", a: "Colonne d'une table qui référence la clé primaire d'une autre — assure l'intégrité référentielle." },
    { tag: "08", q: "Principe « diviser pour régner ».", a: "1) diviser le problème en sous-problèmes plus petits, 2) résoudre récursivement, 3) combiner les solutions." },
    { tag: "08", q: "Complexité du tri fusion ?", a: "O(n log n) dans tous les cas. Espace : O(n) auxiliaire." },
    { tag: "08", q: "Complexité de la recherche dichotomique ?", a: "O(log n). Précondition : liste triée." },
    { tag: "09", q: "Qu'est-ce qu'un processus ?", a: "Programme en cours d'exécution avec son propre espace mémoire, ses registres et son état." },
    { tag: "09", q: "États d'un processus ?", a: "Nouveau → Prêt ⇄ Exécution → Terminé, avec détour possible Bloqué (I/O)." },
    { tag: "09", q: "Que fait <code>fork()</code> ?", a: "Crée un processus fils copie du père. Retourne 0 au fils, le PID du fils au père." },
    { tag: "09", q: "4 conditions de Coffman pour un interblocage ?", a: "Exclusion mutuelle + occupation et attente + pas de préemption + attente circulaire." },
    { tag: "10", q: "Commande pour lister les fichiers cachés en détail ?", a: "<code>ls -la</code> — <code>-l</code> format long, <code>-a</code> y compris les fichiers commençant par <code>.</code>" },
    { tag: "10", q: "Différence entre chemin absolu et relatif ?", a: "Absolu : part de la racine <code>/</code>. Relatif : part du répertoire courant (<code>.</code> ou <code>..</code>)." },
    { tag: "10", q: "À quoi sert <code>chmod 755 f</code> ?", a: "Droits : propriétaire rwx (7), groupe r-x (5), autres r-x (5)." },
    { tag: "10", q: "Que fait le pipe <code>a | b</code> ?", a: "Redirige la sortie standard de <code>a</code> vers l'entrée standard de <code>b</code>." },
    { tag: "11", q: "Différence TCP / UDP ?", a: "TCP : connecté, fiable, ordonné (handshake, ACK). UDP : non connecté, rapide, non fiable." },
    { tag: "11", q: "Le handshake TCP en 3 temps ?", a: "SYN → SYN-ACK → ACK." },
    { tag: "11", q: "Rôle de DNS ?", a: "Traduit un nom de domaine (<code>exemple.fr</code>) en adresse IP." },
    { tag: "11", q: "Modèle OSI en 7 couches ?", a: "Physique, Liaison, Réseau, Transport, Session, Présentation, Application." },
    { tag: "11", q: "Que fait un routeur ?", a: "Relaie les paquets entre réseaux différents (couche 3, IP)." },
    { tag: "12", q: "Principe d'un algorithme glouton ?", a: "À chaque étape, choisir l'option localement optimale sans revenir en arrière." },
    { tag: "12", q: "Contre-exemple où le rendu de monnaie glouton échoue ?", a: "Pièces [4, 3, 1] et somme 6 : glouton = 4+1+1 (3 pièces), optimum = 3+3 (2 pièces)." },
    { tag: "12", q: "Principe du k-NN ?", a: "Classifier un point en regardant les k plus proches voisins étiquetés et en prenant la classe majoritaire." },
    { tag: "12", q: "Pourquoi normaliser avant un KNN ?", a: "Pour éviter qu'un attribut à grande échelle domine la distance et fausse la classification." },
    { tag: "13", q: "Deux conditions pour utiliser la programmation dynamique ?", a: "Sous-structure optimale + chevauchement des sous-problèmes." },
    { tag: "13", q: "Différence mémoïsation / tabulation ?", a: "Mémoïsation : top-down récursif + cache. Tabulation : bottom-up itératif en remplissant un tableau." },
    { tag: "13", q: "Complexité Fibonacci en DP ?", a: "O(n) temps, O(1) espace avec deux variables." },
    { tag: "14", q: "Principe du chiffrement de César ?", a: "Décaler chaque lettre de k positions dans l'alphabet (<code>E(x) = (x+k) mod 26</code>)." },
    { tag: "14", q: "Base mathématique de RSA ?", a: "Difficulté de factoriser n = p×q en ses deux facteurs premiers." },
    { tag: "14", q: "Différence symétrique / asymétrique ?", a: "Symétrique : même clé pour chiffrer/déchiffrer (AES). Asymétrique : paire clé publique/privée (RSA)." },
    { tag: "14", q: "Que fait <code>m ^ k ^ k</code> en crypto ?", a: "Redonne m : XOR appliqué deux fois avec la même clé est l'identité." },
    { tag: "15", q: "Les 4 étapes du cycle d'exécution d'une instruction ?", a: "Fetch, Decode, Execute, Writeback." },
    { tag: "15", q: "Que contient le registre PC (Program Counter) ?", a: "L'adresse de la prochaine instruction à exécuter." },
    { tag: "15", q: "Qu'est-ce qu'un SoC ?", a: "System on Chip : circuit intégré regroupant CPU, GPU, mémoire, contrôleurs sur une même puce." },
    { tag: "16", q: "Complexité de KMP vs recherche naïve ?", a: "KMP : O(n+m). Naïf : O(n×m) pire cas." },
    { tag: "16", q: "À quoi sert la table d'échec de KMP ?", a: "Sur un échec, évite de repartir à zéro en décalant grâce au plus long préfixe qui est aussi suffixe." },
    { tag: "17", q: "Définition d'une fonction pure ?", a: "Sans effet de bord et déterministe : même entrée → même sortie." },
    { tag: "17", q: "Différence impératif / fonctionnel ?", a: "Impératif : on décrit COMMENT (séquence d'états). Fonctionnel : on décrit QUOI (composition de fonctions, immuabilité)." },
  ];

  const STORAGE_KEY = "nsi_flash_state";
  const state = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");

  let filter = "all";
  let order = [];
  let idx = 0;
  let flipped = false;

  const root = document.getElementById("nsi-flash-app");
  if (!root) return;
  const card = root.querySelector("[data-flash-card]");
  const qEl = root.querySelector("[data-flash-q]");
  const aEl = root.querySelector("[data-flash-a]");
  const tagFront = root.querySelector("[data-flash-tag-front]");
  const tagBack = root.querySelector("[data-flash-tag-back]");
  const tagMeta = root.querySelector("[data-flash-tag]");
  const curEl = root.querySelector("[data-flash-current]");
  const totalEl = root.querySelector("[data-flash-total]");
  const progEl = root.querySelector("[data-flash-progress]");

  const matches = (c, i) => {
    if (filter === "all") return true;
    if (filter === "todo") {
      const s = state[i];
      return !s || s.rating === "again" || s.rating === "hard";
    }
    return c.tag === filter;
  };

  const rebuildOrder = () => {
    order = CARDS.map((c, i) => ({ c, i })).filter(({ c, i }) => matches(c, i));
    if (!order.length) order = CARDS.map((c, i) => ({ c, i }));
    idx = 0;
  };

  const render = () => {
    const { c, i } = order[idx];
    qEl.innerHTML = c.q;
    aEl.innerHTML = c.a;
    tagFront.textContent = "seq " + c.tag;
    tagBack.textContent = "seq " + c.tag;
    tagMeta.textContent = c.tag;
    curEl.textContent = (idx + 1);
    totalEl.textContent = order.length;
    const seen = Object.keys(state).length;
    const easy = Object.values(state).filter(s => s.rating === "easy" || s.rating === "good").length;
    progEl.textContent = `${seen} vues · ${easy} acquises`;
    flipped = false;
    card.classList.remove("is-flipped");
    card.dataset.i = i;
  };

  const flip = () => { flipped = !flipped; card.classList.toggle("is-flipped", flipped); };
  const next = () => { idx = (idx + 1) % order.length; render(); };
  const prev = () => { idx = (idx - 1 + order.length) % order.length; render(); };

  const rate = (r) => {
    const i = parseInt(card.dataset.i, 10);
    state[i] = { rating: r, at: Date.now() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    next();
  };

  card.addEventListener("click", flip);
  root.querySelectorAll("[data-flash-rate]").forEach(b => {
    b.addEventListener("click", (e) => { e.stopPropagation(); rate(b.dataset.flashRate); });
  });
  root.querySelectorAll("[data-flash-filters] .nsi-flash-filter").forEach(b => {
    b.addEventListener("click", () => {
      root.querySelectorAll(".nsi-flash-filter").forEach(x => x.classList.remove("is-active"));
      b.classList.add("is-active");
      filter = b.dataset.filter;
      rebuildOrder();
      render();
    });
  });

  document.addEventListener("keydown", (e) => {
    if (!document.getElementById("nsi-flash-app")) return;
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
    if (e.code === "Space") { e.preventDefault(); flip(); }
    else if (e.code === "ArrowRight") next();
    else if (e.code === "ArrowLeft") prev();
    else if (e.key === "1") rate("again");
    else if (e.key === "2") rate("hard");
    else if (e.key === "3") rate("good");
    else if (e.key === "4") rate("easy");
  });

  rebuildOrder();
  render();
})();
</script>
