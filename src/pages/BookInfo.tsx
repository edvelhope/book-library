import { useParams } from "react-router-dom";
import type { RootState } from "../redux/store";
import { useSelector } from "react-redux";

export default function BookInfo() {
  const { id } = useParams();
  const books = useSelector((state: RootState) => state.books);

  const bookId = books.find((book) => book.id === id);
  return (
    <div>
      <h3>{bookId?.titolo}</h3>
      <p>{bookId?.id}</p>
      <p>{bookId?.autore}</p>
    </div>
  );
}
