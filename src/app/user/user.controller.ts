import { Controller, Get } from '@nestjs/common';

import { User as UserEntity } from '@prisma';
import { User } from 'common/decorators';
import { IProfile } from 'models/Profile';
import { GithubService } from 'github/github.service';

@Controller('user')
export class UserController {
  constructor(private readonly github: GithubService) {}

  @Get('profile')
  public async getUser(@User() { accessToken }: UserEntity): Promise<IProfile> {
    return await this.github.profile(accessToken);
  }
}
