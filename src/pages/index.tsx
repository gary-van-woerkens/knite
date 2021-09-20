import Team from "../components/team";
import useGithub from "../services/github";

function Page() {
  const organization: Organization = useGithub() || {};
  const { teams: { nodes: teams = [] } = {} } = organization;
  console.log("data", teams);
  return (
    <div>
      <h1>{organization.name}</h1>
      <div className="teams">
        {teams.map((team) => (
          <div key={team.id} className="wrapper">
            <Team team={team} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
