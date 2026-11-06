import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { loginAdmin } from "../features/auth/authSlice";

export default function AdminLogin() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error } = useSelector(
    (state) => state.auth
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await dispatch(
        loginAdmin({
          email: email.trim(),
          password
        })
      ).unwrap();

      setPassword("");

      navigate("/");

    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <section className="section">

      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >

        <h2>Admin Login</h2>

        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="username"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

        {error && (
          <p style={{ color: "red" }}>
            {error}
          </p>
        )}

      </form>

    </section>
  );
}