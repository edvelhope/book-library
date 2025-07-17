import { useDispatch } from "react-redux";
import { rimuoviBook, togglePreferenza } from "../redux/bookSlice";
import type { AppDispatch } from "../redux/store";
import type { Book } from "../data/books";
import { Link } from "react-router-dom";

export default function NoteItem({ book }: { book: Book }) {
  // Ottieni il dispatcher tipizzato per poter inviare azioni al Redux store
  const dispatch = useDispatch<AppDispatch>();

  return (
    <li className="flex justify-between">
      <Link to={`/books/${book.id}/info`}>
        <h3>{book.titolo}</h3>
      </Link>
      <p>{book.autore}</p>
      <div className="flex gap-2">
        <button onClick={() => dispatch(rimuoviBook(book.id))}>Rimuovi</button>
        <input
          type="checkbox"
          checked={book.preferenza}
          onChange={() => dispatch(togglePreferenza(book.id))}
        />
      </div>
    </li>
  );
}
