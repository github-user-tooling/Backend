import { Injectable } from '@nestjs/common';
import { request } from 'graphql-request';

import { ILogon, logon } from './queries';
import { IProfile, profile } from './queries';

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
}
