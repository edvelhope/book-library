import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import BookItem from "./BookItem";

export default function BookList() {
  // useSelector è un hook di React-Redux che consente di accedere allo stato globale del Redux store.
  //selezioniamo lo slice 'notes' dallo stato globale.
  const books = useSelector((state: RootState) => state.books);
  return (
    <ul className="flex flex-wrap justify-center gap-2 mt-5">
      {books.length === 0 ? (
        <p className="empty-message">Nessun libro presente</p>
      ) : (
        books.map((book) => <BookItem key={book.id} book={book} />)
      )}
    </ul>
  );
}
