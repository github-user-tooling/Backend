import { identityTag as gql } from 'identity-tag';

export interface IProfile {
  node: IProfileNode;
}

export interface IProfileNode {
  login: string;
  avatarUrl: string;
  bio: string;
  location: string;
  name: string;
  url: string;

  repos: {
    count: number;
  };

  commits: {
    count: number;
  };
}

export const profile = gql`
  query profile($id: ID!) {
    node(id: $id) {
      ... on User {
        login
        avatarUrl
        bio
        location
        name
        url
        repos: repositories {
          count: totalCount
        }
        commits: contributionsCollection {
          count: totalCommitContributions
        }
      }
    }
  }
`;
