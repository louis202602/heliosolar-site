# HelioSolar — site vitrine

Fondation technique du futur site commercial HelioSolar. Le projet est exploitable en prévisualisation, mais les contenus juridiques, médias réels et intégrations métier doivent être validés avant publication en production.

## Stack

- Next.js 16.2.6 — App Router et dossier `src`
- React 19
- TypeScript strict
- Tailwind CSS
- ESLint 9 avec configuration plate Next.js
- `next-themes` pour les modes clair et sombre

## Commandes

```bash
npm install
npm run dev
npm run lint
npm run typecheck
npm run build
npm run start
```

## Variables d’environnement

Copier `.env.example` vers `.env.local`.

- `NEXT_PUBLIC_SITE_URL` : URL canonique utilisée par les métadonnées, `robots.txt` et le sitemap.
- Les deux endpoints sont réservés aux futures connexions n8n/CRM.

Aucun secret réel ne doit être enregistré dans le dépôt.

## Routes

- `/`
- `/solutions`
- `/professionnels-industriels`
- `/residentiel`
- `/realisations`
- `/a-propos`
- `/demande-etude`
- `/contact`
- `/mentions-legales`
- `/politique-confidentialite`
- `/cgv`
- `/robots.txt`
- `/sitemap.xml`
- `/manifest.webmanifest`

Une page 404 personnalisée est définie dans `src/app/not-found.tsx`.

## Structure principale

```text
src/
  app/                 pages, métadonnées et routes techniques
  components/          composants d’interface réutilisables
  lib/                 types et données temporaires
```

## État fonctionnel

- responsive mobile, tablette et desktop ;
- modes clair et sombre ;
- navigation principale et mobile ;
- modèle de données des réalisations avec champ `contractant` ;
- SEO technique initial : métadonnées globales, Open Graph, robots et sitemap ;
- formulaire de demande d’étude présent mais non connecté ;
- aucune image ni vidéo chantier réelle intégrée à ce stade.

## Points obligatoires avant production

1. Remplacer les données de démonstration par des réalisations vérifiées.
2. Intégrer les photos et vidéos optimisées.
3. Connecter les formulaires à n8n et au CRM.
4. Faire valider les mentions légales, la confidentialité et les CGV.
5. Ajouter les icônes, visuels Open Graph et favicon définitifs.
6. Effectuer les audits Lighthouse, accessibilité, sécurité et parcours de conversion.

## Étape 5 — Accueil premium

- Hero commercial renforcé
- Qualification QualiPV 500 mise en avant
- Références projets anonymisées
- Zone vidéo drone prête à recevoir les médias réels
- Parcours Résidentiel / Professionnels / Industrie
- Responsive et modes clair/sombre validés


## Étape 5

Refonte premium des pages Solutions, Résidentiel, Professionnels & industriels, Réalisations, À propos et Contact. Les vidéos restent volontairement différées.

## Formulaire de demande d’étude

Le formulaire envoie ses données à la route serveur `/api/demande-etude`. Pour activer la transmission vers n8n, définir dans Vercel :

- `N8N_STUDY_WEBHOOK_URL` : URL du webhook de production n8n ;
- `N8N_WEBHOOK_TOKEN` : jeton Bearer facultatif, à contrôler dans n8n.

Aucun secret ne doit porter le préfixe `NEXT_PUBLIC_`.

## Étape 7 — SEO, sécurité et accessibilité

Cette version ajoute :

- données structurées Schema.org `Organization`, `LocalBusiness` et `WebSite` ;
- métadonnées dédiées aux principales pages commerciales ;
- lien d’évitement clavier et styles `focus-visible` ;
- respect de `prefers-reduced-motion` ;
- en-têtes de sécurité HTTP ;
- cache long pour les ressources de marque ;
- contrôles supplémentaires sur l’API de demande d’étude : type, taille et origine.

En Preview Vercel, laissez `NEXT_PUBLIC_SITE_URL` sur l’URL de preview utilisée pour les tests d’origine. En production, définissez-la sur `https://heliosolarpro.fr`.


## Étape 8 — Simulateur photovoltaïque

- nouvelle route `/simulateur` ;
- estimation locale de la puissance, de la production, des économies et du CO₂ évité ;
- aucun envoi de données ;
- hypothèses clairement affichées ;
- redirection vers la demande d’étude personnalisée.


## Application web installable (PWA)

Le site inclut maintenant :
- un manifeste d’installation ;
- un service worker en production ;
- une page hors connexion ;
- une bannière d’installation compatible avec les navigateurs qui exposent `beforeinstallprompt`.

Le service worker n’est enregistré qu’en environnement de production. Après un déploiement, vérifiez l’installation depuis Chrome Android et contrôlez le manifeste dans les outils d’audit du navigateur.
