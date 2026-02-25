export function getAuthToken() {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("mahy_auth_token");
}

export function isTokenExpired(token) {
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    if (!payload.exp) return true;

    const now = Math.floor(Date.now() / 1000);
    return payload.exp < now;
  } catch {
    return true;
  }
}

export function clearAuth() {
  localStorage.removeItem("mahy_auth_token");

  document.cookie =
    "mahy_portal_auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;";
}