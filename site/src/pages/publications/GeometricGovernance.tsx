import PublicationPage from "../../components/PublicationPage";
import { getPublication } from "../../data/publications";
import overviewFigure from "../../assets/geometric-governance-overview.svg";
import bipartiteFigure from "../../assets/geometric-governance-bipartite.svg";
import adversarialTrainingFigure from "../../assets/geometric-governance-adversarial-training.png";
import rationalLossFigure from "../../assets/geometric-governance-rational-loss.png";

const bibtex = `@misc{li2026learningresilientelections,
  title={Learning Resilient Elections with Adversarial GNNs},
  author={Hao Xiang Li and Yash Shah and Lorenzo Giusti},
  year={2026},
  eprint={2601.01653},
  archivePrefix={arXiv},
  primaryClass={cs.LG},
  url={https://arxiv.org/abs/2601.01653},
}`;

export default function GeometricGovernance() {
  return (
    <PublicationPage publication={getPublication("geometric-governance")}>
      <div className="publication-figure-row">
        <figure className="publication-figure" style={{ flex: 2.02 }}>
          <img
            src={overviewFigure}
            alt="System overview showing the Graph Election Strategy Network and Graph Election Voting Network trained adversarially"
          />
          <figcaption>
            System overview: the Graph Election Strategy Network (GESN) and
            the Graph Election Voting Network (GEVN), trained adversarially.
          </figcaption>
        </figure>
        <figure className="publication-figure" style={{ flex: 0.87 }}>
          <img
            src={bipartiteFigure}
            alt="An election represented as a bipartite graph between voter and candidate nodes"
          />
          <figcaption>
            Elections are represented as bipartite graphs between voters and
            candidates, generalising to arbitrary numbers of either.
          </figcaption>
        </figure>
      </div>
      <h2>Abstract</h2>
      <p>
        In the face of adverse motives, it is indispensable to achieve a
        consensus. Elections have been the canonical way by which modern
        democracy has operated since the 17th century. Nowadays, they regulate
        markets, provide an engine for modern recommender systems or
        peer-to-peer networks, and remain the main approach to represent
        democracy. However, a desirable universal voting rule that satisfies
        all hypothetical scenarios is still a challenging topic, and the
        design of these systems is at the forefront of mechanism design
        research. Automated mechanism design is a promising approach, and
        recent works have demonstrated that set-invariant architectures are
        uniquely suited to modelling electoral systems. However, various
        concerns prevent the direct application to real-world settings, such
        as robustness to strategic voting. In this paper, we generalise the
        expressive capability of learned voting rules, and combine
        improvements in neural network architecture with adversarial training
        to improve the resilience of voting rules while maximizing social
        welfare. We evaluate the effectiveness of our methods on both
        synthetic and real-world datasets. Our method resolves critical
        limitations of prior work regarding learning voting rules by
        representing elections using bipartite graphs, and learning such
        voting rules using graph neural networks. We believe this opens new
        frontiers for applying machine learning to real-world elections.
      </p>
      <h2>Overview</h2>
      <p>
        Each election is encoded as an <em>Election Bipartite Graph</em>{" "}
        (EBG): voters and candidates form the two sides of the graph, with
        preferences as the edges between them. A graph neural network
        operating on this representation is anonymous over voters and neutral
        over candidates by construction, and accepts any number of either —
        the same learned rule applies to an election of ten voters or ten
        thousand. Two networks are then trained against each other: the Graph
        Election Voting Network (GEVN) implements the voting rule, while the
        Graph Election Strategy Network (GESN) plays the role of strategic
        voters who misreport their preferences to sway the outcome.
        Adversarial training between the two produces rules that maximise
        social welfare while staying resilient to manipulation.
      </p>
      <h2>Results</h2>
      <p>
        The GEVN is expressive enough to learn existing voting rules: trained
        to mimic Plurality, Borda, Copeland, Maximin and Single Transferable
        Vote, it achieves state-of-the-art accuracy, substantially
        outperforming DeepSets models and generalising to elections with more
        voters and candidates than seen in training.
      </p>
      <div className="results-table">
        <table>
          <thead>
            <tr>
              <th colSpan={2}></th>
              <th>GEVN</th>
              <th>
                GEVN <small>(Small)</small>
              </th>
              <th>DeepS.</th>
              <th>
                DeepS. <small>(Small)</small>
              </th>
              <th>
                DeepS. <small>OneHot</small>
              </th>
              <th>
                DeepS. <small>OneHot (Small)</small>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan={2}>Plurality</td>
              <td>Validation</td>
              <td>
                0.99 <small>±0.01</small>
              </td>
              <td>
                <strong>1.00</strong>
              </td>
              <td>
                0.48 <small>±0.05</small>
              </td>
              <td>
                0.25 <small>±0.04</small>
              </td>
              <td>0.83</td>
              <td>
                0.80 <small>±0.01</small>
              </td>
            </tr>
            <tr>
              <td>Test</td>
              <td>
                <strong>0.92</strong> <small>±0.04</small>
              </td>
              <td>
                0.91 <small>±0.03</small>
              </td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td rowSpan={2}>Borda</td>
              <td>Validation</td>
              <td>
                <strong>1.00</strong>
              </td>
              <td>
                <strong>1.00</strong>
              </td>
              <td>
                0.41 <small>±0.05</small>
              </td>
              <td>
                0.38 <small>±0.05</small>
              </td>
              <td>
                0.46 <small>±0.01</small>
              </td>
              <td>
                0.44 <small>±0.01</small>
              </td>
            </tr>
            <tr>
              <td>Test</td>
              <td>
                <strong>1.00</strong>
              </td>
              <td>
                <strong>1.00</strong>
              </td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td rowSpan={2}>Copeland</td>
              <td>Validation</td>
              <td>
                <strong>0.76</strong>
              </td>
              <td>
                <strong>0.76</strong>
              </td>
              <td>
                0.37 <small>±0.04</small>
              </td>
              <td>
                0.41 <small>±0.05</small>
              </td>
              <td>
                0.45 <small>±0.01</small>
              </td>
              <td>
                0.43 <small>±0.02</small>
              </td>
            </tr>
            <tr>
              <td>Test</td>
              <td>
                <strong>0.78</strong>
              </td>
              <td>
                <strong>0.78</strong>
              </td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td rowSpan={2}>Minimax</td>
              <td>Validation</td>
              <td>
                <strong>0.73</strong>
              </td>
              <td>
                <strong>0.73</strong>
              </td>
              <td>
                0.40 <small>±0.04</small>
              </td>
              <td>
                0.45 <small>±0.04</small>
              </td>
              <td>
                0.43 <small>±0.01</small>
              </td>
              <td>
                0.40 <small>±0.01</small>
              </td>
            </tr>
            <tr>
              <td>Test</td>
              <td>
                <strong>0.70</strong>
              </td>
              <td>
                <strong>0.70</strong>
              </td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td rowSpan={2}>STV</td>
              <td>Validation</td>
              <td>
                <strong>0.53</strong>
              </td>
              <td>
                <strong>0.53</strong>
              </td>
              <td>
                0.34 <small>±0.04</small>
              </td>
              <td>
                0.35 <small>±0.04</small>
              </td>
              <td>
                0.42 <small>±0.01</small>
              </td>
              <td>
                0.40 <small>±0.01</small>
              </td>
            </tr>
            <tr>
              <td>Test</td>
              <td>
                <strong>0.49</strong>
              </td>
              <td>
                <strong>0.49</strong>
              </td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
          </tbody>
        </table>
        <p className="table-note">
          Expected accuracy learning classical voting rules, with 95%
          confidence intervals across 10 repeats (omitted where below 0.01).
          Small models use a 100k parameter budget, otherwise 1M. DeepSets
          cannot extrapolate to a larger number of candidates, so its test
          results are omitted.
        </p>
      </div>
      <p>
        The GESN models strategic voters by minimising a <em>rational
        loss</em>: each voter adjusts their submitted preferences to maximise
        their own utility against the current voting rule. Trained against
        this adversary, robust rules hold welfare close to the honest-voting
        level, while a conventionally trained rule collapses once voters act
        strategically.
      </p>
      <figure className="publication-figure">
        <img
          src={rationalLossFigure}
          alt="Social welfare and GESN rational loss during adversarial training under the utilitarian objective"
        />
        <figcaption>
          Adversarial training under the utilitarian objective: robust rules
          keep welfare near the honest-voting baseline (left) as the GESN
          drives down its rational loss (right).
        </figcaption>
      </figure>
      <p>
        The resilience generalises: across synthetic preference distributions
        (Dirichlet and spatial models), real-world preference data such as
        MovieLens, and utilitarian, Nash and Rawlsian welfare objectives,
        adversarially trained rules consistently outperform standard ones
        under strategic voting.
      </p>
      <figure className="publication-figure">
        <img
          src={adversarialTrainingFigure}
          alt="Validation welfare and strategy loss curves over adversarial training across Dirichlet, Movielens and spatial vote distributions"
        />
        <figcaption>
          Adversarial training improves resilience to strategic voting across
          synthetic and real-world vote distributions.
        </figcaption>
      </figure>
      <h2>Citation</h2>
      <pre className="bibtex">{bibtex}</pre>
    </PublicationPage>
  );
}
