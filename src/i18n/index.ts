import es from "./es.json";
import en from "./en.json";

export const LANGS = ["es", "en"] as const;
export type Lang = (typeof LANGS)[number];

const DICTS: Record<Lang, Record<string, string>> = { es, en };

export function getLangFromPath(pathname: string): Lang {
  // pathname ejemplo: "/en/contact" o "/es/"
  const seg = pathname.split("/")[1];
  return (LANGS as readonly string[]).includes(seg) ? (seg as Lang) : "en";
}

export function t(lang: Lang, key: string): string {
  return DICTS[lang][key] ?? key; // si falta traducción, devuelve la key
}
