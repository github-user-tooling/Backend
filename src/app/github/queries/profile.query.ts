import { identityTag as gql } from 'identity-tag';

export interface IProfile {
  node: IProfileNode;
}

export interface IProfileNode {
  login: string;
  name: string;
}

export const profile = gql`
  query profile($id: ID!) {
    node(id: $id) {
      ... on User {
        login
        name
      }
    }
  }
`;
