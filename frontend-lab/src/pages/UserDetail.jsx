import { useParams, Link } from "react-router-dom";

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    username: "johndoe",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    username: "janesmith",
  },
  {
    id: 3,
    name: "Alex Brown",
    email: "alex@example.com",
    username: "alexbrown",
  },
  {
    id: 4,
    name: "Sam Wilson",
    email: "sam@example.com",
    username: "samwilson",
  },
];

export default function UserDetail() {
  const { id } = useParams();

  const user = users.find((item) => item.id === Number(id));

  if (!user) {
    return <h2>User not found.</h2>;
  }

  return (
    <section className="page">
      <h1>User Details</h1>

      <div className="user-card">
        <h2>{user.name}</h2>
        <p>ID: {user.id}</p>
        <p>Email: {user.email}</p>
        <p>Username: {user.username}</p>
      </div>

      <Link to="/users">← Back to Users</Link>
    </section>
  );
}
