import PublicationPage from "../../components/PublicationPage";
import { getPublication } from "../../data/publications";

const bibtex = `@misc{li2025scalingmultiagentenvironmentcodesign,
  title={Scaling Multi-Agent Environment Co-Design with Diffusion Models},
  author={Hao Xiang Li and Michael Amir and Amanda Prorok},
  year={2025},
  eprint={2511.03100},
  archivePrefix={arXiv},
  primaryClass={cs.LG},
  url={https://arxiv.org/abs/2511.03100},
}`;

export default function DiffusionCoDesign() {
  return (
    <PublicationPage publication={getPublication("diffusion-co-design")}>
      <h2>Abstract</h2>
      <p>
        The <em>agent-environment co-design</em> paradigm jointly optimises
        agent policies and environment configurations in search of improved
        system performance, with application domains ranging from warehouse
        logistics to windfarm management. However, current co-design methods
        struggle to scale: they collapse under high-dimensional environment
        design spaces and suffer from sample inefficiency when addressing
        moving targets inherent to joint optimisation. We address these
        challenges with <strong>Diffusion Co-Design (DiCoDe)</strong>, a
        scalable and sample-efficient co-design framework. DiCoDe introduces
        Projected Universal Guidance (PUG), a sampling technique that explores
        a distribution of reward-maximising environments while satisfying hard
        constraints, and a critic distillation mechanism that shares knowledge
        from the reinforcement learning critic so the guided diffusion model
        adapts to evolving agent policies. Validated on challenging
        co-design benchmarks including warehouse automation, multi-agent
        pathfinding and wind farm optimisation, DiCoDe consistently exceeds
        the state-of-the-art — for example, achieving 39% higher rewards in
        the warehouse setting with 66% fewer simulation samples.
      </p>
      <h2>Citation</h2>
      <pre className="bibtex">{bibtex}</pre>
    </PublicationPage>
  );
}
