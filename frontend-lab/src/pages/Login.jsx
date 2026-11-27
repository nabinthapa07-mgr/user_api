
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { Card } from "../components/ui/Card.jsx";
import { Button } from "../components/ui/Button.jsx";

export default function Login() {
  const [name, setName] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim()) {
      return;
    }

    login({ name: name.trim() });
    navigate("/profile");
  }

  return (
    <section className="mx-auto max-w-md">
      <Card>
        <h1 className="mb-2 text-2xl font-bold text-fg">Login</h1>
        <p className="mb-6 text-sm text-muted">
          Enter your name to access your profile.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-fg">
              Your Name
            </label>

            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
              className="w-full rounded-card border border-line bg-bg p-3 text-fg outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            />
          </div>

          <Button type="submit" className="w-full justify-center">
            Login
          </Button>
        </form>
      </Card>
    </section>
  );
}
