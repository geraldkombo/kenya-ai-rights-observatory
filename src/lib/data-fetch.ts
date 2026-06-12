const BASE = "/kenya-digital-rights-atlas";

export function dataUrl(path: string): string {
  return BASE + path;
}

export async function fetchJSON<T>(path: string): Promise<T> {
  const url = dataUrl(path);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to load ${url}: ${res.status}`);
  return res.json();
}
