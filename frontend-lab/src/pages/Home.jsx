
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button.jsx";
import { Card } from "../components/ui/Card.jsx";

export default function Home() {
  const navigate = useNavigate();

  const features = [
    {
      title: "React",
      description: "Build reusable UI components.",
    },
    {
      title: "Hooks",
      description: "Manage state and component effects.",
    },
    {
      title: "Router",
      description: "Navigate between different pages.",
    },
    {
      title: "Context API",
      description: "Manage global theme and authentication.",
    },
  ];

  return (
    <section className="space-y-10">
      <div className="flex flex-col items-start justify-between gap-6 rounded-card border border-line bg-surface p-6 md:flex-row md:items-center md:p-10">
        <div className="max-w-2xl space-y-4">
          <h1 className="text-3xl font-bold text-fg md:text-4xl">
            Welcome to Frontend Lab
          </h1>

          <p className="text-muted">
            Learn and explore modern frontend development using React 19,
            Vite, Hooks, Context API and Routing.
          </p>
        </div>

        <Button onClick={() => navigate("/users")}>
          Explore Users →
        </Button>
      </div>

      <div className="space-y-5">
        <h2 className="text-2xl font-bold text-fg">What We Use</h2>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-4">
          {features.map((feature) => (
            <Card key={feature.title}>
              <h3 className="mb-2 text-lg font-semibold text-primary">
                {feature.title}
              </h3>

              <p className="text-muted">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
