const API = import.meta.env.VITE_API;

/** Fetches an array of activities from the API */
export async function reserveBook(token, bookId) {
  if (!token) {
    throw Error("You must be signed in to reserve this book.");
  }

  const response = await fetch(`${API}/reservations`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({ bookId }),
  });

  const result = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw Error(result.message || "Could not reserve this book.");
  }

  return result;
}
