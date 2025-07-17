import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import BookItem from "../components/BookItem";

export default function Favourites() {
  const books = useSelector((state: RootState) => state.books);

  const favouriteBooks = books.filter((b) => b.preferenza === true);
  return (
    <ul className="flex flex-col gap-2 mt-5">
      {books.length === 0 ? (
        <p className="empty-message">Nessun appunto presente.</p>
      ) : (
        favouriteBooks.map((book) => <BookItem key={book.id} book={book} />)
      )}
    </ul>
  );
}
