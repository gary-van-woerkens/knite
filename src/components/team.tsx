import Repository from "./repository";

interface Props {
  team: Team;
}

const Team = ({ team }: Props): JSX.Element => (
  <div className="team">
    <h2>{team.name}</h2>
    <div className="repositories">
      {team.repositories.nodes.map((repository) => (
        <div key={repository.id} className="wrapper">
          <Repository data={repository} />
        </div>
      ))}
    </div>
  </div>
);

export default Team;
