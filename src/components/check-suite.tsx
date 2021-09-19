interface Props {
  data: CheckSuite | undefined;
}

const CheckSuite = ({ data }: Props): JSX.Element => (
  <div>
    <h4>Check Suite:</h4>
    <div>Status: {data?.status}</div>
    <div>Conclusion: {data?.conclusion}</div>
    <a href={data?.url}>link</a>
  </div>
);

export default CheckSuite;
