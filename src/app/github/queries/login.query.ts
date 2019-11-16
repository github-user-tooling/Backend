import { identityTag as gql } from 'identity-tag';

export interface ILogon {
  viewer: {
    login: string;
  };
}

export const logon = gql`
  {
    viewer {
      login
    }
  }
`;
