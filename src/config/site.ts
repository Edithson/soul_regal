/**
 * Informations et coordonnées officielles de SRE (Soul Regal sans Égal).
 * Les valeurs proviennent du fichier .env à la racine avec des valeurs par défaut sécurisées.
 */
function getEnv(key: string, defaultValue: string): string {
  if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env[key]) {
    return import.meta.env[key];
  }
  if (typeof process !== 'undefined' && process.env && process.env[key]) {
    return process.env[key];
  }
  return defaultValue;
}

const phone = getEnv('SITE_PHONE', '+237 683 511 935');
const secondaryPhone = getEnv('SITE_SECONDARY_PHONE', '+237 694 929 167');

export const siteConfig = {
  name: getEnv('SITE_NAME', 'SRE'),
  legalName: getEnv('SITE_LEGAL_NAME', 'SOUL REGAL SANS ÉGAL'),
  tagline: getEnv('SITE_TAGLINE', 'Du champ à votre cuisine.'),
  fullTagline: getEnv('SITE_FULL_TAGLINE', 'SRE – Du champ à votre cuisine.'),
  mission: getEnv(
    'SITE_MISSION',
    "Pour vos besoins en produits agricoles et alimentaires, SRE vous accompagne dans la recherche et l'approvisionnement selon votre budget."
  ),
  email: getEnv('SITE_EMAIL', 'sre.cameroun@gmail.com'),
  phone,
  secondaryPhone,
  phones: [phone, secondaryPhone].filter(Boolean),
  whatsapp: getEnv('SITE_WHATSAPP', '237683511935'),
  whatsappSecondary: getEnv('SITE_WHATSAPP_SECONDARY', '237694929167'),
  location: getEnv('SITE_LOCATION', 'Nkomkana, Yaoundé – Cameroun'),
  city: getEnv('SITE_CITY', 'Yaoundé'),
  district: getEnv('SITE_DISTRICT', 'Nkomkana'),
  country: getEnv('SITE_COUNTRY', 'Cameroun'),
  countryCode: getEnv('SITE_COUNTRY_CODE', 'CM'),
  rccm: getEnv('SITE_RCCM', 'CM-NSI-02-2026-A10-02047'),
  niu: getEnv('SITE_NIU', 'P109119001467B'),
  website: getEnv('SITE_WEBSITE', ''),
};
