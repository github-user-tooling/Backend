import { Injectable } from '@nestjs/common';
import { request } from 'graphql-request';

import { ILogon, logon } from './queries';
import { IProfile, profile } from './queries';
import { ICalendar, ICalendarPayload, IDay, calendar } from './queries';
import { ICalendarDTO } from '../models/CalendarDTO';

@Injectable()
export class GithubService {
  private endpoint = 'https://api.github.com/graphql';

  private async request<T = any>(accessToken: string, query: string, variables?: object) {
    return await request<T>(`${this.endpoint}?access_token=${accessToken}`, query, variables);
  }

  public async login(accessToken: string): Promise<string> {
    const { viewer } = await this.request<ILogon>(accessToken, logon);
    return viewer.id;
  }

  public async profile(accessToken: string): Promise<IProfile['viewer']> {
    const { viewer } = await this.request<IProfile>(accessToken, profile);
    return viewer;
  }

  public async calendar(accessToken: string): Promise<ICalendarDTO> {
    const { viewer } = await this.request<ICalendar>(accessToken, calendar);
    const payload = this.formatCalendar(viewer.contributionsCollection.contributionCalendar);
    return payload;
  }

  private formatCalendar(contributionCalendar: ICalendarPayload): ICalendarDTO {
    return {
      colors: contributionCalendar.colors,
      data: contributionCalendar.weeks.reduce(
        (days, week) => days.concat(...week.contributionDays),
        new Array<IDay>()
      ),
    };
  }
}
