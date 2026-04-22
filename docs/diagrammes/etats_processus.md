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

## Création d'un processus (Unix : `fork()`)

```mermaid
sequenceDiagram
    participant Pere as Processus père
    Pere->>Pere: fork()
    Note right of Pere: Le système crée un fils\n(copie complète)
    Pere->>Fils: Processus fils créé
    Pere->>Pere: fork() retourne PID > 0
    Fils->>Fils: fork() retourne 0
    par
        Pere->>Pere: code père continue
    and
        Fils->>Fils: code fils s'exécute
    end
```

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

---

## Ordonnancement — politiques classiques

| Politique | Principe |
|-----------|----------|
| **FCFS** (First Come First Served) | Premier arrivé, premier servi |
| **SJF** (Shortest Job First) | Le plus court d'abord |
| **Round Robin** | Tour par tour, quantum de temps fixe |
| **Priorité** | Le plus prioritaire d'abord |

---

## Ressources partagées et synchronisation

```mermaid
flowchart LR
    P1[Processus 1] -- attend --> S{{Sémaphore}}
    P2[Processus 2] -- attend --> S
    S --> R[(Ressource critique)]
```

**Sémaphore** : compteur partagé qui régule l'accès à une ressource.

---

## Processus vs Thread

| Aspect | Processus | Thread |
|--------|-----------|--------|
| Mémoire | Isolée | Partagée avec les autres threads du même processus |
| Création | Lente | Rapide |
| Communication | Pipes, sockets, signaux | Variables globales |
| Plantage | N'affecte pas les autres | Peut planter tout le processus |

```mermaid
flowchart TB
    subgraph Processus
        T1[Thread 1] -.- M[(Memoire partagée)]
        T2[Thread 2] -.- M
        T3[Thread 3] -.- M
    end
```
