import Team from "../components/team";
import useGithub from "../services/github";

function Page() {
  const organization: Organization = useGithub() || {};
  const { teams: { nodes: teams = [] } = {} } = organization;
  console.log("data", teams);
  return (
    <div>
      <h1>{organization.name}</h1>
      {teams.map((team) => (
        <Team key={team.id} team={team} />
      ))}
    </div>
  );
}

export default Page;
