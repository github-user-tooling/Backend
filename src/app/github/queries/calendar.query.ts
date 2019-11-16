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
  count: number;
  date: string;
}

export const calendar = gql`
  {
    viewer {
      contributionsCollection {
        contributionCalendar {
          colors
          weeks {
            contributionDays {
              count: contributionCount
              date
            }
          }
        }
      }
    }
  }
`;
