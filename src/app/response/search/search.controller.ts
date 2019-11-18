import { Controller, Get, Param } from '@nestjs/common';

import { IActiveUser } from 'models';
import { User } from 'common/decorators';
import { GithubService } from 'github/github.service';

@Controller('search')
export class SearchController {
  constructor(private readonly github: GithubService) {}

  @Get('/:query')
  public async getNote(@User() { accessToken }: IActiveUser, @Param('query') query: string) {
    return await this.github.search(accessToken, query);
  }
}
