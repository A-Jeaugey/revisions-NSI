# 🔄 États d'un processus

---

## Automate des états (5 états)

```mermaid
stateDiagram-v2
    [*] --> Nouveau
    Nouveau --> Pret : Admis
    Pret --> Elu : Ordonnanceur choisit
    Elu --> Pret : Préemption / quantum écoulé
    Elu --> Bloque : Attente E/S ou ressource
    Bloque --> Pret : E/S terminée / ressource dispo
    Elu --> Termine : Fin ou exit()
    Termine --> [*]
```

| État | Signification |
|------|---------------|
| **Nouveau** | Processus créé mais pas encore prêt à s'exécuter |
| **Prêt** | Attend qu'un CPU lui soit attribué par l'ordonnanceur |
| **Élu** (en exécution) | Utilise actuellement le CPU |
| **Bloqué** | En attente d'un événement (E/S, signal, ressource) |
| **Terminé** | A fini son exécution ; ses ressources peuvent être libérées |

---

## Interblocage (deadlock)

**Conditions de Coffman** (les 4 doivent être réunies) :

1. **Exclusion mutuelle** : ressources non partageables.
2. **Occupation et attente** : processus qui détient une ressource en attend d'autres.
3. **Pas de préemption** : on ne peut pas forcer un processus à libérer.
4. **Attente circulaire** : cycle dans le graphe d'allocation.

### Graphe d'allocation — exemple d'interblocage

```mermaid
graph LR
    P1((P1)) -- demande --> R1[(R1)]
    R1 -- détenu par --> P2((P2))
    P2 -- demande --> R2[(R2)]
    R2 -- détenu par --> P1
```

→ P1 attend R1 (détenu par P2), P2 attend R2 (détenu par P1) : **interblocage**.
