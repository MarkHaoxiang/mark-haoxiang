import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <article>
      <h1>Projects</h1>
      <ul className="project-list">
        <li>
          <Link to="/projects/catan-engine">Catan Engine</Link>
          <p>
            A JAX-based Settlers of Catan engine with reinforcement learning
            agents and a live in-browser demo.
          </p>
        </li>
      </ul>
    </article>
  );
}
