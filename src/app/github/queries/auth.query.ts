import { identityTag as gql } from 'identity-tag';

export interface IAuth {
  viewer: {
    login: string;
  };
}

export const auth = gql`
  {
    viewer {
      login
    }
  }
`;
