import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import type { Publication } from "../data/publications";

interface PublicationPageProps {
  publication: Publication;
  children: ReactNode;
}

export default function PublicationPage({
  publication,
  children,
}: PublicationPageProps) {
  const { title, authors, venue, year, links } = publication;
  return (
    <article className="publication-page">
      <Link to="/publications" className="back-link">
        ← Publications
      </Link>
      <h1>{title}</h1>
      <p className="publication-meta">
        {authors} · {venue}, {year}
      </p>
      {links && (
        <p className="publication-links">
          {links.pdf && <a href={links.pdf}>pdf</a>}
          {links.arxiv && <a href={links.arxiv}>arXiv</a>}
          {links.code && <a href={links.code}>code</a>}
        </p>
      )}
      {children}
    </article>
  );
}
