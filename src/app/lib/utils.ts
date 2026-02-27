/**
 * Returns the correct URL for a public asset (e.g. images).
 * Prefixes with NEXT_PUBLIC_BASE_PATH when set (e.g. for GitHub Pages: /my-portfolio).
 */
export function getPublicUrl(path: string): string {
  if (!path) return path;
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!base) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const baseTrimmed = base.endsWith("/") ? base.slice(0, -1) : base;
  return `${baseTrimmed}${normalized}`;
}
