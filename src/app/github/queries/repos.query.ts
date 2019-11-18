import { identityTag as gql } from 'identity-tag';

export interface IRepos {
  node: {
    repositories: {
      nodes: IRepo[];
    };
  };
}

export interface IRepo {
  name: string;
  description: string;
  url: string;
}

export const repos = gql`
  query repos($id: ID!) {
    node(id: $id) {
      ... on User {
        repositories(first: 100, orderBy: { field: UPDATED_AT, direction: DESC }) {
          nodes {
            name
            description
            url
          }
        }
      }
    }
  }
`;
