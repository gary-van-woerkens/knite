import Release from "./release";

interface Props {
  data: Repository;
}

const Repository = ({ data }: Props): JSX.Element => (
  <div className="repository">
    <h3>{data.name}</h3>
    <Release data={data.latestRelease} />
  </div>
);

export default Repository;
