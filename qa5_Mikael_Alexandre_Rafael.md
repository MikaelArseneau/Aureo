# Rapport de Contrôle Qualité

**Nom de l'équipe :** [Rafael Mikael]  
**Nom du projet :** [Aureo]  
**Type de projet :** [Mémoires interactives]  
**Date :** 8 décembre 2024

<a href="https://tim-montmorency.com/compendium/582-511-web5/projets/appweb-creative/qa5-template-rapport-complet-qa.md%22 class="md-button">📥 Télécharger template de départ en markdown</a>

## 📋 Table des matières

1. [Informations générales](#1-informations-générales)
2. [PARTIE 1 : Tests externes](#2-partie-1-tests-externes)
3. [PARTIE 2A : Tests internes](#3-partie-2a-tests-internes)
4. [PARTIE 2B : Bogues reçus](#4-partie-2b-bugs-reçus)
5. [PARTIE 2C : Plan de corrections](#5-partie-2c-plan-de-corrections)
6. [Accessibilité](#6-accessibilité)
7. [Performance](#7-performance)
8. [Conclusion](#8-conclusion)
9. [Annexes](#9-annexes)

---

## 1. Informations générales

### Équipe

| Membre       | Rôle dans les tests               | Heures consacrées |
| ------------ | --------------------------------- | ----------------- |
| [Alexandre ] | Tests externes + internes         | [2] heures        |
| [Mikael]     | Tests internes + corrections      | [2] heures        |
| [Rafael]     | Tests accessibilité + performance | [2] heures        |

**Total d'heures de QA :** [2] heures

### Liens importants

- **Projet en ligne :** [https://mikaelarseneau.github.io/Aureo/#/]
- **GitHub :** [https://github.com/MikaelArseneau/Aureo]
- **Trello (bugs) :** [https://trello.com/b/DLvlrrSY/aureo]
- **Projet testé (externe) :** [https://rad8433.github.io/webapp-creative-Radhouane-Thearylou-Amira/#/]

---

## 2. PARTIE 1 : Tests externes

### Ce que NOUS avons trouvé dans le projet de l'autre équipe

**Projet testé :** [Vos voyages en mémoires ]  
**Équipe testée :** [l'équipe voyageur]  
**Type :** [Mémoires interactives]

### Résumé des tests effectués

**Environnements testés :**

- ✅ Chrome 120 (Desktop)
- ✅ Firefox 121 (Desktop)
- ✅ Edge (Desktop)
- ✅ Mobile 375px (DevTools)
- ✅ Tablette 768px (DevTools)
- ⚠️ Safari (non testé - pas d'accès)

**Tests complétés :**

- ✅ Tests fonctionnels (checklist complète)
- ✅ Tests responsive (3 tailles)
- ✅ Tests multi-navigateurs (Chrome, Firefox)
- ✅ Tests d'accessibilité
- ✅ Tests de cas limites

### Statistiques des bugs trouvés

| Priorité     | Nombre  | %        |
| ------------ | ------- | -------- |
| 🔴 Critiques | [0]     | [0]%     |
| 🟠 Majeurs   | [0]     | [0]%     |
| 🟡 Mineurs   | [6]     | [100]%   |
| **TOTAL**    | **[6]** | **100%** |

### Liste des bugs trouvés (résumé)

**Tous les détails sont dans notre board Trello :** [[Lien](https://trello.com/b/DLvlrrSY/aureo)]

#### 🔴 Bogues Critiques

1. **Bogue #1 : [404]**

   - **Description :** [Lors d'un refresh,erreur 404]
   - **Impact :** [le site ne fonctionne plus]
   - **Statut chez eux :** [À faire]
   - **Carte Trello :** [https://trello.com/b/eMP37IFg/taches-projet-web-integrateur]

2. **Bogue #2 : [Aucun]**

   - [Même format]

#### 🟠 Bogues Majeurs

3. **Bogue #3 : [Titre]**

   - [Même format]

4. **Bogue #4 : [Titre]**

   - [Même format]

#### 🟡 Bogues Mineurs

**Bogue #1 : [Titre du projet]**

- **Description :** [l'onglet du projet s'appelle app vite]
- **Impact :** [melanger dans les tabs]
- **Statut chez eux :** [À faire]
- **Carte Trello :** [https://trello.com/b/eMP37IFg/taches-projet-web-integrateur]

**Bogue #2 : [changer les mots]**

- **Description :** [Dans la salle de chaque mémoire c'est ecris memory à la place de mémoire dans les cartes]
- **Impact :** [Mélange 2 langues ]
- **Statut chez eux :** [À faire]
- **Carte Trello :** [https://trello.com/b/eMP37IFg/taches-projet-web-integrateur]

**Bogue #3 : [probleme de filte ]**

- **Description :** [Si ont chosit des filtres et que ne ça correspond à aucune mémoire, mettez un texte disant aucune mémoire]
- **Impact :** [on peut croire que le site à planté]
- **Statut chez eux :** [À faire]
- **Carte Trello :** [https://trello.com/b/eMP37IFg/taches-projet-web-integrateur]

**Bogue #4 : [probleme de hover ]**

- **Description :** [Quand on hover sur des mémoire, le texte aussi devient flou]
- **Impact :** [difficulté de lire ]
- **Statut chez eux :** [À faire]
- **Carte Trello :** [https://trello.com/b/eMP37IFg/taches-projet-web-integrateur]

**Bogue #5 : [probleme de texte ]**

- **Description :** [mettre un cap maximal de charactère pour le titre des mémoires et légende]
- **Impact :** [ Ça détruit toutes les cartes, le texte est mal placé, donc ce n’est pas lisible.]
- **Statut chez eux :** [À faire]
- **Carte Trello :** [https://trello.com/b/eMP37IFg/taches-projet-web-integrateur]

**Bogue #6 : [probleme de titre ]**

- **Description :** [Sur mobile dans les salles, le titre(Vacances et évasions) sort de l'écran]
- **Impact :** [ le texte sur téléphone est déformer.]
- **Statut chez eux :** [À faire]
- **Carte Trello :** [https://trello.com/b/eMP37IFg/taches-projet-web-integrateur]

5-12. [Liste brève, détails complets dans Trello]

### Impression générale du projet testé

**Points forts observés :**

1. [ Interface simple ]
2. [Ex: les tag fonctione ]

**Axes d'amélioration identifiés :**

1. [ Accessibilité au clavier à améliorer]
2. [Ex: Responsive mobile nécessite ajustements]

**Évaluation globale (1-5 étoiles) :**

- Facilité d'utilisation : ⭐⭐⭐⭐⭐
- Stabilité : ⭐⭐⭐⭐
- Design : ⭐⭐⭐☆☆
- Performance : ⭐⭐⭐⭐☆

---

## 3. PARTIE 2A : Tests internes

### Ce que NOUS avons testé dans NOTRE projet

### Résumé des tests effectués

**Checklist complète (à ajuster en fonction de votre projet) :**

- [✅ / ✅] Navigation entre toutes les salles/chapitres
- [✅ / ✅] Ajout de mémoire / Lecture des chapitres
- [✅ / ✅] Édition de mémoire / Système de choix
- [✅ / ✅] Suppression de mémoire / Branches narratives
- [✅ / ✅] Upload d'images / Tracking des conséquences
- [✅ / ✅] Tags et filtres / Toutes les fins
- [✅ / ✅] Recherche / Historique des décisions
- [✅ / ✅] Responsive (mobile, tablette, desktop)
- [✅ / ✅] Multi-navigateurs (Chrome, Firefox)
- [✅ / ✅] Navigation au clavier
- [✅ / ✅] Contraste des couleurs
- [✅ / ✅] Alt text sur images
- [✅ / ✅] Cas limites (formulaires vides, texte long, etc.)

**Taux de réussite :** [13]/[13] tests passés = [100]%

### Environnements testés

RAS = Rien À Signaler

| Environnement   | Testé | Résultat          | Notes                 |
| --------------- | ----- | ----------------- | --------------------- |
| Chrome Desktop  | ✅    | ✅ Fonctionne     | Quelques bugs mineurs |
| Firefox Desktop | ✅    | ✅ Fonctionne     | RAS                   |
| Edge Desktop    | ✅    | ✅                | RAS                   |
| Mobile 375px    | ✅    | ⚠️ Bogues trouvés | [Détails]             |
| Tablette 768px  | ✅    | ✅ Fonctionne     | RAS                   |
| Desktop 1920px  | ✅    | ✅ Fonctionne     | RAS                   |

### Bogues trouvés dans notre propre projet

**En plus des bugs reçus de l'autre équipe, nous avons trouvé :**

| Bogue # | Titre             | Priorité | Statut      | Assigné à           |
| ------- | ----------------- | -------- | ----------- | ------------------- |
| [1]     | [Filtre modifier] | 🟡       | À faire ✅  | [Alexandre Gendron] |
| [2]     | [Overflow]        | 🟡       | En cours 🔄 | [Rafael Angon Dubé] |
| [X]     | [Titre]           | 🟡       | À faire ⏸️  | [Nom]               |
| [X]     | [Titre]           | 🟡       | À faire ⏸️  | [Nom]               |
| [X]     | [Titre]           | 🟡       | À faire ⏸️  | [Nom]               |
| [X]     | [Titre]           | 🟡       | À faire ⏸️  | [Nom]               |

**Total bugs trouvés en interne :** [0]

---

## 4. PARTIE 2B : Bogues reçus

### Ce que l'AUTRE équipe a trouvé dans NOTRE projet

**Équipe qui nous a testés :** [Nom de l'équipe]  
**Date de réception :** 6 décembre 2024

### Statistiques

| Priorité     | Bogues reçus | Corrigés | En cours | Pas encore faits |
| ------------ | ------------ | -------- | -------- | ---------------- |
| 🔴 Critiques | [0]          | [X] ✅   | [X] 🔄   | [X] ⏸️           |
| 🟠 Majeurs   | [0]          | [X] ✅   | [X] 🔄   | [X] ⏸️           |
| 🟡 Mineurs   | [4]          | [4] ✅   | [0] 🔄   | [X] ⏸️           |

|
| **TOTAL** | **[4]** | **[4]** | **[0]** | **[0]** |

### Liste détaillée des bugs reçus

#### 🔴 Bogues Critiques reçus

**Bogue #1 : [Aucun]**

- **Description :** [Ce que l'autre équipe a trouvé]
- **Étapes pour reproduire :** [Leurs étapes]
- **Notre analyse :** [Confirmons-nous ? Est-ce vraiment critique ?]
- **Statut actuel (8 décembre) :** ✅ Corrigé / 🔄 En cours / ⏸️ Pas encore fait
- **Plan de correction :** [Si pas corrigé : quand et comment on va le faire]
- **Assigné à :** [Nom]
- **Date de correction :** [Date si corrigé]

**Bogue #2 : [Titre]**

- [Même format pour chaque bug critique]

#### 🟠 Bogues Majeurs reçus

**Bogue #3 : [Titre]**

**Bogue #1 : [Accessibilité au clavier]**

#### 🟡 Bogues Mineurs reçus

- **Description :** [Accessibilité au clavier qui ne marche pas ]
- **Étapes pour reproduire :** [Leurs étapes]
- **Notre analyse :** [oui c'est bien un bug mineurs]
- **Statut actuel (8 décembre) :** ✅ Corrigé
- **Assigné à :** [Mikael Arseneau]
- **Date de correction :** [6 décembre]

**Bogue #1 : [Accessibilité au clavier]**

#### 🟡 Bogues Mineurs reçus

- **Description :** [Accessibilité au clavier qui ne marche pas ]
- **Étapes pour reproduire :** [Leurs étapes]
- **Notre analyse :** [oui c'est bien un bug mineurs]
- **Statut actuel (8 décembre) :** ✅ Corrigé
- **Assigné à :** [Mikael Arseneau]
- **Date de correction :** [6 décembre]

**Bogue #2 : [Corriger les fautes]**

#### 🟡 Bogues Mineurs reçus

- **Description :** [Corriger les fautes d’orthographe dans les descriptions des photos. ]
- **Étapes pour reproduire :** [Leurs étapes]
- **Notre analyse :** [oui il y a bien des fautes]
- **Statut actuel (8 décembre) :** ✅ Corrigé
- **Assigné à :** [Rafael Angon Dubé]
- **Date de correction :** [6 décembre]

**Bogue #3 : [limite texte.]**

#### 🟡 Bogues Mineurs reçus

- **Description :** [Mettre une limite de caractères dans les champs de texte. ]
- **Étapes pour reproduire :** [Leurs étapes]
- **Notre analyse :** [il manque bien une limite]
- **Statut actuel (8 décembre) :** ✅ Corrigé
- **Assigné à :** [Alexandre Gendron]
- **Date de correction :** [6 décembre]

**Bogue #4 : [animation]**

#### 🟡 Bogues Mineurs reçus

- **Description :** [ L'animation dans l'acceuil quand il n'y a pas d'image ajouté.]
- **Étapes pour reproduire :** [Leurs étapes]
- **Notre analyse :** [ le bug du Json des images]
- **Statut actuel (8 décembre) :** ✅ Corrigé
- **Assigné à :** [Mikael arseneau]
- **Date de correction :** [6 décembre]

**Bogues #4-12 :** [Liste brève]

- Voir Trello pour détails complets : [Lien]

### Notre réaction aux bugs reçus

**Bogues que nous confirmons :**

- 2 bugs confirmés comme vrais bugs

**Bogues que nous contestons (avec justification) :**

- [Bogue #X] : Nous pensons que ce n'est pas un bug parce que [raison]
- [A été discuté avec l'enseignant : décision finale = ...]

**Nouveaux bugs découverts grâce à leurs tests :**

- 2 bugs qu'on n'aurait jamais trouvés nous-mêmes
- Merci à l'équipe testeuse pour leur regard externe !

---

## 5. PARTIE 2C : Plan de corrections

### État au 8 décembre (aujourd'hui)

**Résumé de nos corrections :**

| Statut                              | Nombre | % du total |
| ----------------------------------- | ------ | ---------- |
| ✅ Corrigés et validés              | [X]    | [X]%       |
| 🔄 En cours (sera fait d'ici le 10) | [X]    | [X]%       |
| ⏸️ Reportés (si temps)              | [X]    | [X]%       |
| ❌ Non corrigés (justifiés)         | [X]    | [X]%       |

### Priorités de correction (8→10 décembre)

#### ✅ Déjà corrigés (avant le 8)

**Bogues critiques corrigés :**

1. **Bogue #1 : [404]**
   - Corrigé par : [Mikael Arseneau]
   - Date : [2025/12/07]
   - Solution : [Ajout de createWebHashHistory]
   - Re-testé : ✅ Confirmé OK

#### 🔄 En cours (sera fait d'ici le 10)

**Bogues critiques en cours :**

1. **Bogue #X : [Aucun]**
   - Assigné à : [Nom]
   - Temps estimé : [X] heures
   - Sera fait : [9 décembre]
   - Statut actuel : [50% fait / bloqué sur X / presque fini]

**Bogues majeurs en cours :**

2. **Bogue #Y : [Aucun]**
   - [Même format]

#### ⏸️ Reportés (ferons si temps après les critiques/majeurs)

**Bogues mineurs à faire si temps :**

1. Bogue #1 : [Alt image] - Temps estimé : [0.1]h
2. Bogue #2 : [Plus de focus/tab_Espcace] - Temps estimé : [1]h
3. Bogue #3 : [Modifier filtre] - Temps estimé : [1]h

#### ❌ Non corrigés (avec justification)

**Bogue #Q : [Aucun]**

- **Pourquoi pas corrigé :** [Raison valable]
  - Exemple : "Nécessiterait une refonte majeure de l'architecture (20h de travail)"
  - Exemple : "Après discussion, ce n'est pas un bug mais une limitation de la techno utilisée"
- **Impact :** [Faible / Utilisateur peut contourner le problème en...]

### Plan de travail (8-10 décembre)

**Lundi 8 (soir) :**

- [ ] Modifier trello
- [ ] Cahier de charges
- [ ] Ajouter les texte alt

**Mardi 9 :**

- [ ] Corriger les erreurs de français

**Mercredi 10 (matin avant remise) :**

- [ ] Corrections mineures urgentes
- [ ] Tests finaux
- [ ] Mise à jour documentation

---

## 6. Accessibilité

### Tests effectués

#### Navigation au clavier

| Test                                 | Résultat | Action                 |
| ------------------------------------ | -------- | ---------------------- |
| Tab fonctionne sur tous les éléments | ⚠️ /     | Peut pas choisir image |
| Focus visible                        | ✅       | Plus d'effet focus     |
| Enter/Space activent les boutons     | ✅       |                        |
| Skip links présents (optionnel)      | ❌       |                        |

**Problèmes trouvés :** [X]  
**Corrigés :** [X]  
**En cours :** [X]

#### Contraste des couleurs

**Tests effectués avec WebAIM Contrast Checker :**

RAS = Rien À Signaler

| Élément          | Couleurs            | Ratio   | Conforme WCAG AA | Action     |
| ---------------- | ------------------- | ------- | ---------------- | ---------- |
| Texte principal  | #1a1a1a sur #F3F3F3 | 15.68:1 | ✅ Excellent     | RAS        |
| Boutons          | #1a1a1a sur #F3F3F3 | 15.68:1 | ✅ Conforme      | RAS        |
| Liens            | #1a1a1a sur #F3F3F3 | 15.68:1 | ✅ Excellent     | RAS        |
| Texte secondaire | #F7CE36 sur #F3F3F3 | 1.36:1  | ❌ Trop faible   | À corriger |
| Texte secondaire | #FF6B6B sur #F3F3F3 | 2.5:1   | ❌ Trop faible   | À corriger |
| Texte secondaire | #647EFF sur #F3F3F3 | 3.16:1  | ❌ Trop faible   | À corriger |
| Texte secondaire | #42D392 sur #F3F3F3 | 1.72:1  | ❌ Trop faible   | À corriger |
| Texte secondaire | #9B59B6 sur #F3F3F3 | 4.2:1   | ❌ Trop faible   | À corriger |

**Problèmes de contraste :** [60%]  
**Plan de correction :** [Pas vraiment couleur minime]

#### Images et médias

| Test                               | Résultat | Notes                               |
| ---------------------------------- | -------- | ----------------------------------- |
| Toutes les images ont un alt       | ⚠️       | [toutes] images sans alt à corriger |
| Alt descriptifs (pas "image1.jpg") | ⚠️       | [toutes] images sans alt à corriger |
| Images décoratives avec alt=""     | ✅       | [Aucune image décorative]           |

### Score global d'accessibilité

**Résumé :**

- Navigation clavier : [5]/[5] tests passés
- Contraste : [4]/[5] éléments conformes
- Images : [2]/[5] avec alt approprié

**Score estimé : [85]/100**

---

## 7. Performance

### Tests Lighthouse

**Configuration :**

- Mode : Desktop ET Mobile
- Options : Performance, Accessibility, Best Practices

#### Résultats Desktop

| Page              | Performance | Accessibility | Best Practices | Notes |
| ----------------- | ----------- | ------------- | -------------- | ----- |
| Accueil           | [92]/100    | [92]/100      | [100]/100      | [WOW] |
| [Page principale] | [100]/100   | [95]/100      | [100]/100      | [WOW] |

#### Résultats Mobile

| Page              | Performance | Accessibility | Best Practices | Notes      |
| ----------------- | ----------- | ------------- | -------------- | ---------- |
| Accueil           | [70]/100    | [92]/100      | [100]/100      | [overflow] |
| [Page principale] | [95]/100    | [95]/100      | [100]/100      | [WOW]      |

**Screenshots Lighthouse :** Voir annexes

### Optimisations effectuées

#### Compression des images

| Avant          | Après                   | Économie         |
| -------------- | ----------------------- | ---------------- |
| [5+-] MB total | [0.6+-] MB total        | [80]% économisés |
| [60] images    | [60] images compressées | Outil : TinyPNG  |

**Exemples :**

- `image1.webp` : 4.2 MB → 0.6 MB (85% économie)

#### Autres optimisations

- ✅ Ajout de `loading="lazy"` sur [toutes] images
- ✅ Minification du code (build production)
- ✅ Suppression de console.log() = a faire

### Temps de chargement

**Tests manuels (connexion normale) :**

- Page d'accueil : [0] secondes
- Page principale : [4] secondes
- Page la plus lourde : [4] secondes

**Objectif :** < 3 secondes  
**Atteint :** ⚠️ Partiellement

---

## 8. Conclusion

### État global du projet au 8 décembre

**Le projet est-il prêt pour la remise finale ?**
⚠️ Presque, corrections en cours

**Résumé de la qualité :**

| Aspect                          | État             | Commentaire           |
| ------------------------------- | ---------------- | --------------------- |
| **Fonctionnalités principales** | ✅               | [Fonctionne]          |
| **Bogues critiques**            | ✅ Tous corrigés | [Aucun]               |
| **Bogues majeurs**              | ✅               | [0]/[0] corrigés      |
| **Accessibilité**               | ✅               | Score : [95]/100      |
| **Performance**                 | ✅               | Lighthouse : [95]/100 |
| **Responsive**                  | ⚠️               | [Overflow]            |

### Bilan des tests

**Statistiques globales :**

- **Bogues trouvés (tous) :** [5] (internes + reçus)
- **Bogues corrigés :** [4] ([80]%)
- **Bogues en cours :** [1] (seront corrigés d'ici le 10)
- **Bogues mineurs reportés :** [1]

**Temps total consacré au QA :** [2] heures

### Ce qui fonctionne bien ✅

1. [Toutes les fonctionnalités principales sont stables]
2. [Design responsive sur tous les appareils]
3. [Le site peut se faire seulement avec le tab/espace]

### Défis rencontrés et solutions 🔧

1. **Défi :** [404 au refresh]

   - **Solution :** [createWebHashHistory dans le router]

2. **Défi :** [Chemin des images]
   - **Solution :** [Chnager tous les liens des images]

### Apprentissages 📚

**Ce que nous avons appris durant le processus QA :**

1. [L'importance de tester sur vrais appareils, pas juste DevTools]
2. [Faire que le site soit utiliser avec Tab/Espace]
3. [Donner le site a d'autre personne pour voir]

### Confiance pour la remise finale 🎯

**Sur une échelle de 1 à 10, notre confiance est : [9]/10**

**Justification :**
[Nous sommes confiant car on a fais tester le site a plusieurs personnes et les perosnnes l'ont aimées. Le seul petite hésitation est que sur certains appareils les images osnt long a apparaître]

---

## 9. Annexes

### Annexe A : Checklist complète des tests

<img width="857" height="711" alt="bugs" src="https://github.com/user-attachments/assets/2eea43e7-ccc4-4a0b-a176-0e8d45f7168b" />
[Inclure la grille de test complétée]
 
### Annexe B : Screenshots Lighthouse
 
<img width="1907" height="736" alt="lighthouse_page" src="https://github.com/user-attachments/assets/3c0d714c-45fa-4755-84f3-17962263f002" />
[Captures d'écran des rapports Lighthouse pour pages principales]
 
### Annexe C : Screenshots de bugs
 
<img width="1209" height="606" alt="trello" src="https://github.com/user-attachments/assets/deadcf26-9d6b-4675-912b-e7619a19efed" />
[Captures d'écran des bugs majeurs/critiques]
 
### Annexe D : Lien vers Trello
 
**Board Trello avec tous les bugs :** [[Trello](https://trello.com/b/DLvlrrSY/aureo)]
 
**Organisation du board :**
 
- Colonne "Bogues trouvés" : [4] cartes
- Colonne "En correction" : [2] cartes
- Colonne "À valider" : [0] cartes
- Colonne "Corrigé" : [2] cartes
 
### Annexe E : Métriques additionnelles
 
**Commits Git durant la phase QA :**
 
- [20225/12/07] : [1] commits (corrections bugs de 404 et images)
- Total : [1] commits de corrections
 
---
 
## ✅ Signatures
 
**Ce rapport a été rédigé et validé par :**
 
- [Mikael Arseneau] - [Chef de projet / Architecture] - Date : [20225/12/07]
- [Alexandre Gendron] - [Responsable du Design + Animations] - Date : [20225/12/07]
- [Rafael Angon Dubé] - [Données + Systèmes] - Date : [20225/12/07]
 
**Nous confirmons que ce rapport reflète fidèlement l'état de notre projet et de notre processus QA.**
 
---
 
**Date de dernière mise à jour :** 8 décembre 2024
