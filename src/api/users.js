const API = import.meta.env.VITE_API;

export async function getAccount(token) {
  if (!token) {
    throw Error("You must be signed in to view your account.");
  }

  const response = await fetch(`${API}/users/me`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  const result = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw Error(result.message || "Could not load your account.");
  }

  return result;
}
