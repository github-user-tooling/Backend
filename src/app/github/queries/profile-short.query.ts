import { identityTag as gql } from 'identity-tag';

export interface IProfileShort {
  node: IProfileShortNode;
}

export interface IProfileShortNode {
  id: string;
  login: string;
  name: string;
}

export const profileShort = gql`
  query profile($id: ID!) {
    node(id: $id) {
      ... on User {
        id
        login
        name
      }
    }
  }
`;
