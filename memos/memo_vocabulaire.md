# 📖 Glossaire NSI — vocabulaire alphabétique cross-séquences

Définitions courtes, formelles, attendues au bac. **Pour chaque entrée**, la(les) séquence(s)
où elle est traitée est indiquée entre crochets.

---

## A

- **ABR (Arbre Binaire de Recherche)** *[5]* — Arbre binaire où, pour chaque nœud, toutes
  les valeurs du sous-arbre gauche sont **< valeur du nœud**, et toutes celles de droite **>**.
- **Adjacence** *[4]* — Deux sommets sont adjacents s'ils sont reliés par une arête.
- **ADT (Abstract Data Type, type abstrait de données)** *[2]* — Spécification d'un type
  par les opérations qu'il supporte, indépendamment de l'implémentation.
- **Algorithme** — Suite finie et non ambiguë d'opérations menant à la résolution d'un problème.
- **Algorithme glouton (greedy)** *[20]* — Stratégie consistant à faire à chaque étape
  le choix localement optimal, sans revenir en arrière.
- **Arbre** *[5]* — Graphe connexe acyclique. Possède une racine, des feuilles, des nœuds internes.
- **Architecture de von Neumann** *[50]* — Architecture où instructions et données partagent
  la même mémoire.
- **Arête** *[4]* — Lien entre deux sommets d'un graphe.
- **Attribut** *[3, 6]* — En POO : variable propre à une instance ou à une classe.
  En BDD : colonne d'une table.

## B

- **Bash** *[9]* — Shell Unix le plus répandu (Bourne Again Shell).
- **BFS (Breadth-First Search, parcours en largeur)** *[4, 5]* — Parcours d'un graphe/arbre
  niveau par niveau, en utilisant une **file**.
- **Bloc** *[40]* — Unité de données chiffrée d'un coup en cryptographie symétrique.
- **Boucle** *[0]* — Structure de contrôle répétitive (`for`, `while`).
- **Broadcast** *[10]* — En IP : adresse qui désigne tous les hôtes du sous-réseau (tous les bits hôte à 1).
- **Bus** *[50]* — Ensemble de fils transportant données / adresses / signaux de contrôle.

## C

- **Capytale** — Plateforme de notebooks Python utilisée dans le cours.
- **Cas de base** *[1]* — Cas non récursif, condition d'arrêt d'une fonction récursive.
- **CIDR (Classless Inter-Domain Routing)** *[10]* — Notation `IP/préfixe` (ex : `192.168.1.0/24`).
- **Classe** *[3]* — Modèle (template) à partir duquel on crée des objets.
- **Clé étrangère** *[6]* — Attribut référençant la clé primaire d'une autre table.
- **Clé primaire** *[6]* — Attribut(s) identifiant de manière unique une ligne d'une table.
- **Clé publique / clé privée** *[40]* — En cryptographie asymétrique : la publique chiffre,
  la privée déchiffre.
- **Code (codage)** *[40]* — Représentation des données (≠ chiffrement).
- **Compilation** — Traduction d'un code source en code machine ou intermédiaire.
- **Complexité** — Mesure asymptotique du coût en temps/espace d'un algo (notation Grand-O).
- **Composante connexe** *[4]* — Sous-ensemble maximal de sommets reliés entre eux.
- **Connexité** *[4]* — Un graphe est connexe si tout sommet est atteignable depuis tout autre.
- **Constructeur** *[3]* — Méthode spéciale `__init__` créant une nouvelle instance.
- **Cryptanalyse** *[40]* — Étude des moyens de casser un chiffrement.
- **Cycle** *[4]* — Chemin qui revient à son point de départ.

## D

- **Déclaratif** *[70]* — Paradigme où l'on dit CE QU'on veut, pas COMMENT.
- **Degré** *[4]* — Nombre d'arêtes incidentes à un sommet.
- **DFS (Depth-First Search, parcours en profondeur)** *[4, 5]* — Parcours utilisant une **pile**
  (ou la récursion). Va en profondeur avant de remonter.
- **DHCP** *[10]* — Protocole d'attribution dynamique d'adresses IP.
- **Diviser pour régner** *[7]* — Stratégie : diviser, résoudre récursivement, combiner.
- **DNS** *[10]* — Protocole qui traduit un nom de domaine (`www.example.com`) en adresse IP.
- **Docstring** *[0]* — Chaîne de documentation au début d'une fonction/classe Python.

## E

- **Effet de bord** *[70]* — Modification de l'état hors de la fonction (variables globales,
  affichage, fichier, etc.). Les fonctions pures n'en ont pas.
- **Encapsulation** *[3]* — Principe : cacher les détails d'implémentation derrière une interface.
- **Encoder / Encodage** — Représenter des caractères en octets (ASCII, UTF-8).
  ≠ chiffrement (cryptographie).
- **Exception** *[0]* — Événement levé en cas d'erreur ; gestion par `try/except`.

## F

- **Feuille** *[5]* — Nœud d'arbre sans enfant.
- **Fibonacci** *[1, 30]* — Suite F(n) = F(n-1) + F(n-2), F(0)=0, F(1)=1.
- **File (FIFO)** *[2]* — Type abstrait : enfilé d'abord = défilé d'abord.
- **Fonction pure** *[70]* — Fonction sans effet de bord et déterministe.
- **Fonction récursive** *[1]* — Fonction qui s'appelle elle-même.
- **Fork** *[8]* — Appel système Unix créant un processus fils.

## G

- **Glouton** *[20]* — Voir « Algorithme glouton ».
- **GPIO** *[50]* — General Purpose Input/Output : broches programmables d'un microcontrôleur.
- **Graphe** *[4]* — Couple (S, A) avec S sommets et A arêtes.

## H

- **Hachage (table de)** *[2]* — Structure d'accès en O(1) moyen via une fonction de hachage.
- **Hauteur (d'un arbre)** *[5]* — Longueur du plus long chemin de la racine à une feuille.
- **Héritage** *[3]* — Mécanisme par lequel une classe fille hérite des attributs/méthodes
  d'une classe mère.
- **HTTP / HTTPS** *[10]* — Protocole web (HTTPS = HTTP + TLS).

## I

- **Immutable (immuable)** *[0]* — Objet dont l'état ne peut être modifié après création
  (`int`, `tuple`, `str`).
- **Impératif** *[70]* — Paradigme où l'on décrit COMMENT (suite d'instructions).
- **Instance** *[3]* — Objet créé à partir d'une classe.
- **Interblocage (deadlock)** *[8]* — Situation où des processus se bloquent mutuellement.
- **IP (Internet Protocol)** *[10]* — Protocole de couche 3 (réseau) du modèle TCP/IP.

## J

- **JOIN** *[6]* — Opération SQL combinant des lignes de plusieurs tables.

## K

- **Kernel (noyau)** *[8, 9]* — Cœur du système d'exploitation, gère ressources et processus.
- **KNN (K-Nearest Neighbors)** *[20]* — Algo de classification par vote majoritaire des k voisins.
- **KMP (Knuth-Morris-Pratt)** *[60]* — Algo de recherche textuelle en O(n+m).

## L

- **Liste chaînée** *[2]* — Structure linéaire où chaque cellule pointe vers la suivante.
- **Linux** *[9]* — Famille d'OS libres basés sur le noyau Linux.

## M

- **Mémoïsation** *[30]* — Technique de programmation dynamique : mémoriser les résultats des
  appels récursifs (top-down).
- **Méthode** *[3]* — Fonction définie dans une classe.
- **Mutable** *[0]* — Objet modifiable après création (`list`, `dict`, `set`).

## N

- **NAT (Network Address Translation)** *[10]* — Traduction d'adresses pour partager une IP publique.
- **Nœud** *[4, 5]* — Sommet d'un graphe ou élément d'un arbre.

## O

- **Objet** *[3]* — Instance d'une classe.
- **Ordonnancement** *[8]* — Politique de choix du prochain processus à exécuter.
- **Ordonnancement d'activités** *[20]* — Problème classique d'algo glouton.
- **OSI** *[10]* — Modèle théorique en 7 couches.

## P

- **Paradigme** *[70]* — Style/approche de programmation.
- **Parcours** *[4, 5]* — Visite systématique des sommets/nœuds.
- **PID / PPID** *[8]* — Process IDentifier / Parent PID.
- **Pile (LIFO)** *[2]* — Type abstrait : empilé en dernier = dépilé en premier.
- **Pointeur** *[2]* — Référence vers un objet en mémoire.
- **Polymorphisme** *[3]* — Capacité d'objets de classes différentes à répondre à un même appel.
- **Précondition / Postcondition** *[0]* — Hypothèses (entrée) / garanties (sortie) d'une fonction.
- **Préfixe / Infixe / Suffixe** *[5]* — Trois ordres de parcours d'arbre binaire.
- **Processus** *[8]* — Programme en cours d'exécution avec son contexte.
- **Programmation dynamique** *[30]* — Technique fondée sur la mémoïsation des sous-problèmes.
- **Protocole** *[10]* — Ensemble de règles régissant la communication.

## Q

- **Quicksort (tri rapide)** *[7]* — Tri par diviser pour régner, pivot.

## R

- **RAM** *[50]* — Mémoire vive volatile.
- **Récursivité** *[1]* — Définition d'une fonction par elle-même.
- **Régression linéaire** — (HP NSI mais utile en SVT/maths).
- **Relationnel (modèle)** *[6]* — Modèle de BDD basé sur les tables (relations).
- **Routage** *[10]* — Détermination du chemin pris par un paquet.
- **RSA** *[40]* — Algo cryptographique asymétrique (Rivest, Shamir, Adleman).

## S

- **SGBD** *[6]* — Système de Gestion de Bases de Données (SQLite, MySQL, PostgreSQL...).
- **Shell** *[9]* — Interpréteur de commandes (bash, zsh, sh).
- **Signature électronique** *[40]* — Garantie d'authenticité via la clé privée.
- **SoC (System on Chip)** *[50]* — Puce intégrant tous les composants d'un ordinateur.
- **Sommet** *[4]* — Nœud d'un graphe.
- **SQL** *[6]* — Langage de requêtes pour BDD relationnelles.

## T

- **Table de hachage** *[2]* — Voir « Hachage ».
- **Tas (heap)** *[5]* — Arbre binaire respectant la propriété de tas (max ou min en racine).
- **TCP / UDP** *[10]* — Protocoles de transport ; TCP fiable connecté, UDP non fiable.
- **Thread** *[8]* — Fil d'exécution léger partageant la mémoire avec d'autres threads.
- **Tour de Hanoï** *[1]* — Problème classique récursif, T(n)=2T(n-1)+1.
- **Tri** *[0, 7]* — Algo réorganisant les éléments selon un ordre.
- **Tuple** *[0, 6]* — En Python : séquence immuable. En BDD : ligne d'une table.
- **Type abstrait** *[2]* — Voir « ADT ».

## U

- **Unicode / UTF-8** — Norme de codage des caractères.

## V

- **Variable** *[0]* — Nom associé à une valeur (en Python : référence vers un objet).
- **Vigenère** *[40]* — Chiffrement par substitution polyalphabétique.
- **Voisinage** *[4]* — Ensemble des sommets adjacents à un sommet donné.

## W

- **with** *[0]* — Mot-clé Python pour gérer le contexte (ex : ouverture de fichier).

## X

- **XOR** *[40]* — Ou exclusif, opérateur clé en cryptographie symétrique.

---

## ⚠️ Couples souvent confondus

| Termes | Différence |
|--------|------------|
| Codage / Chiffrement | Codage = représenter ; chiffrement = rendre secret |
| Encodage / Encryption | Encodage = format ; encryption = anglicisme pour chiffrement |
| Classe / Instance | Classe = modèle ; instance = objet créé |
| Type abstrait / Type concret | Abstrait = signatures ; concret = implémentation |
| Pile / File | LIFO / FIFO |
| Mutable / Immutable | Modifiable / non modifiable après création |
| Programme / Processus | Programme = code ; processus = programme en exécution |
| Processus / Thread | Processus = mémoire isolée ; thread = mémoire partagée |
| BFS / DFS | File / Pile |
| WHERE / HAVING | Lignes / Groupes |
| INNER / LEFT JOIN | Intersection / Toutes les lignes de gauche |
| Sym / Asym (crypto) | Une clé / paire de clés |
| `=` / `==` | Affectation / égalité |
| `is` / `==` | Identité / valeur |
| `/` / `//` | Division flottante / entière |
| Récursif / Itératif | Avec auto-appel / avec boucle |
| Glouton / DP | Choix sans retour / mémoïsation des sous-problèmes |
| Diviser pour régner / DP | Sous-problèmes indépendants / chevauchants |
