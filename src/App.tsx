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
    <div className="container mx-auto bg-white text-gray-900 p-6 shadow-lg rounded-md">
      {/* Navbar */}
      <nav className="bg-gray-800 text-yellow-400 p-4 rounded-t-md">
        <div className="flex flex-wrap justify-between items-center space-x-6">
          <Link to="/" className="text-xl font-semibold hover:text-yellow-500 transition duration-300">
            Home
          </Link>
          <Link to="/books" className="text-xl font-semibold hover:text-yellow-500 transition duration-300">
            Libreria
          </Link>
          <Link to="/favourites" className="text-xl font-semibold hover:text-yellow-500 transition duration-300">
            Preferiti
          </Link>
        </div>

        <div className="mt-4 flex justify-between items-center">
          {user ? (
            <>
              <span className="text-sm italic text-gray-200">
                Accesso come:{" "}
                <span className="font-semibold">{user.username}</span>
              </span>
              <button
                className="bg-yellow-500 text-gray-800 px-4 py-2 rounded-lg hover:bg-yellow-400 transition duration-300"
                onClick={() => dispatch(logout())}
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="text-lg font-semibold hover:text-yellow-500 transition duration-300"
            >
              Login
            </Link>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="mt-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/books" element={<Library />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/books/:id" element={<BookInfo />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;






