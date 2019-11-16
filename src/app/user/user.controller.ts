import { Controller, Get } from '@nestjs/common';

import { IActiveUser } from 'models';
import { User } from 'common/decorators';
import { GithubService } from 'github/github.service';
import { IProfile } from 'github/queries';

@Controller('user')
export class UserController {
  constructor(private readonly github: GithubService) {}

  @Get('profile')
  public async getUser(@User() { accessToken }: IActiveUser): Promise<IProfile['viewer']> {
    return await this.github.profile(accessToken);
  }
}
