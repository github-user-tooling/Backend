import { identityTag as gql } from 'identity-tag';

export interface IFollowing {
  node: {
    following: {
      nodes: IUser[];
    };
  };
}

export interface IUser {
  id: string;
  login: string;
  url: string;
  avatarUrl: string;
  name: string;
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
          }
        }
      }
    }
  }
`;
