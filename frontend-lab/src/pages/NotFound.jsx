import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="page">
      <h1>404 - Page Not Found</h1>

      <p>Sorry, the page you are looking for does not exist.</p>

      <Link to="/" className="btn">
        Back to Home
      </Link>
    </section>
  );
}
