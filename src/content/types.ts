export type LegalBlock =
  | { t: "h"; x: string }
  | { t: "p"; x: string }
  | { t: "li"; l: number; x: string };
