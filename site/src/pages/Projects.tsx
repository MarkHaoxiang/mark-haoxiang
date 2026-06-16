import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <article>
      <h1>Projects</h1>
      <ul className="project-list">
        <li>
          <Link to="/projects/settlrl-engine">Settlrl Engine</Link>
          <p>
            A JAX-based hex-tile trading game engine with reinforcement learning
            agents and a live in-browser demo.
          </p>
        </li>
      </ul>
    </article>
  );
}
