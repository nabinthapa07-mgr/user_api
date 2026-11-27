
import { useParams, Link } from "react-router-dom";
import { Card } from "../components/ui/Card.jsx";
import { Button } from "../components/ui/Button.jsx";

const users = [
  { id: 1, name: "John Doe", email: "john@example.com", username: "johndoe" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", username: "janesmith" },
  { id: 3, name: "Alex Brown", email: "alex@example.com", username: "alexbrown" },
  { id: 4, name: "Sam Wilson", email: "sam@example.com", username: "samwilson" },
];

export default function UserDetail() {
  const { id } = useParams();
  const user = users.find((item) => item.id === Number(id));

  if (!user) {
    return (
      <Card>
        <h1 className="text-xl font-bold text-fg">User not found</h1>
        <Link to="/users" className="mt-3 inline-block text-primary hover:underline">
          Back to Users
        </Link>
      </Card>
    );
  }

  return (
    <section className="mx-auto max-w-xl">
      <Card>
        <h1 className="mb-4 text-2xl font-bold text-fg">User Details</h1>
        <div className="space-y-3">
          <p><strong className="text-fg">Name:</strong> <span className="text-muted">{user.name}</span></p>
          <p><strong className="text-fg">Email:</strong> <span className="text-muted">{user.email}</span></p>
          <p><strong className="text-fg">Username:</strong> <span className="text-muted">@{user.username}</span></p>
        </div>
        <Link to="/users" className="mt-6 inline-block">
          <Button variant="ghost">← Back to Users</Button>
        </Link>
      </Card>
    </section>
  );
}
