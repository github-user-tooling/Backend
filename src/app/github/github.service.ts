import { Injectable } from '@nestjs/common';
import { request } from 'graphql-request';

import { IAuth, auth } from './queries';
import { IProfile, profile } from './queries';

@Injectable()
export class GithubService {
  private endpoint = 'https://api.github.com/graphql';

  private async request<T = any>(accessToken: string, query: string, variables?: object) {
    const data = await request<T>(`${this.endpoint}?access_token=${accessToken}`, query, variables);
    return data;
  }

  public async login(accessToken: string): Promise<string> {
    const {
      viewer: { login },
    } = await this.request<IAuth>(accessToken, auth);

    return login;
  }

  public async profile(accessToken: string): Promise<IProfile['viewer']> {
    const { viewer } = await this.request<IProfile>(accessToken, profile);
    return viewer;
  }
}
