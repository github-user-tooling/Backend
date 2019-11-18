import { identityTag as gql } from 'identity-tag';

export interface ICommits {
  node: {
    repositories: {
      nodes: IRepoMaster[];
    };
  };
}

export interface IRepoMaster {
  defaultBranchRef: {
    target: {
      history: {
        nodes: ICommit[];
      };
    };
  };
}

export interface ICommit {
  id: string;
  messageHeadline: string;
  messageBody: string;
  url: string;
}

export const commits = gql`
  query commits($id: ID!) {
    node(id: $id) {
      ... on User {
        repositories(first: 40, orderBy: { field: UPDATED_AT, direction: DESC }) {
          nodes {
            defaultBranchRef {
              target {
                ...commits
              }
            }
          }
        }
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
    id
    messageHeadline
    messageBody
    url
  }
`;
