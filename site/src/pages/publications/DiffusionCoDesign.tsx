import PublicationPage from "../../components/PublicationPage";
import { getPublication } from "../../data/publications";
import architectureFigure from "../../assets/diffusion-co-design-architecture.jpg";
import cornerTrainingFigure from "../../assets/diffusion-co-design-corner-training.png";
import distillAblationFigure from "../../assets/diffusion-co-design-distill-ablation.png";
import wfcrlScalingFigure from "../../assets/diffusion-co-design-wfcrl-scaling.png";
import pugAblationFigure from "../../assets/diffusion-co-design-pug-ablation.png";

const bibtex = `@inproceedings{li2026scalingmultiagentenvironmentcodesign,
  title={Scaling Multi-Agent Environment Co-Design with Diffusion Models},
  author={Hao Xiang Li and Michael Amir and Amanda Prorok},
  booktitle={Forty-third International Conference on Machine Learning},
  year={2026},
  url={https://icml.cc/virtual/2026/poster/65949},
}`;

export default function DiffusionCoDesign() {
  return (
    <PublicationPage publication={getPublication("diffusion-co-design")}>
      <figure className="publication-figure">
        <img
          src={architectureFigure}
          alt="The DiCoDe architecture: agent policies and critics trained on trajectory data, with critic knowledge distilled into an environment critic that guides a diffusion generator through a reverse diffusion process"
        />
        <figcaption>
          The DiCoDe architecture. A reinforcement learning critic is
          distilled into an environment critic, which guides the diffusion
          generator towards reward-maximising environment designs.
        </figcaption>
      </figure>
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
      <h2>Overview</h2>
      <p>
        DiCoDe alternates between training agents with reinforcement learning
        and redesigning their environment with a guided diffusion model. The
        diffusion model is trained on feasible environment layouts, then
        steered at sampling time by Projected Universal Guidance (PUG): each
        denoising step follows the gradient of an environment critic, while a
        projection step keeps the design inside hard constraints such as
        spatial separation between obstacles. The environment critic itself
        is distilled from the agents' reinforcement learning critic, so the
        designer receives a dense learning signal that tracks the evolving
        policies, rather than the sparse and quickly outdated signal of full
        simulation rollouts.
      </p>
      <h2>Results</h2>
      <figure className="publication-figure">
        <img
          src={cornerTrainingFigure}
          alt="Corner scenario training curves flanked by a randomly sampled warehouse, a DiCoDe-designed warehouse, and heatmaps of shelf placement"
        />
        <figcaption>
          Training on the warehouse Corner scenario: from randomly sampled
          environments (left) to DiCoDe-designed environments (right), with
          heatmaps of shelf placement across 100 designs. DiCoDe learns to
          place shelves near goals of the same colour while keeping
          navigation channels free.
        </figcaption>
      </figure>
      <p>
        We evaluated DiCoDe on three challenging co-design benchmarks:
        warehouse automation, multi-agent pathfinding, and wind farm
        optimisation. Across all three domains, DiCoDe consistently produces
        better environment–policy pairs than state-of-the-art co-design
        methods, while scaling to high-dimensional design spaces where prior
        approaches collapse. In the warehouse setting, it achieves 39% higher
        rewards than the strongest baseline while using 66% fewer simulation
        samples.
      </p>
      <div className="results-table">
        <table>
          <thead>
            <tr>
              <th rowSpan={2}>Scenario</th>
              <th colSpan={2}>DiCoDe</th>
              <th colSpan={3}>Baselines</th>
              <th colSpan={4}>Ablations</th>
            </tr>
            <tr>
              <th>Θ</th>
              <th>
                Θ<sub>Coord</sub>
              </th>
              <th>RL*</th>
              <th>Fixed</th>
              <th>DR</th>
              <th>Desc.</th>
              <th>Sampl.</th>
              <th>ADD</th>
              <th>MC</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Corner</td>
              <td>
                <strong>12.1</strong> <small>±0.2</small>
              </td>
              <td>
                <em>11.7</em> <small>±0.7</small>
              </td>
              <td>
                8.7 <small>±0.4</small>
              </td>
              <td>
                9.6 <small>±0.6</small>
              </td>
              <td>
                6.9 <small>±0.1</small>
              </td>
              <td>
                9.3 <small>±0.3</small>
              </td>
              <td>
                8.2 <small>±0.2</small>
              </td>
              <td>
                9.1 <small>±0.4</small>
              </td>
              <td>
                10.9 <small>±0.5</small>
              </td>
            </tr>
            <tr>
              <td>WFCRL2</td>
              <td>
                <strong>490</strong> <small>±0</small>
              </td>
              <td>—</td>
              <td>
                <em>485</em> <small>±5</small>
              </td>
              <td>
                442 <small>±28</small>
              </td>
              <td>
                443 <small>±2</small>
              </td>
              <td>
                489 <small>±1</small>
              </td>
              <td>
                489 <small>±0</small>
              </td>
              <td>—</td>
              <td>
                <strong>490</strong> <small>±1</small>
              </td>
            </tr>
            <tr>
              <td>WFCRL4</td>
              <td>
                <strong>430</strong> <small>±2</small>
              </td>
              <td>—</td>
              <td>
                <em>404</em> <small>±6</small>
              </td>
              <td>
                387 <small>±10</small>
              </td>
              <td>
                382 <small>±0</small>
              </td>
              <td>
                419 <small>±1</small>
              </td>
              <td>
                420 <small>±1</small>
              </td>
              <td>—</td>
              <td>
                <strong>430</strong> <small>±4</small>
              </td>
            </tr>
            <tr>
              <td>WFCRL8</td>
              <td>
                <strong>370</strong> <small>±5</small>
              </td>
              <td>—</td>
              <td>
                323 <small>±3</small>
              </td>
              <td>
                <em>325</em> <small>±8</small>
              </td>
              <td>
                314 <small>±1</small>
              </td>
              <td>
                350 <small>±2</small>
              </td>
              <td>
                329 <small>±1</small>
              </td>
              <td>—</td>
              <td>
                360 <small>±6</small>
              </td>
            </tr>
            <tr>
              <td>WFCRL16</td>
              <td>
                <strong>282</strong> <small>±1</small>
              </td>
              <td>—</td>
              <td>
                254 <small>±4</small>
              </td>
              <td>
                <em>256</em> <small>±6</small>
              </td>
              <td>
                252 <small>±1</small>
              </td>
              <td>
                280 <small>±1</small>
              </td>
              <td>
                264 <small>±0</small>
              </td>
              <td>—</td>
              <td>
                279 <small>±2</small>
              </td>
            </tr>
            <tr>
              <td>ONav</td>
              <td>
                <strong>2.29</strong> <small>±0.08</small>
              </td>
              <td>—</td>
              <td>
                1.92 <small>±0.09</small>
              </td>
              <td>
                <em>2.24</em> <small>±0.07</small>
              </td>
              <td>
                1.80 <small>±0.01</small>
              </td>
              <td>
                <strong>2.29</strong> <small>±0.04</small>
              </td>
              <td>
                2.06 <small>±0.04</small>
              </td>
              <td>—</td>
              <td>
                2.15 <small>±0.11</small>
              </td>
            </tr>
          </tbody>
        </table>
        <p className="table-note">
          Expected episode rewards at the end of training, with 95% confidence
          intervals across 9 random seeds. Bold marks the best method, italics
          the best of the remaining methods. *RL is reported at a fixed number
          of policy updates, and needs 2.5–4× more samples per update.
        </p>
      </div>
      <p>
        The advantage grows with scale. On wind farm optimisation, DiCoDe
        maintains a large improvement over domain randomisation as the number
        of turbines increases, while a reinforcement learning designer's
        advantage shrinks towards zero.
      </p>
      <figure className="publication-figure publication-figure--narrow">
        <img
          src={wfcrlScalingFigure}
          alt="Bar chart of reward relative to domain randomisation on WFCRL for 2 to 16 turbines, comparing DiCoDe, an RL designer and fixed layouts"
        />
        <figcaption>
          Reward relative to domain randomisation as wind farms scale from 2
          to 16 turbines.
        </figcaption>
      </figure>
      <p>
        Ablations confirm that both core components matter: PUG discovers
        higher-value environments than universal guidance, gradient descent,
        random sampling or domain randomisation, and critic distillation
        provides a more stable and accurate training signal than Monte-Carlo
        rollout returns, adapting earlier as agent policies shift.
      </p>
      <div className="publication-figure-row">
        <figure className="publication-figure" style={{ flex: 2.0 }}>
          <img
            src={pugAblationFigure}
            alt="Box plot comparing critic value of environments found by PUG, universal guidance, gradient descent, sampling and domain randomisation"
          />
          <figcaption>
            Projected Universal Guidance finds higher-value environment
            designs than alternative search strategies.
          </figcaption>
        </figure>
        <figure className="publication-figure" style={{ flex: 1.85 }}>
          <img
            src={distillAblationFigure}
            alt="Critic training target and loss curves comparing critic distillation against sampled trajectory returns"
          />
          <figcaption>
            Distilled critic targets are more stable than sampled trajectory
            returns, and adapt earlier to policy shift.
          </figcaption>
        </figure>
      </div>
      <h2>Citation</h2>
      <pre className="bibtex">{bibtex}</pre>
    </PublicationPage>
  );
}
