import { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const { login, user } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim() || !email.includes("@")) {
      alert("Please enter a valid email.");
      return;
    }

    await login(email);
    navigate("/profile");
  };

  if (user) {
    return (
      <section className="page">
        <h1>You are already logged in.</h1>
        <button onClick={() => navigate("/profile")}>Go to Profile</button>
      </section>
    );
  }

  return (
    <section className="page">
      <h1>Login</h1>

      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>

      <p>This is a demo login without a backend.</p>
    </section>
  );
}
