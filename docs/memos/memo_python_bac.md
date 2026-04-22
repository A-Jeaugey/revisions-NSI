# 🐍 Mémo Python — pièges et passages obligés au bac NSI

Le **bac NSI** exige de savoir lire ET écrire du Python à la main (épreuve écrite + 12 exos
imposés à l'épreuve pratique). Ce mémo recense les points les plus fréquemment piégeux.

---

## 1. Types et mutabilité

| Type | Mutable ? | Exemple littéral |
|------|-----------|------------------|
| `int`, `float`, `bool`, `complex` | Non (immuable) | `42`, `3.14`, `True` |
| `str` | Non | `"abc"` |
| `tuple` | **Non** | `(1, 2, 3)` |
| `list` | Oui | `[1, 2, 3]` |
| `dict` | Oui | `{"a": 1}` |
| `set` | Oui | `{1, 2, 3}` |

**Piège classique** : passage de paramètre. Une liste passée à une fonction est **partagée**
(même référence), pas copiée. La modifier dans la fonction modifie l'original.

```python
def ajoute(L):
    L.append(0)   # modifie l'original !

t = [1, 2]
ajoute(t)
print(t)  # [1, 2, 0]
```

Pour copier : `L2 = L1.copy()` ou `L2 = L1[:]` (copie superficielle).

---

## 2. Slicing

```python
L = [10, 20, 30, 40, 50]
L[1:3]      # [20, 30]   indices [début, fin[ — fin exclue
L[:2]       # [10, 20]
L[2:]       # [30, 40, 50]
L[-2:]      # [40, 50]
L[::-1]     # [50, 40, 30, 20, 10]   inversion
L[::2]      # [10, 30, 50]   pas de 2
```

Sur `str` même syntaxe : `"bonjour"[1:4] == "onj"`.

---

## 3. Boucles

```python
# for sur un itérable
for x in [1, 2, 3]:
    print(x)

# for sur une plage
for i in range(5):        # 0,1,2,3,4
    print(i)

for i in range(2, 10, 2): # 2,4,6,8
    print(i)

# énumération avec index
for i, x in enumerate(L):
    print(i, x)

# parcours simultané
for a, b in zip([1,2,3], ['a','b','c']):
    print(a, b)

# while (boucle conditionnelle)
n = 100
while n > 1:
    n = n // 2
```

**Piège** : en Python `range(a, b)` ne va PAS jusqu'à `b` (`b` est exclu).

---

## 4. Compréhensions (à connaître impérativement)

```python
# liste
carres = [x*x for x in range(10)]
pairs = [x for x in L if x % 2 == 0]

# dictionnaire
inv = {v: k for k, v in d.items()}

# set
uniques = {x % 10 for x in L}
```

---

## 5. Fonctions

```python
def f(a, b=1, *args, **kwargs):
    """Docstring : décrit ce que fait la fonction."""
    return a + b
```

- `b=1` : valeur par défaut.
- `*args` : tuple des arguments positionnels supplémentaires.
- `**kwargs` : dictionnaire des nommés.
- Retour multiple : `return x, y` → renvoie un tuple.

**Piège** : ne JAMAIS mettre une liste mutable comme valeur par défaut.
```python
def f(L=[]):  # ❌ DANGER : la liste est partagée entre tous les appels
    L.append(1)
    return L

# Préférer :
def f(L=None):
    if L is None:
        L = []
    L.append(1)
    return L
```

---

## 6. Dictionnaires

```python
d = {"a": 1, "b": 2}
d["c"] = 3                  # ajout
d.get("z", 0)               # 0 si absent (pas d'erreur)
"a" in d                    # True
del d["a"]                  # suppression
for k in d: print(k, d[k])  # itération sur les clés
for k, v in d.items(): ...  # itération clé/valeur
list(d.keys())              # liste des clés
list(d.values())            # liste des valeurs
```

**À retenir** : recherche dans un dict = **O(1)** moyen (table de hachage).

---

## 7. Chaînes de caractères

```python
s = "Bonjour"
len(s)                # 7
s.upper(), s.lower()  # "BONJOUR", "bonjour"
s.split(" ")          # liste de mots
" ".join(["a","b"])   # "a b"
s.replace("o", "0")   # "B0nj0ur"
s.startswith("Bon")   # True
s.find("jour")        # 3 (ou -1 si absent)
s[::-1]               # "ruojnoB"
chr(65), ord("A")     # "A", 65
f"x = {x:.2f}"        # f-string
```

**Immutable** : `s[0] = "X"` lève une `TypeError`. Pour modifier, recréer la chaîne.

---

## 8. Exceptions

```python
try:
    x = int(input("Nombre : "))
except ValueError as e:
    print("Pas un entier :", e)
except Exception as e:
    print("Autre erreur :", e)
else:
    print("Tout va bien :", x)
finally:
    print("Toujours exécuté.")
```

À soulever : `raise ValueError("message")`.

---

## 9. Lecture / écriture fichier

```python
# Lecture
with open("data.txt", "r", encoding="utf-8") as f:
    contenu = f.read()
    # ou : lignes = f.readlines()
    # ou : for ligne in f: ...

# Écriture
with open("out.txt", "w", encoding="utf-8") as f:
    f.write("Salut\n")
```

`with` ferme automatiquement le fichier.

---

## 10. Modules essentiels

| Module | Usage typique |
|--------|---------------|
| `math` | `sqrt`, `pi`, `cos`, `log`, `floor`, `ceil` |
| `random` | `randint(a,b)`, `choice(L)`, `shuffle(L)`, `random()` |
| `time` | `time()`, `sleep(s)` |
| `sys` | `sys.argv`, `sys.setrecursionlimit(10**6)` |
| `re` | regex : `re.search`, `re.findall`, `re.sub` |
| `functools` | `@lru_cache` pour mémoïsation |

---

## 11. Pièges syntaxiques au bac

```python
# ❌ Égalité vs affectation
if x = 5:        # SyntaxError ; en Python on écrit ==
    ...

# ❌ Indentation mélangeant tabs et espaces : IndentationError
# Convention NSI : 4 espaces.

# ❌ Division
print(5 / 2)     # 2.5     (toujours float)
print(5 // 2)    # 2       (division entière)
print(5 % 2)     # 1       (modulo)
print(2 ** 10)   # 1024    (puissance)

# ❌ is vs ==
a = [1,2]; b = [1,2]
a == b   # True (même contenu)
a is b   # False (objets distincts)

# ❌ booléens majuscule
True, False, None    # OK
true, false, null    # SyntaxError

# ❌ "and / or" pas "&&" ou "||"
if x > 0 and x < 10:   # OK (Python)
if x > 0 && x < 10:    # SyntaxError

# ❌ Indices négatifs : L[-1] = dernier élément
```

---

## 12. Récursivité

```python
import sys
sys.setrecursionlimit(10000)   # par défaut ~1000

def fact(n):
    if n <= 1:        # cas de base
        return 1
    return n * fact(n - 1)   # cas récursif
```

**Limite Python** : la pile d'appels est limitée. Pour des problèmes profonds (n > 1000),
soit augmenter la limite, soit transformer en itératif.

---

## 13. Mesure de complexité (TIMING)

```python
import time
t0 = time.time()
ma_fonction()
t1 = time.time()
print(f"Durée : {(t1-t0)*1000:.2f} ms")
```

---

## 14. Squelette type d'exercice bac pratique

```python
def somme_liste(L):
    """Renvoie la somme des éléments de la liste L (entiers ou flottants).

    Précondition : L est une liste d'entiers ou de flottants (peut être vide).
    Postcondition : retourne 0 si L vide, sinon la somme.
    """
    s = 0
    for x in L:
        s += x
    return s


# Tests (à supprimer avant rendu si demandé)
assert somme_liste([]) == 0
assert somme_liste([1, 2, 3]) == 6
assert somme_liste([-1, 1]) == 0
print("OK")
```

**Au bac, on attend** :
- Une **docstring** ou un commentaire qui décrit la fonction.
- Le **respect strict** de la signature donnée (nom + paramètres).
- Le **respect des types** (typage informel via la docstring).
- Des **assertions** ou tests rapides en bas.

---

## 15. Liste « mots-clés Python » à reconnaître

```
False  None  True  and  as  assert  async  await  break
class  continue  def  del  elif  else  except  finally
for  from  global  if  import  in  is  lambda  nonlocal
not  or  pass  raise  return  try  while  with  yield
```

---

## 🎯 Check-list bac Python

- [ ] Lire/écrire une compréhension de liste sans réfléchir.
- [ ] Connaître la différence mutable / immuable + ses conséquences.
- [ ] Slicing à l'aise.
- [ ] Récursivité avec cas de base bien identifié.
- [ ] Manipulation de dictionnaires.
- [ ] Une fonction = une docstring + précondition.
