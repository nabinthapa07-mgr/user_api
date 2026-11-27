
import { Card } from "./ui/Card.jsx";
import { Link } from "react-router-dom";

export default function UserCard({ user }) {
  return (
    <Card className="h-full transition hover:-translate-y-1 hover:shadow-md">
      <div className="space-y-3">
        <div>
          <h2 className="text-lg font-semibold text-fg">
            {user.name}
          </h2>
          <p className="text-sm text-muted">{user.email}</p>
        </div>

        <p className="text-sm text-muted">
          Username: @{user.username}
        </p>

        <Link
          to={`/users/${user.id}`}
          className="inline-block text-sm font-medium text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          View Details →
        </Link>
      </div>
    </Card>
  );
}
