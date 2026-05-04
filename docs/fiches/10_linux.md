# Séquence 10 — Linux & système de fichiers

> **Source principale** : <https://lyotardjulien.forge.apps.education.fr/terminale-specialite-nsi-au-lycee-notre-dame/09_sequence_9/09_sequence_9/>
> **Crédit** : David Roche, <https://pixees.fr/informatiquelycee/n_site/nsi_prem_os_intro.html>

!!! info "Périmètre officiel BO Première — OS"
    Le BO Première (qui couvre Linux dans le cadre des systèmes d'exploitation) demande de :

    > « Utiliser les commandes de base en ligne de commande. […] Gérer ses droits et permissions d'accès. »

    Donc **au programme strict** : navigation (`pwd`, `ls`, `cd`), manipulation simple (`cp`, `mv`, `rm`, `mkdir`, `cat`, `less`), **permissions `chmod` rwx + octales** (typiquement testé), arborescence simplifiée, chemins absolus vs relatifs, redirections simples (`>`, `<`, `|`).

    **Hors programme NSI** : scripts shell (bash), variables d'environnement et `$PATH`, redirections avancées (`2>`, `&>`), éditeurs `vi`/`nano`. Cette fiche se limite à ce qui est demandé.

---

## TL;DR

- **Linux** est un **noyau** libre clone d'**UNIX**. Une **distribution** (Ubuntu, Debian, Fedora…) = noyau Linux + utilitaires + interface.
- Le **shell** (bash) est un **interpréteur de commandes** qui dialogue avec le noyau.
- L'**arborescence** Linux part d'une **racine unique `/`**. Tout est fichier.
- On distingue **chemin absolu** (`/home/user/fic.txt`, commence par `/`) et **chemin relatif** (`docs/fic.txt`, depuis le répertoire courant).
- Les **droits** (`rwx`) s'appliquent à 3 catégories : **propriétaire / groupe / autres**. Notation **octale** : `chmod 755 script.sh`.
- Les **redirections** simples (`>`, `>>`, `<`, `|`) permettent de chaîner les commandes — philosophie UNIX : « petits outils qui font une chose et la font bien ».

---

## Plan de la séquence

1. UNIX, Linux, distributions (en bref).
2. Architecture d'un OS : noyau, shell, applications.
3. Arborescence des fichiers Linux et chemins.
4. Commandes essentielles (navigation, fichiers, recherche, processus).
5. Permissions : notation `rwx`, notation octale, `chmod`.
6. Redirections simples et pipes.

---

## Notions clés

### 1. UNIX, Linux, distributions (en bref)

- **UNIX** (1969, Bell Labs) : OS multi-utilisateurs, multitâches, propriétaire.
- **Linux** (1991, Torvalds) : **noyau libre**, clone d'UNIX. Une **distribution Linux** = noyau Linux + utilitaires + interface graphique éventuelle. Exemples : **Debian, Ubuntu, Mint, Fedora**.
- **macOS** = UNIX propriétaire ; **Windows** n'est pas un UNIX.

### 2. Architecture d'un OS Linux

```
+-----------------------------------------------+
|        Applications (Firefox, LibreOffice)    |
+-----------------------------------------------+
|        Shell (bash)  +  GUI                   |
+-----------------------------------------------+
|        Noyau (Linux kernel)                   |
+-----------------------------------------------+
|        Matériel (CPU, RAM, disques, réseau)   |
+-----------------------------------------------+
```

### 3. Arborescence Linux (simplifiée)

| Répertoire | Rôle |
|------------|------|
| `/` | racine de tout le système |
| `/bin` | exécutables binaires essentiels (`ls`, `cp`, `bash`) |
| `/etc` | fichiers de configuration |
| `/home` | répertoires personnels des utilisateurs (`/home/alice`) |
| `/tmp` | fichiers temporaires (vidé au reboot) |
| `/usr` | programmes utilisateur installés |
| `/var` | données variables : logs (`/var/log`) |

### 4. Chemins

- **Absolu** : commence par `/`. Ex : `/home/user/projet/main.py`.
- **Relatif** : depuis le répertoire courant. Ex : `projet/main.py`.
- **Symboles** :
  - `.` = répertoire courant
  - `..` = répertoire parent
  - `~` = répertoire personnel de l'utilisateur courant (`/home/user`)
  - `/` (en début) = racine
- Exemple : `cd ../../etc` remonte de 2 niveaux puis entre dans `etc`.

### 5. Permissions

Affichage avec `ls -l` :

```
-rwxr-xr-x 1 user group 1234 Apr 22 10:00 script.sh
```

Décomposition des 10 caractères :

| Position | Signification |
|----------|---------------|
| 1 | type : `-` fichier, `d` répertoire, `l` lien symbolique |
| 2-4 | droits du **propriétaire** (user) |
| 5-7 | droits du **groupe** |
| 8-10 | droits des **autres** |

Chaque triplet : `r` lecture (read), `w` écriture (write), `x` exécution (execute).

**Notation octale** : chaque triplet → un chiffre 0-7.

| Octal | Binaire | rwx |
|-------|---------|-----|
| 0 | 000 | --- |
| 1 | 001 | --x |
| 2 | 010 | -w- |
| 3 | 011 | -wx |
| 4 | 100 | r-- |
| 5 | 101 | r-x |
| 6 | 110 | rw- |
| 7 | 111 | rwx |

Exemples courants :

| Octal | Permissions | Usage typique |
|-------|-------------|---------------|
| `755` | `rwxr-xr-x` | script ou exécutable |
| `644` | `rw-r--r--` | fichier de données / config |
| `700` | `rwx------` | fichier privé |
| `777` | `rwxrwxrwx` | tout le monde tous droits (à éviter) |

### 6. Redirections simples

| Symbole | Effet |
|---------|-------|
| `>` | redirige **stdout** vers un fichier (écrase) |
| `>>` | redirige stdout, **ajoute** à la fin |
| `<` | lit **stdin** depuis un fichier |
| `|` | pipe : sortie de la 1ʳᵉ commande → entrée de la 2ᵉ |

---

## Vocabulaire (table)

| Terme | Définition courte |
|-------|-------------------|
| Noyau (kernel) | Cœur de l'OS, gère mémoire, processus, E/S |
| Shell | Interpréteur de commandes (bash, zsh) |
| Distribution | OS construit autour d'un noyau Linux |
| Terminal / console | Émulateur permettant d'interagir avec le shell |
| Prompt | Invite du shell (`user@host:~$`) |
| Root | Super-utilisateur, UID 0, tous les droits |
| sudo | « SuperUser DO », exécuter une commande en tant que root |
| Chemin absolu | Commence par `/` |
| Chemin relatif | Depuis le répertoire courant |
| Pipe `|` | Connecte stdout d'une commande à stdin d'une autre |

---

## Commandes essentielles (avec exemples)

### Navigation

| Commande | Rôle | Exemple |
|----------|------|---------|
| `pwd` | affiche le répertoire courant | `pwd` → `/home/user` |
| `ls` | liste le contenu | `ls -la` (tous + détails) |
| `ls -lh` | tailles humaines (Ko, Mo) | |
| `cd` | change de répertoire | `cd /etc` ; `cd ..` ; `cd ~` |

### Manipulation de fichiers

| Commande | Rôle | Exemple |
|----------|------|---------|
| `touch` | crée un fichier vide / met à jour la date | `touch notes.txt` |
| `mkdir` | crée un dossier | `mkdir -p a/b/c` (parents inclus) |
| `cp` | copie | `cp -r dossier/ sauvegarde/` |
| `mv` | déplace ou renomme | `mv old.txt new.txt` |
| `rm` | supprime | `rm fichier` ; `rm -r dossier/` |
| `cat` | affiche tout le fichier | `cat /etc/hostname` |
| `less` | pagination interactive | `less /var/log/syslog` |

### Recherche

| Commande | Rôle | Exemple |
|----------|------|---------|
| `grep` | cherche un motif dans un texte | `grep "TODO" fichier.py` |
| `find` | recherche dans l'arborescence | `find /home -name "*.py"` |

### Permissions

| Commande | Rôle | Exemple |
|----------|------|---------|
| `chmod` | modifie les droits | `chmod 755 script.sh` ; `chmod u+x script.sh` |
| `chown` | change le propriétaire | `chown alice fichier` |
| `sudo` | exécution privilégiée | `sudo apt update` |

Notation symbolique pour `chmod` :

```
chmod u+x f     # ajoute exécution au propriétaire
chmod g-w f     # retire l'écriture au groupe
chmod o=r f     # définit autres = lecture seule
chmod a+r f     # tous (a = all) en lecture
```

### Processus (rappel — voir aussi fiche 09)

| Commande | Rôle | Exemple |
|----------|------|---------|
| `ps` | liste des processus | `ps aux` |
| `top` | moniteur dynamique | |
| `kill` | envoie un signal | `kill 1234` ; `kill -9 1234` |

### Système

| Commande | Rôle | Exemple |
|----------|------|---------|
| `man` | manuel d'une commande | `man ls` (q pour quitter) |
| `whoami` | utilisateur courant | |
| `df -h` | espace disque par partition | |
| `du -sh` | taille d'un dossier | `du -sh /var/log` |

### Redirections — exemples

```bash
ls > liste.txt              # écrase liste.txt avec la sortie
ls >> liste.txt             # ajoute à la fin
sort < donnees.txt          # lit l'entrée depuis le fichier
ls /etc | wc -l             # nombre de fichiers dans /etc
cat /etc/passwd | cut -d: -f1 | sort
```

---

## Diagramme Mermaid — Arborescence Linux

```mermaid
graph TD
    R[/] --> bin[/bin]
    R --> etc[/etc]
    R --> home[/home]
    R --> usr[/usr]
    R --> var[/var]
    R --> tmp[/tmp]
    home --> alice[/home/alice]
    home --> bob[/home/bob]
    var --> log[/var/log]
```

---

## Pièges classiques au bac

1. **Confondre Linux et Ubuntu** : Linux = noyau, Ubuntu = distribution.
2. **Oublier que `/` est unique** : Linux n'a pas de `C:\`, `D:\`. Tout est sous `/`.
3. **`rm -rf /`** : supprime tout. À ne **jamais** faire.
4. **Confondre `>` et `>>`** : `>` écrase, `>>` ajoute.
5. **Penser que `chmod 777` est sûr** : non, c'est tout ouvrir à tout le monde.
6. **Mauvaise lecture des droits `ls -l`** : la 1ʳᵉ lettre est le **type**, pas un droit.
7. **Confondre `.` et `..`** : `.` = ici, `..` = parent.

---

## Questions types

1. **Décrire** le rôle de `/etc`, `/home`, `/var/log`, `/tmp`.
2. **Convertir** `rwxr-x---` en notation octale. *(Réponse : 750)*
3. **Convertir** `644` en notation rwx. *(Réponse : `rw-r--r--`)*
4. **Écrire la commande** qui affiche les 10 dernières lignes du fichier `/var/log/syslog`. *(`tail -n 10 /var/log/syslog`)* *(rappel : `tail` n'est pas explicitement au programme — on peut aussi répondre `cat /var/log/syslog | …`)*
5. **Écrire le pipe** comptant les fichiers d'un dossier. *(`ls /etc | wc -l`)*
6. **Écrire le chemin relatif** de `/home/alice/docs/cv.pdf` depuis `/home/alice/projets/`. *(Réponse : `../docs/cv.pdf`)*
7. **Que fait** `chmod +x script.sh` ? Que se passe-t-il sans cette commande quand on lance `./script.sh` ?
8. **Différence** entre `>`, `>>` et `|`.

---

## Liens

- Cours principal : <https://lyotardjulien.forge.apps.education.fr/terminale-specialite-nsi-au-lycee-notre-dame/09_sequence_9/09_sequence_9/>
- Mémento commandes (David Roche) : <https://pixees.fr/informatiquelycee/n_site/nsi_prem_os_intro.html>
- Manuel en ligne : `man <commande>` ou <https://man7.org/linux/man-pages/>
