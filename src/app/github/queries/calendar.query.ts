import { identityTag as gql } from 'identity-tag';

export interface ICalendar {
  node: {
    contributionsCollection: {
      contributionCalendar: ICalendarPayload;
    };
  };
}

export interface ICalendarPayload {
  weeks: IWeek[];
}

export interface IWeek {
  contributionDays: IDay[];
}

export interface IDay {
  date: string;
  count: number;
}

export const calendar = gql`
  query calendar($id: ID!) {
    node(id: $id) {
      ... on User {
        contributionsCollection {
          contributionCalendar {
            weeks {
              contributionDays {
                date: date
                count: contributionCount
              }
            }
          }
        }
      }
    }
  }
`;
