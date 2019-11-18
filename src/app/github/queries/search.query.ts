import { identityTag as gql } from 'identity-tag';

export interface ISearch {
  search: {
    nodes: IResult[];
  };
}

export interface IResult {
  id: string;
  login: string;
  url: string;
  avatarUrl: string;
  name: string;
}

export const findUser = gql`
  query search($query: String!) {
    search(query: $query, type: USER, first: 10) {
      nodes {
        ... on User {
          id
          login
          url
          avatarUrl
          name
        }
      }
    }
  }
`;
