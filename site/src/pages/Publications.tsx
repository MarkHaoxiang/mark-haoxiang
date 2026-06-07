import { Link } from "react-router-dom";
import { publications } from "../data/publications";

export default function Publications() {
  return (
    <article>
      <h1>Publications</h1>
      <ul className="publication-list">
        {publications.map((pub) => (
          <li key={pub.slug}>
            <Link to={`/publications/${pub.slug}`} className="publication-title">
              {pub.title}
            </Link>
            <span className="publication-meta">
              {pub.authors} · {pub.venue}, {pub.year}
            </span>
            {pub.links && (
              <span className="publication-links">
                {pub.links.pdf && <a href={pub.links.pdf}>pdf</a>}
                {pub.links.arxiv && <a href={pub.links.arxiv}>arXiv</a>}
                {pub.links.code && <a href={pub.links.code}>code</a>}
              </span>
            )}
          </li>
        ))}
      </ul>
    </article>
  );
}
