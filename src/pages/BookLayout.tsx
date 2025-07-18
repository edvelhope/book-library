import { useParams, Link, Outlet } from 'react-router-dom';
import { books } from '../data/books';

export default function UserLayout() {
  const { id } = useParams();
  const book = books.find(b => b.id === id);

  if (!book) return <p>Utente non trovato.</p>;

  return (
    <div>
      <h2>Profilo di {book.titolo}</h2>
      <nav>
        <Link to="info">Info</Link> | <Link to="preferenze">Preferenze</Link>
      </nav>
      <Outlet />
    </div>
  );
}
