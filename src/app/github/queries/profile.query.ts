import { identityTag as gql } from 'identity-tag';

export interface IProfile {
  node: IProfileNode;
}

export interface IProfileNode {
  login: string;
  name: string;
  avatarUrl: string;
  bio: string;
  location: string;
  url: string;
  repos: { count: number };
}

export const profile = gql`
  query profile($id: ID!) {
    node(id: $id) {
      ... on User {
        login
        name
        avatarUrl
        bio
        location
        url
        repos: repositories {
          count: totalCount
        }
      }
    }
  }
`;
