import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="page">
      <div className="home-banner">
        <h1>Welcome to Frontend Lab ⚛️</h1>

        <p>
          Learn and explore modern frontend development using React 19, Vite,
          Hooks, Context API and Routing.
        </p>

        <Link to="/users" className="btn">
          Explore Users →
        </Link>
      </div>

      <h2 className="section-title">What We Use</h2>

      <div className="feature-grid">
        <div className="feature-card">
          <h3>⚛️ React</h3>
          <p>Build reusable UI components.</p>
        </div>

        <div className="feature-card">
          <h3>🎣 Hooks</h3>
          <p>Manage state and component effects.</p>
        </div>

        <div className="feature-card">
          <h3>🌐 Router</h3>
          <p>Navigate between different pages.</p>
        </div>

        <div className="feature-card">
          <h3>🔐 Context API</h3>
          <p>Manage global theme and authentication.</p>
        </div>
      </div>
    </section>
  );
}
