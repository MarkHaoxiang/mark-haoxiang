export interface Publication {
  slug: string;
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

export const publications: Publication[] = [
  {
    slug: "geometric-governance",
    title: "Learning Robust Voting Rules with Adversarial Graph Neural Networks",
    // TODO: full author list and venue once de-anonymised.
    authors: "Hao Xiang Li, et al.",
    venue: "Preprint",
    year: 2026,
    links: {
      code: "https://github.com/MarkHaoxiang/geometric-governance",
    },
  },
  {
    slug: "diffusion-co-design",
    title: "Scaling Multi-Agent Environment Co-Design with Diffusion Models",
    authors: "Hao Xiang Li, Michael Amir, Amanda Prorok",
    venue: "arXiv preprint",
    year: 2025,
    links: {
      arxiv: "https://arxiv.org/abs/2511.03100",
      code: "https://github.com/MarkHaoxiang/diffusion-co-design",
    },
  },
];

export function getPublication(slug: string): Publication {
  const publication = publications.find((pub) => pub.slug === slug);
  if (!publication) {
    throw new Error(`Unknown publication: ${slug}`);
  }
  return publication;
}
