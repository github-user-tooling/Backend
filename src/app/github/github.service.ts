import { Injectable } from '@nestjs/common';
import { request } from 'graphql-request';

import { ICalendarDTO, ITendenciesDTO } from 'models';
import { mode } from 'utils/math.util';

import { ILogon, logon } from './queries';
import { IProfile, profile } from './queries';
import { ICalendarVariables, ICalendar, IDay, ICalendarPayload, calendar } from './queries';
import { IFollowers, IUser, followers } from './queries';
import { ITendencies, IRepoCommits, IRepoLang, tendencies } from './queries';

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

  public async following(accessToken: string): Promise<IUser[]> {
    const { viewer } = await this.request<IFollowers>(accessToken, followers);
    return viewer.following.nodes;
  }

  public async calendar(accessToken: string, id: string): Promise<ICalendarDTO> {
    const { node } = await this.request<ICalendar>(accessToken, calendar, {
      id,
    } as ICalendarVariables);
    const payload = this.formatCalendar(node.contributionsCollection.contributionCalendar);
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

  public async tendencies(accessToken: string, id: string): Promise<ITendenciesDTO> {
    const { node } = await this.request<ITendencies>(accessToken, tendencies, { id });
    const [mostOftenHour, mostOftenDay] = this.calculateDayTendencies(node.repositories.commits);
    const mostUsedLang = this.calculateLangTendencies(node.repositories.langs);
    return {
      mostOftenHour,
      mostOftenDay,
      mostUsedLang,
    };
  }

  private calculateDayTendencies(commits: IRepoCommits[]): [number, number] {
    const dates = commits.reduce((repos, repo) => {
      if (!repo.defaultBranchRef) return repos;

      const { nodes } = repo.defaultBranchRef.target.history;
      const datesOfRepo = nodes.reduce(
        (result, commit) => [...result, commit.committedDate],
        Array<string>()
      );

      return [...repos, ...datesOfRepo];
    }, Array<string>());

    const formatted = dates.map((date) => new Date(date));
    const hours = formatted.map((date) => date.getHours());
    const daysOfWeek = formatted.map((date) => date.getDay());

    return [mode<number>(hours), mode<number>(daysOfWeek)];
  }

  private calculateLangTendencies(langs: IRepoLang[]): string {
    const result = langs.reduce((all, lang) => {
      if (!lang.primaryLanguage) return all;
      return [...all, lang.primaryLanguage.name];
    }, Array<string>());

    return mode<string>(result);
  }
}
