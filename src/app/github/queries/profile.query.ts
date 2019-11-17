import { identityTag as gql } from 'identity-tag';

export interface IProfile {
  node: {
    login: string;
    avatarUrl: string;
    bio: string;
    location: string;
    name: string;
    url: string;
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
      }
    }
  }
`;
