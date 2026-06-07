import { Link } from "react-router-dom";

export default function Home() {
  return (
    <article className="home">
      <p>Hi, I'm Mark. I work as a software engineer at Jane Street.</p>
      <p>
        Before that, I studied Computer Science at the University of Cambridge
        (BA and MEng).
      </p>
      <p>
        My interests lie in multi-agent systems and reinforcement learning —
        see my <Link to="/publications">publications</Link>.
      </p>
      <p>Outside of work, I enjoy badminton.</p>
      <p className="muted">Canada · China · UK</p>
    </article>
  );
}
