import { useEffect, useState } from "react";
import UserCard from "../components/UserCard.jsx";
import { useLocalStorage } from "../hooks/useLocalStorage.js";

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

export default function Users() {
  const [search, setSearch] = useLocalStorage("userSearch", "");
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section className="page">
      <h1>Users List</h1>

      <p>Viewport width: {width}px</p>

      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="user-grid">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => <UserCard key={user.id} user={user} />)
        ) : (
          <p>No users found.</p>
        )}
      </div>
    </section>
  );
}
