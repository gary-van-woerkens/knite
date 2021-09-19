interface Status {
  state: string;
  logUrl: string;
  environmentUrl: string;
}

interface CheckSuite {
  conclusion: string;
  status: string;
  url: string;
}

interface Deployment {
  id: string;
  state: string;
  updatedAt: Date;
  environment: string;
  latestStatus: Status;
}

interface Tag {
  checkSuites: {
    totalCount: number;
    nodes: [CheckSuite];
  };
  deployments: {
    totalCount: number;
    nodes: [Deployment];
  };
}

interface Release {
  id: string;
  name: string;
  tagCommit: Tag;
}

interface Repository {
  id: string;
  name: string;
  visibility: string;
  latestRelease: Release | null;
}

interface Team {
  id: string;
  name: string;
  repositories: {
    totalCount: number;
    nodes: [Repository];
  };
}

interface Organization {
  id: string;
  name: string;
  teams: {
    totalCount: number;
    nodes: [Team];
  };
}
