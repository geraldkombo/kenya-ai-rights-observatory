const aliases: Record<string, string> = {
  "muranga": "Murang'a",
  "taita taveta": "Taita Taveta",
  "tana river": "Tana River",
  "tharaka nithi": "Tharaka Nithi",
  "trans nzoia": "Trans Nzoia",
  "uasin gishu": "Uasin Gishu",
  "west pokot": "West Pokot",
  "elgeyo marakwet": "Elgeyo Marakwet",
  "homa bay": "Homa Bay",
};

export function matchCountyName(source: string, target: string): boolean {
  const a = source.toLowerCase().trim();
  const b = target.toLowerCase().trim();
  if (a === b) return true;
  return (aliases[a]?.toLowerCase() === b) || (aliases[b]?.toLowerCase() === a);
}
