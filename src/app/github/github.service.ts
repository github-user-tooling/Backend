import { Injectable } from '@nestjs/common';
import { request } from 'graphql-request';

import { IDashboard, ICalendarDTO, ITendenciesDTO, IUserDTO } from 'models';
import { formatUser } from 'utils';
import { formatCalendar } from 'utils';
import { calculateLangTendencies, calculateDateTendencies } from 'utils';
import { NotesService } from 'notes/notes.service';

import { ILogon, logon } from './queries';
import { IProfile, IProfileNode, profile } from './queries';
import { ICalendar, calendar } from './queries';
import { IFollowing, IUserNode, following } from './queries';
import { ITendencies, tendencies } from './queries';

import { IFollow, follow } from './mutations';
import { IUnfollow, unfollow } from './mutations';
import { IRepos, IRepo, repos } from './queries';
import { ICommit, ICommits, commits } from './queries';
import { IResult, ISearch, findUser } from './queries';

@Injectable()
export class GithubService {
  constructor(private readonly notes: NotesService) {}

  private endpoint = 'https://api.github.com/graphql';

  private async request<T = any>(accessToken: string, query: string, variables?: object) {
    return await request<T>(`${this.endpoint}?access_token=${accessToken}`, query, variables);
  }

  public async login(accessToken: string): Promise<string> {
    const { viewer } = await this.request<ILogon>(accessToken, logon);
    return viewer.id;
  }

  public async profile(accessToken: string, id: string): Promise<IProfileNode> {
    const { node } = await this.request<IProfile>(accessToken, profile, { id });
    return node;
  }

  public async following(
    accessToken: string,
    id: string,
    isActiveUser: boolean
  ): Promise<IUserDTO[]> {
    const { node } = await this.request<IFollowing>(accessToken, following, { id });
    if (isActiveUser) this.notes.syncFollows(id, node.following.nodes);
    return node.following.nodes.map((user) => formatUser(user));
  }

  public async dashboard(
    accessToken: string,
    id: string,
    isActiveUser: boolean
  ): Promise<IDashboard> {
    return {
      user: await this.profile(accessToken, id),
      following: await this.following(accessToken, id, isActiveUser),
    };
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
    const [mostOftenHour, mostOftenDay] = calculateDateTendencies(node.repositories.commits);
    const mostUsedLang = calculateLangTendencies(node.repositories.langs);
    return {
      mostOftenHour,
      mostOftenDay,
      mostUsedLang,
    };
  }

  public async repos(accessToken: string, id: string): Promise<IRepo[]> {
    const { node } = await this.request<IRepos>(accessToken, repos, { id });
    return node.repositories.nodes;
  }

  public async commits(accessToken: string, id: string): Promise<ICommit[]> {
    const { node } = await this.request<ICommits>(accessToken, commits, { id });
    return node.repositories.nodes.reduce(
      (all, repo) => [...all, ...repo.defaultBranchRef.target.history.nodes],
      new Array<ICommit>()
    );
  }

  public async search(accessToken: string, query: string): Promise<IResult[]> {
    const { search } = await this.request<ISearch>(accessToken, findUser, { query });
    return search.nodes;
  }

  public async follow(
    accessToken: string,
    currentUser: string,
    id: string
  ): Promise<IFollow['followUser']['user']> {
    const { followUser } = await this.request<IFollow>(accessToken, follow, { id });
    if (followUser.user.viewerIsFollowing) await this.notes.createFollow(currentUser, id);
    return followUser.user;
  }

  public async unfollow(
    accessToken: string,
    currentUser: string,
    id: string
  ): Promise<IUnfollow['unfollowUser']['user']> {
    const { unfollowUser } = await this.request<IUnfollow>(accessToken, unfollow, { id });
    if (!unfollowUser.user.viewerIsFollowing) await this.notes.removeFollow(currentUser, id);
    return unfollowUser.user;
  }
}
