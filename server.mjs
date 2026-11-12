/**
 * Point d'entrée de production pour SRE (SOUL REGAL SANS ÉGAL).
 * 1. Initialise automatiquement la base de données SQLite et son dossier ./data s'ils n'existent pas.
 * 2. Démarre le serveur Node.js Astro en mode standalone.
 */
import './scripts/init-db.mjs';
import('./dist/server/entry.mjs');
