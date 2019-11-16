import { IDay } from 'github/queries/calendar.query';

export interface ICalendarDTO {
  colors: string[];
  data: IDay[];
}
