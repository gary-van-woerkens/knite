interface Props {
  data: Deployment | undefined;
}

const Deployment = ({ data }: Props): JSX.Element => (
  <div>
    <h5>Deployment:</h5>
    <div>State: {data?.state}</div>
    <div>Environment: {data?.environment}</div>
    <div>Last update: {data?.updatedAt}</div>
  </div>
);

export default Deployment;
