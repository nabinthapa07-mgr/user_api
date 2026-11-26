import { useAuth } from "../context/AuthContext.jsx";

export default function Profile() {
  const { user } = useAuth();

  return (
    <section className="page">
      <h1>My Profile</h1>

      <div className="user-card">
        <h2>Welcome, {user.name}!</h2>
        <p>User ID: {user.id}</p>
        <p>Email: {user.email}</p>
      </div>
    </section>
  );
}
