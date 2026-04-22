// Compte à rebours simple jusqu'au bac NSI.
// Modifie la date BAC_DATE ci-dessous pour la date réelle de l'épreuve écrite.
(function () {
  // ⚠️ À RÉGLER : date et heure de l'épreuve écrite NSI
  const BAC_DATE = new Date("2026-06-17T08:00:00+02:00");

  function update() {
    const el = document.getElementById("bac-countdown");
    if (!el) return;
    const now = new Date();
    const diffMs = BAC_DATE - now;
    if (diffMs <= 0) {
      el.textContent = "🎉 C'est parti !";
      return;
    }
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    el.innerHTML = `J − ${days} <span style="font-size:0.5em;opacity:0.85">(${hours} h)</span>`;
  }

  // Lancer dès qu'un DOM est prêt + retenter sur navigation mkdocs-instant
  function init() {
    update();
    setInterval(update, 60_000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
  // Re-binder lors d'une navigation instantanée mkdocs
  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(update);
  }
})();
