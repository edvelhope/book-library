import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Library from "./pages/Library";
import BookInfo from "./pages/BookInfo";
import Favourites from "./pages/Favourites";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/books">Libreria</Link> |{" "}
        <Link to="/favourites">Preferiti</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/books" element={<Library />} />
        <Route path="/favourites" element={<Favourites />} />
        {/* Rotta dinamica con annidamento */}
        <Route path="/books/:id" element={<BookInfo />}>
          <Route path="info" element={<BookInfo />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
