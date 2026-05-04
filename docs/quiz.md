---
title: Quiz QCM
hide:
  - toc
---

# Quiz QCM

<div class="nsi-quiz-wrap" id="nsi-quiz-app">
  <div class="nsi-quiz-head">
    <div class="nsi-quiz-score">
      Question <strong data-quiz-current>1</strong> / <span data-quiz-total>32</span>
      · Score <strong data-quiz-score>0</strong>
    </div>
    <button class="nsi-flash-btn" data-quiz-restart>Recommencer</button>
  </div>
  <div class="nsi-quiz-progress"><div class="nsi-quiz-progress__fill" data-quiz-progress></div></div>

  <div class="nsi-quiz-card" data-quiz-card>
    <span class="nsi-quiz-tag" data-quiz-tag>seq —</span>
    <div class="nsi-quiz-q" data-quiz-q>Chargement…</div>
    <div class="nsi-quiz-options" data-quiz-options></div>
    <div class="nsi-quiz-exp" data-quiz-exp></div>
    <div class="nsi-quiz-actions">
      <button class="nsi-flash-btn" data-quiz-next disabled>Question suivante →</button>
    </div>
  </div>

  <div class="nsi-quiz-card" data-quiz-result hidden>
    <div class="nsi-quiz-q">Résultat final</div>
    <div data-quiz-result-text style="font-family:var(--font-mono);font-size:.9rem;color:var(--nsi-muted);margin:.6rem 0 1.2rem;">—</div>
    <div class="nsi-quiz-actions">
      <button class="nsi-flash-btn nsi-flash-btn--easy" data-quiz-restart-big>Rejouer</button>
    </div>
  </div>
</div>

<script>
(function () {
  const QUESTIONS = [
    { tag: "02", q: "Complexité de <code>fib(n)</code> récursif naïf ?", o: ["O(n)", "O(n log n)", "O(2ⁿ)", "O(n²)"], c: 2, e: "Chaque appel fait deux appels : l'arbre a environ 2ⁿ nœuds." },
    { tag: "02", q: "Que manque-t-il à toute fonction récursive ?", o: ["Un <code>return None</code>", "Un cas de base", "Un <code>global</code>", "Un <code>try/except</code>"], c: 1, e: "Sans cas de base, la récursion ne s'arrête pas → RecursionError." },
    { tag: "03", q: "Une pile est structurée en …", o: ["FIFO", "LIFO", "LRU", "FILO inversé"], c: 1, e: "LIFO : dernier entré, premier sorti." },
    { tag: "03", q: "Complexité d'<code>empiler</code> et <code>depiler</code> sur une pile ?", o: ["O(1)", "O(log n)", "O(n)", "O(n²)"], c: 0, e: "Deux opérations au sommet — constantes." },
    { tag: "04", q: "Le mot-clé <code>self</code> en Python désigne…", o: ["La classe", "L'instance courante", "Un alias de <code>this</code>", "Le module"], c: 1, e: "<code>self</code> est le premier paramètre implicite d'une méthode d'instance." },
    { tag: "04", q: "Quel principe fondamental cache les attributs derrière des méthodes ?", o: ["Héritage", "Encapsulation", "Polymorphisme", "Abstraction"], c: 1, e: "L'encapsulation protège l'invariant en limitant l'accès direct aux attributs. (Héritage et polymorphisme sont hors programme NSI.)" },
    { tag: "05", q: "Quelle structure utilise un BFS ?", o: ["Pile", "File", "Tas", "Dictionnaire"], c: 1, e: "BFS = file (FIFO) pour explorer par couches." },
    { tag: "05", q: "Complexité BFS avec liste d'adjacence ?", o: ["O(V)", "O(V + E)", "O(V × E)", "O(V²)"], c: 1, e: "Chaque sommet est visité une fois, chaque arête deux fois." },
    { tag: "06", q: "Parcours d'un ABR qui donne les valeurs triées ?", o: ["Préfixe", "Infixe", "Postfixe", "Par niveaux"], c: 1, e: "Infixe : gauche (petit) → nœud → droite (grand)." },
    { tag: "06", q: "Hauteur pire cas d'un ABR à n nœuds ?", o: ["O(1)", "O(log n)", "O(√n)", "O(n)"], c: 3, e: "Arbre filiforme (insertions triées) → hauteur n−1." },
    { tag: "07", q: "Ordre d'exécution logique d'une requête SQL (au programme NSI) ?", o: [
      "SELECT → FROM → WHERE",
      "FROM → JOIN → WHERE → SELECT → ORDER BY",
      "FROM → SELECT → WHERE → ORDER BY",
      "WHERE → FROM → SELECT"
    ], c: 1, e: "FROM d'abord (sources), puis JOIN, filtre WHERE, projection SELECT, tri ORDER BY. (GROUP BY / HAVING sont hors programme NSI.)" },
    { tag: "07", q: "Au bac NSI, comment filtrer les lignes d'une table ?", o: ["Avec HAVING", "Avec WHERE", "Avec GROUP BY", "Avec ORDER BY"], c: 1, e: "WHERE filtre les lignes. HAVING et GROUP BY sont hors programme NSI." },
    { tag: "08", q: "Complexité de la recherche dichotomique ?", o: ["O(1)", "O(log n)", "O(n)", "O(n log n)"], c: 1, e: "À chaque itération on divise l'intervalle par 2." },
    { tag: "08", q: "Complexité du tri fusion ?", o: ["O(n)", "O(n log n)", "O(n²)", "O(2ⁿ)"], c: 1, e: "Chaque niveau de la récursion fait n opérations, il y a log n niveaux → n log n." },
    { tag: "09", q: "Quels sont les 5 états d'un processus ?", o: [
      "Nouveau, Prêt, Élu, Bloqué, Terminé",
      "Créé, Exécuté, Suspendu, Tué",
      "Open, Read, Write, Close, Idle",
      "Lancé, Actif, Inactif, Stoppé, Mort"
    ], c: 0, e: "Cycle classique : Nouveau → Prêt → Élu (utilise le CPU) ⇄ Bloqué (attend une E/S) → Terminé." },
    { tag: "09", q: "Combien de conditions de Coffman pour un interblocage ?", o: ["2", "3", "4", "5"], c: 2, e: "Exclusion mutuelle, occupation+attente, pas de préemption, attente circulaire." },
    { tag: "10", q: "Que fait <code>chmod 644 f</code> ?", o: [
      "rw- r-- r--",
      "rwx r-x r-x",
      "rw- rw- rw-",
      "rwx --- ---"
    ], c: 0, e: "6 = rw- (4+2), 4 = r-- pour groupe et autres." },
    { tag: "10", q: "Que fait le pipe <code>a | b</code> ?", o: [
      "Exécute a et b en parallèle sans lien",
      "Redirige la sortie de a vers l'entrée de b",
      "Concatène les sorties",
      "Envoie un signal à b"
    ], c: 1, e: "Pipe Unix : stdout de a → stdin de b." },
    { tag: "11", q: "TCP est…", o: [
      "Non connecté, rapide, non fiable",
      "Connecté, fiable, ordonné",
      "Une couche physique",
      "Un protocole applicatif"
    ], c: 1, e: "TCP établit une connexion, garantit l'ordre et la fiabilité (ACK, retransmissions)." },
    { tag: "11", q: "Quels sont les protocoles de routage au programme NSI Terminale ?", o: [
      "TCP et UDP",
      "RIP et OSPF",
      "HTTP et HTTPS",
      "DNS et DHCP"
    ], c: 1, e: "RIP (métrique : sauts) et OSPF (métrique : coût) sont les protocoles de routage du BO Terminale." },
    { tag: "12", q: "Un algorithme glouton …", o: [
      "Essaie toutes les combinaisons",
      "Choisit à chaque étape l'option localement optimale",
      "Garantit l'optimum global",
      "Utilise une table de mémoïsation"
    ], c: 1, e: "Il ne revient jamais en arrière. N'est optimal que si la structure du problème le permet." },
    { tag: "12", q: "Pourquoi normaliser avant un KNN ?", o: [
      "Pour réduire la mémoire",
      "Pour éviter qu'un attribut à grande échelle domine la distance",
      "Pour accélérer le tri",
      "Pour permettre les distances négatives"
    ], c: 1, e: "Sans normalisation, une variable en milliers écrase une variable en unités." },
    { tag: "13", q: "Deux conditions pour la programmation dynamique ?", o: [
      "Sous-structure optimale et chevauchement",
      "Déterminisme et pureté",
      "Tri et dichotomie",
      "Mémoire infinie et récursion pure"
    ], c: 0, e: "Sans chevauchement, pas de gain vs diviser pour régner." },
    { tag: "14", q: "HTTPS combine chiffrement asymétrique et symétrique. Pourquoi ?", o: [
      "Pour avoir deux niveaux de sécurité indépendants",
      "Pour partager une clé symétrique sans qu'elle soit interceptée, puis chiffrer rapidement",
      "Parce que c'est obligatoire dans le standard TLS",
      "Pour rendre les attaques quantiques inefficaces"
    ], c: 1, e: "L'asymétrique sert à partager la clé symétrique (lent mais sûr). Ensuite on chiffre les échanges en symétrique (rapide)." },
    { tag: "14", q: "Chiffrement symétrique signifie …", o: [
      "Une clé publique et une privée",
      "La même clé pour chiffrer et déchiffrer",
      "Aucune clé",
      "Deux clés publiques"
    ], c: 1, e: "Ex : AES. Problème : distribution sécurisée de la clé." },
    { tag: "15", q: "Quel est l'avantage principal d'intégrer plusieurs composants dans un SoC ?", o: [
      "Cela permet d'utiliser plus de logiciels",
      "Compacité, vitesse accrue et consommation réduite",
      "Cela rend l'ordinateur plus puissant en mode dégradé",
      "Cela simplifie le BIOS"
    ], c: 1, e: "Les communications internes à la puce sont plus courtes que sur une carte mère → vitesse + énergie. C'est le seul avantage à mentionner au bac NSI." },
    { tag: "15", q: "Un SoC contient typiquement…", o: [
      "Uniquement le CPU",
      "CPU, mémoire et contrôleurs sur une seule puce",
      "Seulement de la mémoire",
      "Seulement le système d'exploitation"
    ], c: 1, e: "System on Chip = circuit intégré regroupant CPU, mémoire et contrôleurs (et parfois GPU)." },
    { tag: "16", q: "L'algorithme de Boyer-Moore compare le motif au texte…", o: [
      "De gauche à droite (comme l'algo naïf)",
      "De droite à gauche (et utilise la règle du mauvais caractère)",
      "Aléatoirement",
      "Caractère par caractère sans logique de saut"
    ], c: 1, e: "Boyer-Moore compare de droite à gauche et peut sauter de toute la longueur du motif si le caractère du texte n'est pas dans le motif." },
    { tag: "17", q: "À quel paradigme appartient SQL ?", o: [
      "Impératif",
      "Orienté objet",
      "Fonctionnel",
      "Déclaratif (logique)"
    ], c: 3, e: "On décrit ce qu'on veut (les lignes répondant à un critère), pas la manière de les calculer : c'est du déclaratif." },
    { tag: "17", q: "Cite un langage emblématique du paradigme fonctionnel.", o: [
      "Java",
      "C",
      "Haskell",
      "Prolog"
    ], c: 2, e: "Haskell, OCaml, Lisp sont les langages fonctionnels typiques. Prolog est logique, Java est OO, C est impératif." },
    { tag: "19", q: "Le problème de l'arrêt est…", o: [
      "Décidable mais coûteux (exponentiel)",
      "Indécidable : aucun programme ne peut le résoudre pour toute entrée",
      "Décidable seulement pour les programmes courts",
      "Une question ouverte non encore tranchée"
    ], c: 1, e: "Théorème de Turing & Church (1936) : <code>halt(P, x)</code> ne peut pas exister, c'est une limite mathématique fondamentale." },
    { tag: "19", q: "Quel mode de raisonnement utilise-t-on pour démontrer l'indécidabilité du problème de l'arrêt ?", o: [
      "Récurrence",
      "Raisonnement par l'absurde",
      "Raisonnement direct",
      "Disjonction de cas exhaustive"
    ], c: 1, e: "On suppose que <code>halt</code> existe, on construit <code>sym(sym)</code> et on dérive une contradiction." },
  ];

  const root = document.getElementById("nsi-quiz-app");
  if (!root) return;

  const card = root.querySelector("[data-quiz-card]");
  const resCard = root.querySelector("[data-quiz-result]");
  const qEl = root.querySelector("[data-quiz-q]");
  const tagEl = root.querySelector("[data-quiz-tag]");
  const optsEl = root.querySelector("[data-quiz-options]");
  const expEl = root.querySelector("[data-quiz-exp]");
  const nextBtn = root.querySelector("[data-quiz-next]");
  const curEl = root.querySelector("[data-quiz-current]");
  const totalEl = root.querySelector("[data-quiz-total]");
  const scoreEl = root.querySelector("[data-quiz-score]");
  const progEl = root.querySelector("[data-quiz-progress]");
  const resText = root.querySelector("[data-quiz-result-text]");

  let order = [], idx = 0, score = 0, answered = false;

  const shuffle = (a) => {
    const r = a.slice();
    for (let i = r.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [r[i], r[j]] = [r[j], r[i]];
    }
    return r;
  };

  const render = () => {
    answered = false;
    const q = order[idx];
    qEl.innerHTML = q.q;
    tagEl.textContent = "seq " + q.tag;
    curEl.textContent = (idx + 1);
    totalEl.textContent = order.length;
    scoreEl.textContent = score;
    progEl.style.width = `${(idx / order.length) * 100}%`;
    optsEl.innerHTML = q.o.map((opt, i) => `
      <button class="nsi-quiz-option" data-i="${i}">
        <span class="nsi-quiz-option__letter">${String.fromCharCode(65 + i)}</span>
        <span>${opt}</span>
      </button>`).join("");
    expEl.classList.remove("is-visible");
    expEl.innerHTML = "";
    nextBtn.disabled = true;

    optsEl.querySelectorAll(".nsi-quiz-option").forEach(btn => {
      btn.addEventListener("click", () => {
        if (answered) return;
        answered = true;
        const i = parseInt(btn.dataset.i, 10);
        const correct = (i === q.c);
        if (correct) { score++; scoreEl.textContent = score; }
        optsEl.querySelectorAll(".nsi-quiz-option").forEach((b, j) => {
          b.disabled = true;
          if (j === q.c) b.classList.add("is-correct");
          else if (j === i) b.classList.add("is-wrong");
        });
        expEl.innerHTML = `<strong>${correct ? "✓ Correct." : "✗ Incorrect."}</strong> ${q.e}`;
        expEl.classList.add("is-visible");
        nextBtn.disabled = false;
      });
    });
  };

  const finish = () => {
    card.hidden = true;
    resCard.hidden = false;
    progEl.style.width = "100%";
    const pct = Math.round((score / order.length) * 100);
    let mood = "À retravailler.";
    if (pct >= 85) mood = "Excellent, prêt pour le bac.";
    else if (pct >= 70) mood = "Bon niveau, consolide les points faibles.";
    else if (pct >= 50) mood = "Des bases, mais il reste du chemin.";
    resText.innerHTML = `Score : <strong style="color:var(--nsi-accent)">${score}/${order.length}</strong> (${pct}%) — ${mood}`;
  };

  const restart = () => {
    order = shuffle(QUESTIONS);
    idx = 0; score = 0;
    card.hidden = false;
    resCard.hidden = true;
    render();
  };

  nextBtn.addEventListener("click", () => {
    idx++;
    if (idx >= order.length) finish();
    else render();
  });
  root.querySelector("[data-quiz-restart]").addEventListener("click", restart);
  root.querySelector("[data-quiz-restart-big]").addEventListener("click", restart);

  restart();
})();
</script>
