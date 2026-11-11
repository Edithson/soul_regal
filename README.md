# SRE — SOUL REGAL SANS ÉGAL

Vitrine institutionnelle et commerciale pour SOUL REGAL SANS ÉGAL (SRE), entreprise d'approvisionnement en produits agricoles et alimentaires. Le site s'adresse aux ménages, aux restaurants et entreprises, ainsi qu'aux ONG et partenaires institutionnels.

> **Slogan :** SRE – Du champ à votre cuisine.  
> **Mission :** Pour vos besoins en produits agricoles et alimentaires, SRE vous accompagne dans la recherche et l'approvisionnement selon votre budget.

## Informations officielles & Coordonnées

- **Dénomination :** SOUL REGAL SANS ÉGAL (SRE)
- **Siège d'activité :** Nkomkana, Yaoundé – Cameroun
- **Téléphone / WhatsApp :** +237 683 511 935 / +237 694 929 167
- **E-mail :** sre.cameroun@gmail.com
- **RCCM :** CM-NSI-02-2026-A10-02047
- **NIU :** P109119001467B

## Choix techniques

- **Astro 7** : génération statique, HTML ultra-léger et socle SEO optimisé.
- **Tailwind CSS 4** via le plugin Vite : base utilitaire moderne et design system sur mesure dans `src/styles/global.css`.
- **TypeScript** pour la logique et les interactions côté navigateur.
- **Images locales** : toutes les photographies sont hébergées en local dans `public/images/` pour une autonomie totale et des performances optimales.
- Pas de framework JavaScript lourd : navigation mobile, animations d'apparition, accordéons FAQ et formulaire gérés en JavaScript natif.

## Prérequis

- Node.js **22.12 ou supérieur**
- npm 10 ou supérieur

## Démarrage

```bash
npm install
npm run dev
```

Le serveur de développement affiche l'adresse locale à ouvrir dans le navigateur (généralement `http://localhost:4321`).

Pour générer le site statique :

```bash
npm run build
npm run preview
```

Le site prêt à déployer se trouve dans `dist/`.

## Configuration

Les coordonnées et métadonnées sont centralisées dans `src/config/site.ts` :

```ts
export const siteConfig = {
  name: 'SRE',
  legalName: 'SOUL REGAL SANS ÉGAL',
  tagline: 'Du champ à votre cuisine.',
  fullTagline: 'SRE – Du champ à votre cuisine.',
  mission: "Pour vos besoins en produits agricoles et alimentaires, SRE vous accompagne dans la recherche et l'approvisionnement selon votre budget.",
  email: 'sre.cameroun@gmail.com',
  phone: '+237 683 511 935',
  secondaryPhone: '+237 694 929 167',
  phones: ['+237 683 511 935', '+237 694 929 167'],
  whatsapp: '237683511935',
  whatsappSecondary: '237694929167',
  location: 'Nkomkana, Yaoundé – Cameroun',
  city: 'Yaoundé',
  district: 'Nkomkana',
  country: 'Cameroun',
  countryCode: 'CM',
  rccm: 'CM-NSI-02-2026-A10-02047',
  niu: 'P109119001467B',
  website: '',
};
```

## Structure

```text
src/
├── config/site.ts          # Identité, mentions légales et coordonnées de SRE
├── layouts/BaseLayout.astro # Gabarit HTML, métadonnées OpenGraph & Schema.org
├── pages/index.astro       # Sections de la vitrine
├── scripts/site.ts         # Menu, animations, formulaire & bouton WhatsApp
└── styles/global.css       # Design system, charte graphique et responsive
public/
├── favicon.svg             # Favicon SVG
└── images/                 # Visuels hébergés localement
    ├── hero-produce.jpg
    ├── about-landscape.jpg
    ├── about-vegetables.jpg
    └── partner-meeting.jpg
```

## Direction artistique

- Vert forêt : confiance, nature et stabilité.
- Ivoire et sauge : sobriété, lumière et fraîcheur.
- Terracotta : accent chaleureux inspiré de la terre et des récoltes.
- Titres éditoriaux en DM Serif Display, interface en DM Sans.
- Mise en page responsive, animations discrètes et respect de `prefers-reduced-motion`.
