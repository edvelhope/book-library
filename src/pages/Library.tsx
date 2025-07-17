import BookForm from "../components/BookForm";
import BookList from "../components/BookList";

export default function Library() {
  return (
    <div>
      <h2>Libreria</h2>
      <BookForm />
      <BookList />
    </div>
  );
}
