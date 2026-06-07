import { Link } from "react-router-dom";

export default function Home() {
  return (
    <article className="home">
      <p className="lede">Currently at Jane Street.</p>
      <p>
        Previously, I completed my BA and MEng in Computer Science at the
        University of Cambridge.
      </p>
      <p>
        I am interested in multi-agent systems and reinforcement learning —
        see my <Link to="/publications">publications</Link>.
      </p>
      <p>Outside of work, I enjoy badminton.</p>
      <p className="muted">Canada · China · UK</p>
    </article>
  );
}
