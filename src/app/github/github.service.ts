import { Injectable } from '@nestjs/common';
import { request } from 'graphql-request';

import { IProfile } from 'models/Profile';
import { profile } from './queries/profile.query';

@Injectable()
export class GithubService {
  private endpoint = 'https://api.github.com/graphql';

  private async request<T = any>(accessToken: string, query: string, variables?: object) {
    const data = await request<T>(`${this.endpoint}?access_token=${accessToken}`, query, variables);
    return data;
  }

  public async profile(accessToken: string): Promise<IProfile> {
    const response = await this.request<IProfile>(accessToken, profile);
    return response;
  }
}
