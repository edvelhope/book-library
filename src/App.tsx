import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Library from "./pages/Library";
import BookInfo from "./pages/BookInfo";
import Favourites from "./pages/Favourites";
import Login from "./pages/Login";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./redux/authSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <div className="container  mx-auto ">
      <nav>
        <div className="flex flex-wrap justify-between items-center">
          <Link to="/" className="hover:text-yellow-400">
            Home
          </Link>
          <Link to="/books" className="hover:text-yellow-400">
            Libreria
          </Link>
          <Link to="/favourites" className="hover:text-yellow-400">
            Preferiti
          </Link>
        </div>
        <div className="mt-2 md:mt-0">
          {user ? (
            <>
              <span className="text-sm italic">
                Accesso come:{" "}
                <span className="font-semibold">{user.username}</span>
              </span>
              <button onClick={() => dispatch(logout())}>Logout</button>
            </>
          ) : (
            <Link to="/login" className="hover:text-yellow-400">
              Login
            </Link>
          )}
        </div>
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
