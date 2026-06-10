import PublicationPage from "../../components/PublicationPage";
import { getPublication } from "../../data/publications";

const bibtex = `@inproceedings{suarez2023neuralmmo,
  title={Neural MMO 2.0: A Massively Multi-task Addition to Massively Multi-agent Learning},
  author={Joseph Su{\\'a}rez and Phillip Isola and Kyoung Whan Choe and David Bloomin and Hao Xiang Li and Nikhil Pinnaparaju and Nishaanth Kanna and Daniel Scott and Ryan Sullivan and Rose S. Shuman and Lucas de Alc{\\^a}ntara and Herbie Bradley and Louis Castricato and Kirsty You and Yuhao Jiang and Qimai Li and Jiaxin Chen and Xiaolong Zhu},
  booktitle={Advances in Neural Information Processing Systems 36 (NeurIPS 2023), Datasets and Benchmarks Track},
  year={2023},
  url={https://arxiv.org/abs/2311.03736},
}`;

export default function NeuralMmo() {
  return (
    <PublicationPage publication={getPublication("neural-mmo")}>
      <h2>Abstract</h2>
      <p>
        Neural MMO 2.0 is a massively multi-agent environment for
        reinforcement learning research. The key feature of this new version
        is a flexible task system that allows users to define a broad range
        of objectives and reward signals. We challenge researchers to train
        agents capable of generalizing to tasks, maps, and opponents never
        seen during training. Maps are procedurally generated with 128 agents
        in the standard setting and 1–1024 supported overall. Version 2.0 is
        a complete rewrite of its predecessor with three-fold improved
        performance and compatibility with CleanRL. We release the platform
        as free and open-source software with comprehensive documentation
        available at neuralmmo.github.io and an active community Discord. To
        spark initial research on this new platform, we are concurrently
        running a competition at NeurIPS 2023.
      </p>
      <h2>Citation</h2>
      <pre className="bibtex">{bibtex}</pre>
    </PublicationPage>
  );
}
