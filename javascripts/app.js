/* ============================================================
 * NSI Révisions — App JS
 * Terminal typewriter, tracker, drill, scramble, tilt, flashcards, quiz
 * ============================================================ */
(function () {
  "use strict";

  const STORAGE_PREFIX = "nsi_";
  const FICHES = [
    { id: "01", title: "Python — remise en route", href: "fiches/01_python_remise_en_route/" },
    { id: "02", title: "Récursivité", href: "fiches/02_recursivite/" },
    { id: "03", title: "Types abstraits (Pile, File, Liste chaînée)", href: "fiches/03_types_abstraits_donnees/" },
    { id: "04", title: "Programmation orientée objet", href: "fiches/04_programmation_orientee_objet/" },
    { id: "05", title: "Graphes", href: "fiches/05_graphes/" },
    { id: "06", title: "Arbres", href: "fiches/06_arbres/" },
    { id: "07", title: "Bases de données (SQL)", href: "fiches/07_bases_de_donnees/" },
    { id: "08", title: "Diviser pour régner", href: "fiches/08_diviser_pour_regner/" },
    { id: "09", title: "Processus", href: "fiches/09_processus/" },
    { id: "10", title: "Linux", href: "fiches/10_linux/" },
    { id: "11", title: "Réseaux", href: "fiches/11_reseaux/" },
    { id: "12", title: "Glouton & KNN", href: "fiches/12_glouton_knn/" },
    { id: "13", title: "Programmation dynamique", href: "fiches/13_programmation_dynamique/" },
    { id: "14", title: "Cryptographie", href: "fiches/14_cryptographie/" },
    { id: "15", title: "System on Chip", href: "fiches/15_soc/" },
    { id: "16", title: "Recherche textuelle", href: "fiches/16_recherche_textuelle/" },
    { id: "17", title: "Paradigmes", href: "fiches/17_paradigmes_programmation/" },
    { id: "18", title: "Synthèse & quiz", href: "fiches/18_approfondissement/" },
  ];

  const store = {
    get(k, def) { try { return JSON.parse(localStorage.getItem(STORAGE_PREFIX + k)) ?? def; } catch { return def; } },
    set(k, v) { try { localStorage.setItem(STORAGE_PREFIX + k, JSON.stringify(v)); } catch {} },
  };

  /* --------- Compte à rebours --------- */
  const BAC_DATE = new Date("2026-05-07T08:00:00+02:00");
  function updateCountdown() {
    const el = document.getElementById("bac-countdown");
    if (!el) return;
    const diff = BAC_DATE - new Date();
    if (diff <= 0) { el.textContent = "GO"; return; }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    el.innerHTML = `J−${d}<small>${h}h</small>`;
  }

  /* --------- Terminal typewriter --------- */
  let termGen = 0;
  async function runTerminal() {
    const body = document.getElementById("nsi-term");
    if (!body) return;
    const gen = ++termGen;

    const type = (text, cls = "") => new Promise((res) => {
      if (gen !== termGen) { res(); return; }
      const span = document.createElement("span");
      if (cls) span.className = cls;
      body.appendChild(span);
      let i = 0;
      const tick = () => {
        if (gen !== termGen) { res(); return; }
        if (i < text.length) {
          span.textContent += text[i++];
          setTimeout(tick, 14 + Math.random() * 20);
        } else res();
      };
      tick();
    });
    const line = () => body.appendChild(document.createElement("br"));
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    const put = (html) => { body.insertAdjacentHTML("beforeend", html); };

    const accent = "nsi-terminal__accent";
    const comment = "nsi-terminal__comment";
    const prompt = "nsi-terminal__prompt";
    const cmd = "nsi-terminal__cmd";
    const k = "nsi-terminal__k", s = "nsi-terminal__s", n = "nsi-terminal__n";

    body.innerHTML = "";

    await type("$ ", prompt); await type("whoami\n", cmd);
    await type("candidat_bac_nsi_2026\n", accent);
    await wait(250);
    await type("$ ", prompt); await type("cat revise.py\n", cmd);
    await wait(150);
    await type("from nsi ", k); await type("import ", k); await type("*\n", cmd);
    await type("revisions ", cmd); await type("= ", k); await type("[\n", cmd);
    await type('    "récursivité", "graphes", "arbres", "SQL",\n', s);
    await type('    "tri fusion", "POO", "réseaux", "crypto",\n', s);
    await type('    "DP", "glouton", "Linux", "processus"\n', s);
    await type("]\n", cmd);
    await wait(120);
    await type("for ", k); await type("notion ", cmd); await type("in ", k); await type("revisions:\n", cmd);
    await type("    maîtriser(notion)  ", cmd); await type("# jusqu'au J du bac\n", comment);
    await wait(200);
    await type("$ ", prompt); await type("python revise.py\n", cmd);
    await wait(300);
    await type("✓ 18 fiches prêtes\n", accent);
    await type("✓ 4 mémos condensés\n", accent);
    await type("✓ 60 flashcards\n", accent);
    await type("✓ 30 questions QCM\n", accent);
    await wait(150);
    await type("$ ", prompt);
    const cursor = document.createElement("span");
    cursor.className = "nsi-terminal__cursor";
    body.appendChild(cursor);
  }

  /* --------- Scramble effect (nombres / texte) --------- */
  function scrambleNumber(el, target, duration = 1200) {
    const start = performance.now();
    const step = (t) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const cur = Math.floor(eased * target);
      el.textContent = cur;
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = target;
    };
    requestAnimationFrame(step);
  }

  function animateStats() {
    document.querySelectorAll("[data-count]").forEach((el) => {
      const target = parseInt(el.dataset.count, 10) || 0;
      scrambleNumber(el, target);
    });
  }

  /* --------- Tracker de progression --------- */
  function initTracker() {
    const root = document.getElementById("nsi-tracker");
    if (!root) return;
    const state = store.get("progress", {});
    const grid = root.querySelector(".nsi-tracker__grid");
    const progress = root.querySelector(".nsi-tracker__progress");
    const fill = root.querySelector(".nsi-tracker__bar-fill");

    const render = () => {
      grid.innerHTML = FICHES.map((f) => `
        <div class="nsi-tracker__item ${state[f.id] ? "is-done" : ""}" data-id="${f.id}">
          <span class="nsi-tracker__check"></span>
          <span class="nsi-tracker__num">${f.id}</span>
          <span class="nsi-tracker__title-txt">${f.title}</span>
        </div>`).join("");
      const done = FICHES.filter((f) => state[f.id]).length;
      const pct = Math.round((done / FICHES.length) * 100);
      progress.textContent = `${done}/${FICHES.length} · ${pct}%`;
      fill.style.width = pct + "%";
    };
    render();
    grid.addEventListener("click", (e) => {
      const item = e.target.closest(".nsi-tracker__item");
      if (!item) return;
      const id = item.dataset.id;
      state[id] = !state[id];
      store.set("progress", state);
      render();
    });
  }

  /* --------- Drill du jour --------- */
  const DRILLS = [
    { q: "Quelle est la complexité de la recherche dichotomique ?", a: "O(log n). Condition : la liste doit être triée." },
    { q: "Donne la différence entre TCP et UDP en une phrase.", a: "TCP est connecté, fiable et ordonné ; UDP est non connecté, rapide et non fiable." },
    { q: "Quelles sont les deux conditions pour utiliser la programmation dynamique ?", a: "Sous-structure optimale + chevauchement des sous-problèmes." },
    { q: "Structure auxiliaire utilisée par BFS ? Par DFS ?", a: "BFS = file (FIFO). DFS = pile (LIFO) ou récursion." },
    { q: "Pourquoi le parcours infixe d'un ABR donne-t-il les valeurs triées ?", a: "Parce qu'à chaque nœud on visite gauche (plus petit) → nœud → droite (plus grand)." },
    { q: "Donne un contre-exemple où le rendu de monnaie glouton n'est pas optimal.", a: "Avec pièces [4, 3, 1] et somme 6 : glouton = 4+1+1 (3 pièces), optimum = 3+3 (2 pièces)." },
    { q: "Qu'est-ce que le handshake TCP en 3 temps ?", a: "SYN → SYN-ACK → ACK." },
    { q: "Donne les 4 étapes du cycle d'exécution d'une instruction.", a: "Fetch, Decode, Execute, Writeback." },
    { q: "En SQL, quelle est la différence entre WHERE et HAVING ?", a: "WHERE filtre les LIGNES avant agrégation. HAVING filtre les GROUPES après." },
    { q: "Quelle est la base mathématique de la sécurité de RSA ?", a: "La difficulté de factoriser un grand entier n = p × q en ses deux facteurs premiers." },
    { q: "Donne la définition d'une fonction pure.", a: "Fonction sans effet de bord et déterministe : même entrée → même sortie." },
    { q: "Que signifie LIFO ? FIFO ?", a: "LIFO = Last In First Out (pile). FIFO = First In First Out (file)." },
    { q: "Cite les 4 conditions de Coffman pour un interblocage.", a: "Exclusion mutuelle, occupation+attente, pas de préemption, attente circulaire." },
    { q: "Que fait l'opération m ^ k ^ k en cryptographie ?", a: "Elle redonne m : XOR appliqué deux fois avec la même clé est l'identité." },
    { q: "Quelle est la complexité de KMP vs recherche naïve ?", a: "KMP : O(n+m). Naïf : O(n×m) pire cas." },
    { q: "Pourquoi normaliser les données avant un KNN ?", a: "Pour éviter qu'un attribut à grande échelle domine la distance et fausse la classification." },
    { q: "Hauteur max d'un ABR à n nœuds ?", a: "O(n) dans le pire cas (arbre filiforme). O(log n) si équilibré." },
    { q: "Que fait l'appel système fork() sur Unix ?", a: "Il crée un processus fils, copie du père. Retourne 0 au fils et le PID du fils au père." },
  ];

  function initDrill() {
    const root = document.getElementById("nsi-drill");
    if (!root) return;
    const qEl = root.querySelector(".nsi-drill__q");
    const aEl = root.querySelector(".nsi-drill__a");
    const revealBtn = root.querySelector("[data-drill-reveal]");
    const nextBtn = root.querySelector("[data-drill-next]");

    const pick = () => {
      const d = DRILLS[Math.floor(Math.random() * DRILLS.length)];
      qEl.textContent = d.q;
      aEl.textContent = d.a;
      aEl.classList.remove("is-visible");
      revealBtn.textContent = "Révéler la réponse ↓";
      revealBtn.disabled = false;
    };
    pick();
    revealBtn.addEventListener("click", () => {
      aEl.classList.add("is-visible");
      revealBtn.textContent = "Révélée ✓";
      revealBtn.disabled = true;
    });
    nextBtn.addEventListener("click", pick);
  }

  /* --------- Hover spotlight sur cards --------- */
  function initCardSpotlight() {
    document.querySelectorAll(".nsi-card").forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--x", (e.clientX - r.left) + "px");
        card.style.setProperty("--y", (e.clientY - r.top) + "px");
      });
    });
  }

  /* --------- Marquer fiche étudiée sur chaque page de fiche --------- */
  function initStudyButton() {
    const path = location.pathname;
    const match = path.match(/\/fiches\/(\d{2})_/);
    if (!match) return;
    const id = match[1];
    const content = document.querySelector(".md-content__inner");
    if (!content) return;
    const state = store.get("progress", {});
    const box = document.createElement("div");
    box.className = "nsi-mark-read";
    box.innerHTML = `
      <style>
        .nsi-mark-read{display:flex;justify-content:space-between;align-items:center;gap:1rem;margin:3rem 0 1rem;padding:1rem 1.2rem;border:1px solid var(--nsi-rule);border-radius:10px;background:var(--nsi-panel);font-family:var(--font-mono);font-size:.78rem;color:var(--nsi-muted)}
        .nsi-mark-read__btn{padding:.5rem 1rem;border:1px solid var(--nsi-rule);border-radius:6px;background:transparent;color:var(--nsi-fg);cursor:pointer;font:inherit;transition:all .28s}
        .nsi-mark-read__btn:hover{border-color:var(--nsi-accent);color:var(--nsi-accent)}
        .nsi-mark-read__btn.is-done{background:var(--nsi-accent);color:var(--nsi-bg);border-color:var(--nsi-accent)}
      </style>
      <span>Séquence ${id} — suivi de progression</span>
      <button class="nsi-mark-read__btn ${state[id] ? "is-done" : ""}">
        ${state[id] ? "✓ Étudiée" : "Marquer comme étudiée"}
      </button>`;
    content.appendChild(box);
    const btn = box.querySelector("button");
    btn.addEventListener("click", () => {
      state[id] = !state[id];
      store.set("progress", state);
      btn.classList.toggle("is-done", state[id]);
      btn.textContent = state[id] ? "✓ Étudiée" : "Marquer comme étudiée";
    });
  }

  /* --------- Scroll reveal --------- */
  function initReveal() {
    const els = document.querySelectorAll("[data-reveal]");
    if (!els.length || !("IntersectionObserver" in window)) {
      els.forEach((e) => e.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
      }),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
  }

  /* --------- Marquer cartes de la home comme "étudiées" --------- */
  function markStudiedCards() {
    const state = store.get("progress", {});
    document.querySelectorAll(".nsi-card[data-fiche-id]").forEach((c) => {
      if (state[c.dataset.ficheId]) c.classList.add("nsi-card--study");
    });
  }

  /* --------- Init global --------- */
  function init() {
    updateCountdown();
    setInterval(updateCountdown, 60_000);
    runTerminal();
    animateStats();
    initTracker();
    initDrill();
    initCardSpotlight();
    initStudyButton();
    initReveal();
    markStudiedCards();
  }

  // mkdocs Material : document$ émet à chaque navigation instant ET au chargement
  // initial. On s'y abonne en priorité pour éviter un double init.
  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(init);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // Expose pour les pages Flashcards / Quiz qui auront leur propre JS inline
  window.NSI = { store, FICHES, STORAGE_PREFIX };
})();
