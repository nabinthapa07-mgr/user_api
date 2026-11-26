import { Link } from "react-router-dom";

export default function UserCard({ user }) {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Username: {user.username}</p>

      <Link to={`/users/${user.id}`}>View Details →</Link>
    </div>
  );
}
