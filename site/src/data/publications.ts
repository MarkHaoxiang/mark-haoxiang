export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: number;
  links?: {
    pdf?: string;
    arxiv?: string;
    code?: string;
  };
}

// TODO: fill in real publications.
export const publications: Publication[] = [
  {
    title: "Placeholder publication title",
    authors: "Mark Haoxiang, et al.",
    venue: "Venue",
    year: 2026,
    links: {
      arxiv: "https://arxiv.org/",
    },
  },
];
