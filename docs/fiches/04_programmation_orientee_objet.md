# Séquence 4 — Programmation orientée objet (POO)

> Source : https://lyotardjulien.forge.apps.education.fr/terminale-specialite-nsi-au-lycee-notre-dame/03_sequence_3/03_sequence_3/

!!! warning "Périmètre officiel BO Terminale"
    Le BO Terminale (rubrique *Structures de données*) précise littéralement :

    > « Vocabulaire de la programmation objet : **classes, attributs, méthodes, objets**. […] On n'aborde pas ici tous les aspects de la programmation objet **comme le polymorphisme et l'héritage**. »

    Pour le bac, on attend donc :

    - Lire et comprendre une classe Python (attributs, `__init__`, méthodes).
    - Écrire / compléter une méthode dans une classe donnée.
    - Connaître le vocabulaire : *classe, instance, attribut, méthode, objet*.

    **Héritage, `super()`, polymorphisme, composition** = hors programme NSI Terminale. Ils ne seront pas testés tels quels à l'écrit.

## TL;DR
- La **POO** structure le programme en **objets** qui possèdent un **état** (attributs) et un **comportement** (méthodes).
- Une **classe** est un *moule* ; un **objet** est une *instance* de cette classe créée par `monObjet = MaClasse(...)`.
- Le **constructeur** `__init__(self, ...)` initialise les attributs d'instance ; `self` désigne l'objet en cours de construction/utilisation.
- L'**encapsulation** consiste à manipuler un objet uniquement par ses méthodes ; on cache la représentation interne.

## Plan de la séquence
1. Vocabulaire de la POO : objets, classes, paradigme objet.
2. Le mot-clé `class` et la création d'objets.
3. Attributs et constructeur `__init__`.
4. Méthodes : signature, `self`, valeur de retour.
5. Méthodes spéciales (`__str__`, `__repr__`, `__eq__`, ...).

## Notions clés

### Paradigme objet
Le paradigme objet structure les programmes en **entités indépendantes qui interagissent**. Chaque objet a :
1. Ses propres **caractéristiques** (état → attributs).
2. Un **comportement** (méthodes : ce qu'il sait faire).
3. Des **interactions** avec d'autres objets.

Avantages : modularité, réutilisabilité, maintenabilité.

### Classe et instance
Une **classe** définit une famille d'objets : elle décrit leurs attributs et leurs méthodes communes. Un **objet** est une **instance** d'une classe, créée par appel de la classe. Analogie du moule : la classe est le moule, l'objet est la pièce moulée.

Convention : un nom de classe commence par une **majuscule** (`PascalCase`).

### Attributs
- **Attribut d'instance** : propre à chaque objet, défini en général dans `__init__` via `self.attr = ...`.
- **Attribut de classe** : partagé par toutes les instances, défini directement dans le corps de la classe (en dehors des méthodes).

### Méthodes
Une méthode est une fonction définie dans la classe. Son **premier paramètre est `self`**, qui représente l'instance sur laquelle on appelle la méthode. À l'appel `obj.methode(x)`, Python passe automatiquement `obj` comme `self`.

### Méthodes spéciales (dunder)
Méthodes au nom encadré de `__` qui personnalisent le comportement Python :

| Méthode | Rôle |
|---------|------|
| `__init__(self, ...)` | Constructeur, initialise les attributs. |
| `__str__(self)` | Représentation lisible (`print(obj)`). |
| `__repr__(self)` | Représentation technique (debug, REPL). |

### Encapsulation
Principe : l'utilisateur d'une classe ne devrait manipuler ses objets qu'à travers ses méthodes publiques, jamais en accédant directement aux attributs internes. Convention Python : préfixer un attribut « privé » d'un underscore (`_attr`).

## Vocabulaire
| Terme | Définition |
|-------|------------|
| Objet | Entité informatique avec un état et un comportement. |
| Classe | Définition d'une famille d'objets (modèle). |
| Instance | Objet concret créé à partir d'une classe. |
| Attribut | Variable interne à un objet (ou à une classe). |
| Méthode | Fonction définie dans une classe, appelée sur un objet. |
| `self` | Référence à l'objet courant dans une méthode. |
| Constructeur | Méthode `__init__`, appelée lors de la création d'un objet. |
| Encapsulation | Cacher la représentation interne, exposer une interface publique. |

## Algorithmes & code

### 1. Une classe minimale
```python
class Ennemi:
    """Classe vide servant de moule."""
    pass

# Creation de deux instances independantes :
gros_mechant = Ennemi()
autre_ennemi = Ennemi()
```

### 2. Constructeur, attributs d'instance
```python
class Ennemi:
    """Un ennemi a une position, des points de vie et une rapidite."""

    def __init__(self, pos_x=0, pos_y=0, pv=100, rapidite=2):
        # self.attribut = ... cree un attribut d'instance.
        self.pos_x = pos_x
        self.pos_y = pos_y
        self.pv = pv
        self.rapidite = rapidite

# Instanciation :
e1 = Ennemi()                       # Valeurs par defaut
e2 = Ennemi(pos_x=10, pv=50)        # Arguments nommes
print(e1.pv)                        # Acces a l'attribut : 100
```

### 3. Attribut de classe vs attribut d'instance
```python
class Compteur:
    """Compte le nombre d'instances creees."""
    nb_instances = 0                # Attribut de CLASSE (partage)

    def __init__(self):
        Compteur.nb_instances += 1  # On utilise le nom de la classe

c1 = Compteur()
c2 = Compteur()
print(Compteur.nb_instances)        # 2
```

### 4. Méthodes
```python
class Ennemi:
    def __init__(self, pv=100):
        self.pv = pv

    def perd_pv(self, degats):
        """Diminue les pv de l'ennemi."""
        self.pv -= degats
        if self.pv < 0:
            self.pv = 0

    def est_mort(self):
        """Renvoie True si l'ennemi a ete tue."""
        return self.pv == 0

e = Ennemi()
e.perd_pv(30)                       # equivaut a Ennemi.perd_pv(e, 30)
print(e.pv)                         # 70
print(e.est_mort())                 # False
```

### 5. Méthodes spéciales `__str__` et `__repr__`
```python
class Point:
    """Point du plan."""

    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __str__(self):
        # Representation lisible (utilisee par print)
        return f"({self.x}, {self.y})"

    def __repr__(self):
        # Representation technique (REPL, debug)
        return f"Point({self.x}, {self.y})"

p = Point(1, 2)
print(p)                            # (1, 2)
```

### 6. Exemple complet : classe `CompteBancaire`
```python
class CompteBancaire:
    """Un compte bancaire avec depot et retrait."""

    def __init__(self, titulaire, solde=0):
        self.titulaire = titulaire
        self.solde = solde

    def deposer(self, montant):
        self.solde += montant

    def retirer(self, montant):
        if montant > self.solde:
            return False                 # Refuse si solde insuffisant
        self.solde -= montant
        return True

    def __str__(self):
        return f"Compte de {self.titulaire} : {self.solde} €"

c = CompteBancaire("Alice", 100)
c.deposer(50)
print(c)                                  # Compte de Alice : 150 €
print(c.retirer(200))                     # False (refuse)
print(c.retirer(80))                      # True
print(c.solde)                            # 70
```

## Pièges classiques au bac
- **Oublier `self`** dans la signature d'une méthode : `def methode(x)` au lieu de `def methode(self, x)` ⇒ `TypeError`.
- **Confondre attribut de classe et attribut d'instance** : `MaClasse.attr = ...` modifie pour tous ; `self.attr = ...` ne modifie que l'objet courant.
- **Confondre instance et classe** : `Pile` est la classe, `Pile()` est une instance.
- **Modifier un attribut mutable partagé** par défaut (`def __init__(self, l=[])` partage la même liste).
- **Confondre `__str__` (pour `print`) et `__repr__` (pour le debug)** : si seul `__repr__` est défini, `print` l'utilise par défaut.
- **Encapsulation** : violer la convention en accédant directement à un attribut `_prive` est mal vu.

## Questions types au bac

**Q1.** Quelle est la différence entre une classe et un objet ?
> **Réponse modèle.** Une **classe** est un modèle (un moule) qui définit les attributs et méthodes communs à une famille d'objets. Un **objet** est une **instance** d'une classe, créée par appel de la classe : il possède ses propres valeurs d'attributs.

**Q2.** À quoi sert la méthode `__init__` ?
> **Réponse modèle.** `__init__` est le **constructeur** : c'est la méthode automatiquement appelée à la création d'une nouvelle instance. Elle initialise les attributs d'instance via `self.attr = ...`.

**Q3.** Que fait `self` dans une méthode ?
> **Réponse modèle.** `self` est une **référence à l'objet courant** sur lequel la méthode est appelée. À l'appel `obj.methode(x)`, Python passe automatiquement `obj` comme `self`. Il permet d'accéder et de modifier les attributs (`self.attr`) et d'appeler d'autres méthodes (`self.autre()`).

**Q4.** Écrire une classe `CompteBancaire` avec les attributs `titulaire` et `solde`, une méthode `deposer(montant)` et une méthode `retirer(montant)` qui refuse si le solde devient négatif.
> **Réponse modèle.**
> ```python
> class CompteBancaire:
>     def __init__(self, titulaire, solde=0):
>         self.titulaire = titulaire
>         self.solde = solde
>
>     def deposer(self, montant):
>         self.solde += montant
>
>     def retirer(self, montant):
>         if montant > self.solde:
>             return False
>         self.solde -= montant
>         return True
> ```

**Q5.** Quelle est la différence entre un attribut de classe et un attribut d'instance ?
> **Réponse modèle.** Un **attribut de classe** est défini dans le corps de la classe (en dehors de toute méthode) et est **partagé** par toutes les instances. Un **attribut d'instance** est défini dans `__init__` via `self.attr = ...` et est **propre à chaque objet**.

## Liens
- Cours en ligne : https://lyotardjulien.forge.apps.education.fr/terminale-specialite-nsi-au-lycee-notre-dame/03_sequence_3/03_sequence_3/
- Cours détaillé POO : https://lyotardjulien.forge.apps.education.fr/bifurcation-site-coilhac-term/POO/1_cours_POO/
- Documentation officielle Python : https://docs.python.org/fr/3/tutorial/classes.html
