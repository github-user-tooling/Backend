import { identityTag as gql } from 'identity-tag';

export interface ILogon {
  viewer: {
    id: string;
  };
}

export const logon = gql`
  {
    viewer {
      id
    }
  }
`;
