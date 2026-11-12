import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * Chargeur de variables d'environnement universel et résilient.
 * Fonctionne indifféremment en mode "astro dev", "astro build", ou serveur Node.js de production.
 */
let cachedEnv: Record<string, string> = {};
let isLoaded = false;

function loadEnvFile(): Record<string, string> {
  if (isLoaded) return cachedEnv;

  const candidateDirs = [
    process.cwd(),
    typeof __dirname !== 'undefined' ? path.resolve(__dirname, '..') : '',
    typeof import.meta?.url === 'string'
      ? path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..')
      : '',
  ].filter(Boolean);

  let envPath = '';
  for (const dir of candidateDirs) {
    const candidate = path.join(dir, '.env');
    if (fs.existsSync(candidate)) {
      envPath = candidate;
      break;
    }
  }

  if (envPath) {
    try {
      const content = fs.readFileSync(envPath, 'utf-8');
      for (const line of content.split('\n')) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) continue;
        const eqIdx = trimmed.indexOf('=');
        if (eqIdx !== -1) {
          const key = trimmed.slice(0, eqIdx).trim();
          let val = trimmed.slice(eqIdx + 1).trim();
          if (
            (val.startsWith('"') && val.endsWith('"')) ||
            (val.startsWith("'") && val.endsWith("'"))
          ) {
            val = val.slice(1, -1);
          }
          cachedEnv[key] = val;
          // Synchronise immédiatement dans process.env pour les bibliothèques tierces (ex: nodemailer)
          if (!process.env[key]) {
            process.env[key] = val;
          }
        }
      }
    } catch (err) {
      console.warn('[Env] Impossible de lire le fichier .env :', err);
    }
  }

  isLoaded = true;
  return cachedEnv;
}

// Initialisation dès l'importation du module
loadEnvFile();

/**
 * Récupère une variable d'environnement en inspectant successivement :
 * 1. process.env
 * 2. import.meta.env (Vite / Astro)
 * 3. Le cache du fichier .env chargé directement
 * 4. La valeur par défaut spécifiée
 */
export function getEnv(key: string, defaultValue = ''): string {
  // 1. process.env
  if (typeof process !== 'undefined' && process.env && process.env[key] !== undefined) {
    const val = String(process.env[key]).trim();
    if (val.length > 0) return val;
  }

  // 2. import.meta.env (Astro / Vite)
  try {
    if (typeof import.meta !== 'undefined' && import.meta.env && (import.meta.env as any)[key] !== undefined) {
      const val = String((import.meta.env as any)[key]).trim();
      if (val.length > 0) return val;
    }
  } catch {
    // Ignore si import.meta n'est pas disponible dans le contexte
  }

  // 3. Cache du fichier .env
  if (cachedEnv[key] !== undefined && cachedEnv[key].trim().length > 0) {
    return cachedEnv[key].trim();
  }

  return defaultValue;
}

export function getNumberEnv(key: string, defaultValue: number): number {
  const val = getEnv(key);
  if (!val) return defaultValue;
  const num = Number(val);
  return Number.isFinite(num) ? num : defaultValue;
}

export function getBoolEnv(key: string, defaultValue: boolean): boolean {
  const val = getEnv(key);
  if (!val) return defaultValue;
  return val.toLowerCase() === 'true' || val === '1';
}
