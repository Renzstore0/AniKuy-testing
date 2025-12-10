const LS_KEY = "anikuy_favorites";

function safeParse(json) {
  try {
    return JSON.parse(json);
  } catch {
    return [];
  }
}

export function getFavorites() {
  if (typeof window === "undefined") return [];
  const raw = localStorage.getItem(LS_KEY);
  const data = safeParse(raw || "[]");
  return Array.isArray(data) ? data : [];
}

export function isFavorite(slug) {
  if (!slug) return false;
  return getFavorites().some((a) => a.slug === slug);
}

export function addFavorite(anime) {
  if (typeof window === "undefined") return;
  if (!anime?.slug) return;

  const favs = getFavorites();
  if (favs.some((f) => f.slug === anime.slug)) return;

  favs.push(anime);
  localStorage.setItem(LS_KEY, JSON.stringify(favs));
}

export function removeFavorite(slug) {
  if (typeof window === "undefined") return;
  const favs = getFavorites().filter((f) => f.slug !== slug);
  localStorage.setItem(LS_KEY, JSON.stringify(favs));
}