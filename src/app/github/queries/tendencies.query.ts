import { identityTag as gql } from 'identity-tag';

export interface ITendencies {
  node: {
    repositories: {
      commits: IRepoCommits[];
      langs: IRepoLang[];
    };
  };
}

export interface IRepoLang {
  primaryLanguage: {
    name: string;
    color: string;
  };
}

export interface IRepoCommits {
  defaultBranchRef: {
    target: {
      history: {
        nodes: IRepoCommit[];
      };
    };
  };
}

export interface IRepoCommit {
  committedDate: string;
}

export const tendencies = gql`
  query tendencies($id: ID!) {
    node(id: $id) {
      ... on User {
        ...reposList
      }
    }
  }

  fragment reposList on User {
    repositories(first: 40, orderBy: { field: UPDATED_AT, direction: DESC }) {
      commits: nodes {
        ...timeOfCommits
      }
      langs: nodes {
        ...mostUsedLang
      }
    }
  }

  fragment mostUsedLang on Repository {
    primaryLanguage {
      name
      color
    }
  }

  fragment timeOfCommits on Repository {
    defaultBranchRef {
      target {
        ...commits
      }
    }
  }

  fragment commits on GitObject {
    ... on Commit {
      history(first: 40, author: { id: $id }) {
        nodes {
          ...commit
        }
      }
    }
  }

  fragment commit on Commit {
    committedDate
  }
`;
