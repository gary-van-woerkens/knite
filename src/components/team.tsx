import Repository from "./repository";

interface Props {
  team: Team;
}

const Team = ({ team }: Props): JSX.Element => (
  <div>
    <h2>{team.name}</h2>
    <div>
      {team.repositories.nodes.map((repository) => (
        <Repository key={repository.id} data={repository} />
      ))}
    </div>
  </div>
);

export default Team;
