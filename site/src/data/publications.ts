export interface Publication {
  slug: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  links?: {
    pdf?: string;
    arxiv?: string;
    poster?: string;
    code?: string;
  };
}

// Display order: newest publication first.
export const publications: Publication[] = [
  {
    slug: "diffusion-co-design",
    title: "Scaling Multi-Agent Environment Co-Design with Diffusion Models",
    authors: "Hao Xiang Li, Michael Amir, Amanda Prorok",
    venue: "ICML",
    year: 2026,
    links: {
      arxiv: "https://arxiv.org/abs/2511.03100",
      poster: "https://icml.cc/virtual/2026/poster/65949",
      code: "https://github.com/MarkHaoxiang/diffusion-co-design",
    },
  },
  {
    slug: "geometric-governance",
    title: "Learning Resilient Elections with Adversarial GNNs",
    authors: "Hao Xiang Li, Yash Shah, Lorenzo Giusti",
    venue: "arXiv preprint",
    year: 2026,
    links: {
      arxiv: "https://arxiv.org/abs/2601.01653",
      code: "https://github.com/MarkHaoxiang/geometric-governance",
    },
  },
  {
    slug: "neural-mmo",
    title:
      "Neural MMO 2.0: A Massively Multi-task Addition to Massively Multi-agent Learning",
    authors:
      "Joseph Suárez, Phillip Isola, Kyoung Whan Choe, David Bloomin, Hao Xiang Li, Nikhil Pinnaparaju, Nishaanth Kanna, Daniel Scott, Ryan Sullivan, Rose S. Shuman, Lucas de Alcântara, Herbie Bradley, Louis Castricato, Kirsty You, Yuhao Jiang, Qimai Li, Jiaxin Chen, Xiaolong Zhu",
    venue: "NeurIPS Datasets and Benchmarks",
    year: 2023,
    links: {
      arxiv: "https://arxiv.org/abs/2311.03736",
      poster: "https://neurips.cc/virtual/2023/poster/73652",
      code: "https://github.com/NeuralMMO/environment",
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
