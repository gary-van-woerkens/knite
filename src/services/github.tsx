import useSWR from "swr";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:8080/v1/graphql",
  cache: new InMemoryCache(),
});

const query = gql`
  query getOrganizationData {
    organization(login: "SocialGouv") {
      id
      name
      teams(first: 100, rootTeamsOnly: true, privacy: VISIBLE) {
        totalCount
        nodes {
          id
          name
          repositories(first: 10) {
            totalCount
            nodes {
              id
              name
              visibility
              latestRelease {
                id
                name
                tagCommit {
                  checkSuites(last: 1) {
                    totalCount
                    nodes {
                      status
                      conclusion
                      url
                    }
                  }
                  deployments(first: 10) {
                    totalCount
                    nodes {
                      id
                      state
                      environment
                      updatedAt
                      latestStatus {
                        state
                        logUrl
                        environmentUrl
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const fetcher = () => client.query({ query }).then((result) => result);

function useGithub() {
  const { data, error } = useSWR("/github", fetcher);
  if (error) throw new Error(error);
  console.log("SWR", data);
  return data?.data.organization;
}

export default useGithub;
