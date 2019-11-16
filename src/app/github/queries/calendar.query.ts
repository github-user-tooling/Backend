import { identityTag as gql } from 'identity-tag';

export interface ICalendar {
  viewer: {
    login: string;
  };
}

export const calendar = gql`
  {
    viewer {
      login
    }
  }
`;
