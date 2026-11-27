
import { useAuth } from "../context/AuthContext.jsx";
import { Card } from "../components/ui/Card.jsx";
import { Button } from "../components/ui/Button.jsx";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return null;
  }

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <section className="mx-auto max-w-xl space-y-6">
      <h1 className="text-3xl font-bold text-fg">My Profile</h1>

      <Card>
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-primary">
            Welcome, {user.name}!
          </h2>

          <p className="text-muted">
            You are successfully logged in.
          </p>

          <Button onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </Card>
    </section>
  );
}
