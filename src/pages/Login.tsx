import React, { useState } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../redux/store";
import { authenticateUser, loginSuccess } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleLogin = () => {
    const authenticatedUser = authenticateUser(username, password);

    if (authenticatedUser) {
      dispatch(loginSuccess(authenticatedUser));
      setError("");
      navigate("/"); // redireziona alla home
    } else {
      setError("Username o password non validi");
    }
  };

  // const handleKeyPress = (e: React.KeyboardEvent) => {
  //   if (e.key === "Enter") {
  //     handleLogin();
  //   }
  // };

  return (
    <div
      className="border border-white rounded-sm"
      style={{ maxWidth: "400px", margin: "50px auto", padding: "20px" }}
    >
      <h2>Accesso</h2>
      <div>
        <div style={{ marginBottom: "15px" }}>
          <label>Username:</label>
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            // onKeyPress={handleKeyPress}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Password:</label>
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            // onKeyPress={handleKeyPress}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            required
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button
        className="btn"
          onClick={handleLogin}
          style={{ width: "100%", padding: "10px" }}
        >
          Accedi
        </button>
      </div>

      <div
        className="text-black"
        style={{
          marginTop: "20px",
          padding: "15px",
          backgroundColor: "#f5f5f5",
          borderRadius: "5px",
        }}
      >
        <h4>Credenziali di prova:</h4>
        <p>
          <strong>Admin:</strong> username: admin, password: admin123
        </p>
        <p>
          <strong>User:</strong> username: user, password: user123
        </p>
      </div>
    </div>
  );
};

export default Login;
