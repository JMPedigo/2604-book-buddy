const API = import.meta.env.VITE_API;

/** Fetches an array of books from the API */
export async function getBooks() {
  try {
    const response = await fetch(API + "/books");
    const result = await response.json();
    return result;
  } catch (e) {
    console.error(e);
    return [];
  }
}

/** Fetches a single book from the API by the book's id */
export async function getBook(id) {
  try {
    const response = await fetch(`${API}/books/${id}`);
    const result = await response.json();
    return result;
  } catch (e) {
    console.error(e);
    return null;
  }
}

/** I need to fetch cover images from the API to attach to CatalogListItem*/
export async function getCoverImage(coverimage) {
  try {
    const response = await fetch(`${API}/books/${coverimage}`);
    const result = await response.json();
    return result;
  } catch (e) {
    console.error(e);
    return null;
  }
}
