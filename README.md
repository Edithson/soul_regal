# SRE — SOUL REGAL SANS ÉGAL

Vitrine institutionnelle et commerciale pour SOUL REGAL SANS ÉGAL (SRE), entreprise d'approvisionnement en produits agricoles et alimentaires. Le site s'adresse aux ménages, aux restaurants et entreprises, ainsi qu'aux ONG et partenaires institutionnels.

> **Slogan :** SRE – Du champ à votre cuisine.  
> **Mission :** Pour vos besoins en produits agricoles et alimentaires, SRE vous accompagne dans la recherche et l'approvisionnement selon votre budget.

---

## Informations officielles & Coordonnées

- **Dénomination :** SOUL REGAL SANS ÉGAL (SRE)
- **Siège d'activité :** Nkomkana, Yaoundé – Cameroun
- **Téléphone / WhatsApp :** +237 683 511 935 / +237 694 929 167
- **E-mail :** sre.cameroun@gmail.com
- **RCCM :** CM-NSI-02-2026-A10-02047
- **NIU :** P109119001467B

---

## Architecture & Choix techniques

- **Astro 7 avec adaptateur Node.js (`@astrojs/node`)** en mode `standalone` :
  - La page vitrine est pré-rendue statiquement (`prerender = true`) pour un temps de chargement ultra-rapide.
  - La route d'API `/api/contact` s'exécute côté serveur pour traiter les demandes de façon sécurisée.
- **Base de données SQLite intégrée (`node:sqlite`)** :
  - Stockage local dans `./data/sre.sqlite` avec mode WAL (haute performance, intégrité et zéro dépendance native externe).
  - Tous les messages de contact y sont enregistrés avec horodatage, coordonnées, statut d'envoi du mail et IP.
- **Envoi d'e-mails via SMTP (`nodemailer`)** :
  - Notification automatique reçue par SRE avec mise en page HTML soignée.
  - En cas d'indisponibilité momentanée du serveur SMTP, les messages restent systématiquement conservés dans la base SQLite.
- **Fichier `.env` à la racine** :
  - Centralisation de toutes les données du site, de la base de données, des accès SMTP et des réglages du serveur.
- **Référencement naturel (SEO) poussé au maximum** :
  - Balises méta complètes : OpenGraph, Twitter Cards, balises géographiques (Yaoundé / Centre / Cameroun) et mots-clés stratégiques du vivrier local.
  - Données structurées enrichies Schema.org (`LocalBusiness`, `WebSite`, et `FAQPage` pour les Rich Snippets Google).
  - Fichiers `robots.txt` et `sitemap.xml` configurés à la racine du domaine.
  - Zéro décalage de mise en page (CLS prévenu grâce aux dimensions d'images explicites).
- **Ligne éditoriale poétique, soignée et authentique** :
  - Textes ancrés dans la réalité maraîchère et vivrière de Yaoundé (Nkomkana, Biyem-Assi, Obala...).
  - Élimination intégrale des tics de langage et symboles parasites artificiels (astérisques, flèches en puces, étoiles).

---

## Configuration via `.env`

Copiez `.env.example` vers `.env` (ou éditez le `.env` existant) :

```env
# 1. INFORMATIONS DU SITE
SITE_NAME="SRE"
SITE_LEGAL_NAME="SOUL REGAL SANS ÉGAL"
SITE_TAGLINE="Du champ à votre cuisine."
SITE_FULL_TAGLINE="SRE – Du champ à votre cuisine."
SITE_MISSION="Pour vos besoins en produits agricoles et alimentaires, SRE vous accompagne dans la recherche et l'approvisionnement selon votre budget."
SITE_LOCATION="Nkomkana, Yaoundé – Cameroun"
SITE_CITY="Yaoundé"
SITE_DISTRICT="Nkomkana"
SITE_COUNTRY="Cameroun"
SITE_COUNTRY_CODE="CM"
SITE_PHONE="+237 683 511 935"
SITE_SECONDARY_PHONE="+237 694 929 167"
SITE_WHATSAPP="237683511935"
SITE_WHATSAPP_SECONDARY="237694929167"
SITE_EMAIL="sre.cameroun@gmail.com"
SITE_RCCM="CM-NSI-02-2026-A10-02047"
SITE_NIU="P109119001467B"
SITE_WEBSITE=""

# 2. BASE DE DONNÉES SQLITE
DB_PATH="./data/sre.sqlite"

# 3. ENVOI DES E-MAILS (SMTP)
# Pour Gmail, générez un mot de passe d'application dans votre compte Google (Sécurité > Validation en 2 étapes > Mots de passe des applications)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="465"
SMTP_SECURE="true"
SMTP_USER="sre.cameroun@gmail.com"
SMTP_PASS="votre_mot_de_passe_application"
MAIL_FROM="\"SOUL REGAL SANS ÉGAL (SRE)\" <sre.cameroun@gmail.com>"
MAIL_TO="sre.cameroun@gmail.com"

# 4. SERVEUR
HOST="0.0.0.0"
PORT="4321"
```

---

## Commandes

### Développement local

```bash
npm install
npm run dev
```

### Build de production

```bash
npm run build
```

Le serveur prêt pour la production est compilé dans `dist/`.

### Lancement du serveur Node

```bash
npm start
# Équivalent à : node ./dist/server/entry.mjs
```

---

## Déploiement sur VPS Debian 13

### 1. Prérequis sur le VPS Debian 13

```bash
# Installer Node.js 22 ou 24 (LTS)
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs git nginx

# Installer PM2 pour superviser le serveur en tâche de fond
sudo npm install -g pm2
```

### 2. Cloner et installer le projet

```bash
cd /var/www
git clone <votre-depot> sre
cd sre
npm install
cp .env.example .env  # Renseigner vos accès réels dans .env
npm run build
```

### 3. Démarrer avec PM2

```bash
pm2 start npm --name "sre-vitrine" -- run start
pm2 save
pm2 startup
```

### 4. Configuration Nginx (Reverse Proxy)

Dans `/etc/nginx/sites-available/sre` :

```nginx
server {
    server_name votre-domaine.cm www.votre-domaine.cm;

    location / {
        proxy_pass http://127.0.0.1:4321;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Activez le site et rechargez Nginx :

```bash
sudo ln -s /etc/nginx/sites-available/sre /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

---

## Structure du projet

```text
src/
├── config/site.ts          # Lecture dynamique des variables .env avec fallbacks officiels
├── layouts/BaseLayout.astro # Gabarit HTML, métadonnées OpenGraph & Schema.org
├── lib/
│   ├── db.ts               # Base SQLite native (node:sqlite, table contacts, WAL)
│   └── mailer.ts           # Envoi de mails SMTP (nodemailer, template HTML responsive)
├── pages/
│   ├── api/contact.ts      # Endpoint POST /api/contact (insertion SQLite + envoi mail)
│   └── index.astro         # Page vitrine pré-rendue
├── scripts/site.ts         # Soumission asynchrone AJAX, menu, animations, WhatsApp
└── styles/global.css       # Design system et responsive
public/
├── favicon.svg             # Favicon SVG
└── images/                 # Visuels hébergés localement
data/
└── sre.sqlite              # Base de données SQLite (créée automatiquement, ignorée par git)
.env                        # Variables d'environnement actives
.env.example                # Modèle documenté des variables
```
