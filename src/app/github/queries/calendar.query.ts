import { identityTag as gql } from 'identity-tag';

export interface ICalendar {
  viewer: {
    contributionsCollection: {
      contributionCalendar: ICalendarPayload;
    };
  };
}

export interface ICalendarPayload {
  colors: string[];
  weeks: IWeek[];
}

export interface IWeek {
  contributionDays: IDay[];
}

export interface IDay {
  key: string;
  data: number;
}

export interface ICalendarVariables {
  id: string;
}

export const calendar = gql`
  query calendar($id: ID!) {
    node(id: $id) {
      ... on User {
        contributionsCollection {
          contributionCalendar {
            colors
            weeks {
              contributionDays {
                key: date
                data: contributionCount
              }
            }
          }
        }
      }
    }
  }
`;
