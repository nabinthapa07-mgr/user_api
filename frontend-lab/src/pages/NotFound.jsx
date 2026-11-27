
import { Link } from "react-router-dom";
import { Card } from "../components/ui/Card.jsx";
import { Button } from "../components/ui/Button.jsx";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-xl">
      <Card className="text-center">
        <h1 className="text-5xl font-bold text-primary">404</h1>
        <h2 className="mt-3 text-2xl font-semibold text-fg">
          Page Not Found
        </h2>
        <p className="mt-2 text-muted">
          The page you are looking for does not exist.
        </p>
        <Link to="/" className="mt-6 inline-block">
          <Button>Go Home</Button>
        </Link>
      </Card>
    </section>
  );
}
