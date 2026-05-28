import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getBook } from "../api/books";

/** I need a function to call BookDetails and grab id using useParams */
export default function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [error] = useState(null);

  useEffect(() => {
    const syncBook = async () => {
      const data = await getBook(id);
      setBook(data);
    };
    syncBook();
  }, [id]);
  return (
    <article>
      <h1>{book.title}</h1>
      <p>{book.author}</p>
      <p>{book.description}</p>
      {error && <p role="alert">{error}</p>}
    </article>
  );
}
