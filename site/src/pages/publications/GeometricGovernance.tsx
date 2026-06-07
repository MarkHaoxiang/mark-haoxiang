import PublicationPage from "../../components/PublicationPage";
import { getPublication } from "../../data/publications";

export default function GeometricGovernance() {
  return (
    <PublicationPage publication={getPublication("geometric-governance")}>
      <h2>Abstract</h2>
      <p>
        Automated mechanism design is a promising approach to discovering
        desirable voting rules, and recent work has demonstrated that
        set-invariant architectures are uniquely suited to modelling electoral
        systems. However, various concerns prevent direct application to
        real-world settings — in particular, robustness to strategic voting.
        We generalise the expressive capability of learned voting rules by
        representing elections as bipartite graphs, and combine improvements
        in graph neural network architecture with adversarial training to
        learn voting rules that maximise social welfare while remaining
        robust to strategic voters. The learned rules enforce voter
        anonymity, candidate neutrality and further voting criteria such as
        monotonicity, and generalise to an arbitrary number of voters and
        candidates. We evaluate the effectiveness of our method on both
        synthetic and real-world election datasets.
      </p>
    </PublicationPage>
  );
}
