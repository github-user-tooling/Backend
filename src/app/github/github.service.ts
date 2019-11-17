import { Injectable } from '@nestjs/common';
import { request } from 'graphql-request';

import { ICalendarDTO, ITendenciesDTO } from 'models';
import { formatCalendar, calculateLangTendencies, calculateDayTendencies } from 'utils';

import { ILogon, logon } from './queries';
import { IProfile, profile } from './queries';
import { ICalendar, calendar } from './queries';
import { IFollowing, IUser, following } from './queries';
import { ITendencies, tendencies } from './queries';

import { IFollow, follow } from './mutations';
import { IUnfollow, unfollow } from './mutations';

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

  public async profile(accessToken: string, id: string): Promise<IProfile['node']> {
    const { node } = await this.request<IProfile>(accessToken, profile, { id });
    return node;
  }

  public async following(accessToken: string, id: string): Promise<IUser[]> {
    const { node } = await this.request<IFollowing>(accessToken, following, { id });
    return node.following.nodes;
  }

  public async calendar(accessToken: string, id: string): Promise<ICalendarDTO> {
    const { node } = await this.request<ICalendar>(accessToken, calendar, {
      id,
    });
    const payload = formatCalendar(node.contributionsCollection.contributionCalendar);
    return payload;
  }

  public async tendencies(accessToken: string, id: string): Promise<ITendenciesDTO> {
    const { node } = await this.request<ITendencies>(accessToken, tendencies, { id });
    const [mostOftenHour, mostOftenDay] = calculateDayTendencies(node.repositories.commits);
    const mostUsedLang = calculateLangTendencies(node.repositories.langs);
    return {
      mostOftenHour,
      mostOftenDay,
      mostUsedLang,
    };
  }

  public async follow(accessToken: string, id: string): Promise<IFollow['followUser']['user']> {
    const { followUser } = await this.request<IFollow>(accessToken, follow, { id });
    return followUser.user;
  }

  public async unfollow(
    accessToken: string,
    id: string
  ): Promise<IUnfollow['unfollowUser']['user']> {
    const { unfollowUser } = await this.request<IUnfollow>(accessToken, unfollow, { id });
    return unfollowUser.user;
  }
}
