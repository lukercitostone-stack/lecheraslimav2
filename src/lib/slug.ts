export function slugify(input: string) {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "")
    .trim();
}

export function makeAutoUsername(displayName?: string | null, email?: string | null) {
  const base = slugify(displayName || "") || slugify((email || "").split("@")[0] || "");
  const safe = base || "user";
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `${safe}${rand}`;
}
