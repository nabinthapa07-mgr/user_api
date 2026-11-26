import { NavLink, Outlet } from "react-router-dom";
import { useTheme } from "../context/ThemeContext.jsx";
import { useAuth } from "../context/AuthContext.jsx";

export default function Layout() {
  const { theme, toggle } = useTheme();
  const { user, logout } = useAuth();

  return (
    <>
      <header>
        <nav className="navbar">
          <h2>Frontend Lab ⚛️</h2>

          <div className="nav-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/users">Users</NavLink>

            {user ? (
              <>
                <NavLink to="/profile">Profile</NavLink>
                <button onClick={logout}>Logout ({user.name})</button>
              </>
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}

            <button onClick={toggle}>
              {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
          </div>
        </nav>
      </header>

      <main className="container">
        <Outlet />
      </main>
    </>
  );
}
