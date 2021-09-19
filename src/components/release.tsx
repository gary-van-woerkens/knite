import CheckSuite from "./check-suite";
import Deployment from "./deployment";

interface Props {
  data: Release | null;
}

const Release = ({ data }: Props): JSX.Element => (
  <div>
    <div>Latest release: {data?.name}</div>
    <CheckSuite data={data?.tagCommit.checkSuites.nodes[0]} />
    <h4>Deployments ({data?.tagCommit.deployments.totalCount})</h4>
    {data?.tagCommit.deployments.nodes.map((deployment) => (
      <Deployment key={deployment.id} data={deployment} />
    ))}
  </div>
);

export default Release;
