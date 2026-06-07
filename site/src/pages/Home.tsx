import { Link } from "react-router-dom";

export default function Home() {
  return (
    <article className="home">
      <p>I'm a software engineer at Jane Street.</p>
      <p>
        Before this, I studied Computer Science at the University of Cambridge
        (BA and MEng). My research interests lie in multi-agent systems and
        reinforcement learning — how groups interact, coordinate, and give
        rise to emergent behaviour, often through the lens of robotics. Some
        of that work appears in my{" "}
        <Link to="/publications">publications</Link>.
      </p>
      <p>
        I've called Canada, China, and the UK home at various points. When I'm
        away from a keyboard, you'll usually find me on a badminton court, a
        hiking trail, or at a board game table.
      </p>
    </article>
  );
}
