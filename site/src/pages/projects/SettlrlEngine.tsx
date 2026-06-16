export default function SettlrlEngine() {
  return (
    <article>
      <h1>Settlrl Engine</h1>
      <p>
        A hex-tile trading game engine written in Python and JAX, designed for
        reinforcement learning research. The project includes a reference
        implementation for correctness testing, a collection of bot policies,
        and a web renderer for playing against agents or replaying recorded
        games.
      </p>
      <p>
        {/* Served by the settlrl-render service behind this domain's reverse proxy. */}
        <a href="/settlrl">Live demo</a> ·{" "}
        <a
          href="https://github.com/MarkHaoxiang/settlrl-engine"
          target="_blank"
          rel="noreferrer"
        >
          Source on GitHub
        </a>
      </p>
    </article>
  );
}
