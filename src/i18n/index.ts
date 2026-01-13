/**
 * i18n.ts
 * ------
 * Lightweight internationalization utility that handles language detection
 * from the URL path and provides a simple translation lookup function.
 * It supports multiple languages via JSON dictionaries and falls back
 * gracefully when a translation key is missing.
 */

import es from "./es.json";
import en from "./en.json";

export const LANGS = ["es", "en"] as const;
export type Lang = (typeof LANGS)[number];

const DICTS: Record<Lang, Record<string, string>> = { es, en };

export function getLangFromPath(pathname: string): Lang {
  const seg = pathname.split("/")[1];
  return (LANGS as readonly string[]).includes(seg) ? (seg as Lang) : "en";
}

export function t(lang: Lang, key: string): string {
  return DICTS[lang][key] ?? key;
}
