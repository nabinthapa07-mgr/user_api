
import { NavLink, Outlet } from "react-router-dom";
import { useTheme } from "../context/ThemeContext.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { Button } from "./ui/Button.jsx";

export default function Layout() {
  const { theme, toggle } = useTheme();
  const { user, logout } = useAuth();

  const linkClass = ({ isActive }) =>
    `rounded-card px-3 py-2 text-sm font-medium transition ${
      isActive
        ? "bg-primary text-primary-contrast"
        : "text-muted hover:bg-surface hover:text-fg"
    }`;

  return (
    <div className="min-h-screen bg-bg text-fg">
      <header className="border-b border-line bg-surface">
        <nav className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          <NavLink to="/" className="text-xl font-bold text-primary">
            Frontend Lab
          </NavLink>

          <div className="flex flex-wrap items-center gap-2">
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>

            <NavLink to="/users" className={linkClass}>
              Users
            </NavLink>

            {user ? (
              <>
                <NavLink to="/profile" className={linkClass}>
                  Profile
                </NavLink>

                <Button variant="ghost" onClick={logout}>
                  Logout ({user.name})
                </Button>
              </>
            ) : (
              <NavLink to="/login" className={linkClass}>
                Login
              </NavLink>
            )}

            <Button variant="ghost" onClick={toggle}>
              {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </Button>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}
