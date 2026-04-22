# 🎓 Révisions NSI Terminale — Pack complet pour le Bac

Pack complet de **fiches**, **mémos** et **diagrammes** pour le bac NSI Terminale,
calé sur le **programme officiel BO 2020** et le cours de M. Lyotard
([Lycée Notre-Dame](https://lyotardjulien.forge.apps.education.fr/terminale-specialite-nsi-au-lycee-notre-dame/)).

> **🌐 Site en ligne (mobile-friendly, recherche full-text, mode sombre) :**
> *(disponible après le premier déploiement GitHub Pages — voir section ci-dessous)*

---

## 📚 Contenu

- **18 fiches de séquence** dans `docs/fiches/` (séquences 0 → 80) :
  Python, récursivité, ADT (pile/file/liste), POO, graphes, arbres, BDD/SQL,
  diviser pour régner, processus, Linux, réseaux, glouton+KNN, programmation
  dynamique, cryptographie, SoC, recherche textuelle, paradigmes, synthèse.
- **4 mémos transverses** dans `docs/memos/` : complexités, pièges Python,
  cheat-sheet SQL, glossaire alphabétique.
- **6 diagrammes Mermaid** dans `docs/diagrammes/` : arbre de décision algos,
  parcours de graphes (BFS/DFS), terminologie arbres, modèles OSI/TCP-IP, états
  d'un processus, pipeline de compilation.
- **Plan de révision sur 4 semaines** : `docs/plan-de-revision.md`.
- **Page d'accueil avec compte à rebours** vers l'épreuve.

Chaque fiche suit la même structure :

> TL;DR · Plan · Notions clés · Vocabulaire · Algorithmes & code Python ·
> Diagramme Mermaid · Pièges classiques au bac · Questions types · Liens.

---

## 🚀 Lancer le site en local

```bash
pip install -r requirements.txt
mkdocs serve
# ouvre http://127.0.0.1:8000
```

Pour générer le site statique dans `site/` :

```bash
mkdocs build --clean --strict
```

---

## 🌐 Déploiement automatique (GitHub Pages)

Un workflow GitHub Actions est livré (`.github/workflows/deploy.yml`).
Pour activer le site :

1. Aller dans **Settings → Pages** du dépôt GitHub.
2. **Source** : sélectionner *« GitHub Actions »*.
3. Pousser un commit sur `main` ou `claude/nsi-study-guides-HIgkL`.
4. Le workflow build + déploie le site automatiquement.
5. URL accessible : `https://<utilisateur>.github.io/revisions-NSI/`.

> Le compte à rebours est paramétré dans `docs/javascripts/countdown.js`
> (variable `BAC_DATE`). Modifie-le avec ta vraie date d'épreuve.

---

## 📁 Arborescence

```
revisions-NSI/
├── mkdocs.yml                  # Config MkDocs Material
├── requirements.txt            # Dépendances Python
├── README.md                   # (ce fichier)
├── .github/workflows/
│   └── deploy.yml              # Déploiement auto GitHub Pages
└── docs/                       # Source du site
    ├── index.md                # Page d'accueil avec compte à rebours
    ├── plan-de-revision.md
    ├── fiches/                 # 18 fiches de séquence + index
    ├── memos/                  # 4 mémos + index
    ├── diagrammes/             # 6 diagrammes + index
    ├── assets/pdf/             # Documents PDF d'origine
    ├── stylesheets/extra.css   # Styles custom
    └── javascripts/countdown.js
```

---

## ✨ Fonctionnalités du site

- **Mobile-first** : révise dans le train ou avant de t'endormir.
- **Recherche full-text** instantanée (`/` ou icône :mag:).
- **Mode sombre / clair** automatique selon ton OS, basculable.
- **Diagrammes Mermaid** rendus dans le navigateur.
- **Code Python** avec coloration syntaxique + bouton de copie.
- **Tabs**, **admonitions** (notes/tips/warnings), **détails repliables**.
- **Compte à rebours** vers le bac sur la page d'accueil.

---

## 📜 Crédits

- Cours d'origine : [M. Lyotard, Lycée Notre-Dame](https://lyotardjulien.forge.apps.education.fr/terminale-specialite-nsi-au-lycee-notre-dame/) — site mkdocs sur le programme NSI Terminale.
- Programme : [BO Spécial n°8 du 25 juillet 2019](https://www.education.gouv.fr/) (NSI Terminale).
- Pack généré pour révisions personnelles. Diffusion libre.

Bonne chance pour le bac 🎯
