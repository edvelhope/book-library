import { useDispatch } from "react-redux";
import { rimuoviBook, togglePreferenza } from "../redux/bookSlice";
import type { AppDispatch } from "../redux/store";
import type { Book } from "../data/books";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faFeather,
  faHeart as solidHeart,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";

export default function NoteItem({ book }: { book: Book }) {
  // Ottieni il dispatcher tipizzato per poter inviare azioni al Redux store
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="card card-border w-90 bg-base-200 transition-all duration-300 ease-in-out hover:border-blue-500 hover:shadow-[0_0_8px_2px_rgba(59,130,246,0.5)]">
      <li className="card-body">
        <div className="flex justify-between">
          <Link className="card-title" to={`/books/${book.id}/info`}>
            <FontAwesomeIcon icon={faBookOpen} />
            <h3 className="hover:underline underline-offset-4 decoration-2">
              {book.titolo}
            </h3>
          </Link>
          <FontAwesomeIcon
            icon={book.preferenza ? solidHeart : regularHeart}
            size="xl"
            onClick={() => dispatch(togglePreferenza(book.id))}
            style={{
              color: book.preferenza ? "red" : "gray",
              cursor: "pointer",
              transition: "transform 0.2s ease",
            }}
            onMouseDown={(e) =>
              (e.currentTarget.style.transform = "scale(1.2)")
            }
            onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
            className="flex"
          />
        </div>
        <p className="font-serif">
          {book.autore}
          <FontAwesomeIcon className="ml-1" icon={faFeather} />
        </p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-sm btn-error"
            onClick={() => dispatch(rimuoviBook(book.id))}
          >
            Rimuovi
          </button>
        </div>
      </li>
    </div>
  );
}
