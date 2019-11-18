import { identityTag as gql } from 'identity-tag';

export interface IFollowing {
  node: {
    following: {
      nodes: IUserNode[];
    };
  };
}

export interface IUserNode {
  id: string;
  login: string;
  url: string;
  avatarUrl: string;
  name: string;
  followers: { count: number };
  following: { count: number };
  repos: { count: number };
  commits: { count: number };
}

export const following = gql`
  query following($id: ID!) {
    node(id: $id) {
      ... on User {
        following(first: 20) {
          nodes {
            id
            login
            url
            avatarUrl
            name
            followers {
              count: totalCount
            }
            following {
              count: totalCount
            }
            repos: repositories {
              count: totalCount
            }
            commits: contributionsCollection {
              count: totalCommitContributions
            }
          }
        }
      }
    }
  }
`;
