export default function CatanEngine() {
  return (
    <article>
      <h1>Catan Engine</h1>
      <p>
        A Settlers of Catan game engine written in Python and JAX, designed for
        reinforcement learning research. The project includes a reference
        implementation for correctness testing, a collection of bot policies,
        and a web renderer for playing against agents or replaying recorded
        games.
      </p>
      <p>
        {/* Served by the catan-render service behind this domain's reverse proxy. */}
        <a href="/catan">Live demo</a> ·{" "}
        <a
          href="https://github.com/MarkHaoxiang/catan-engine"
          target="_blank"
          rel="noreferrer"
        >
          Source on GitHub
        </a>
      </p>
    </article>
  );
}
