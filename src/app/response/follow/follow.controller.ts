import { Controller, Post, Param } from '@nestjs/common';

import { IActiveUser } from 'models';
import { IFollow, IUnfollow } from 'github/mutations';
import { User } from 'common/decorators';
import { GithubService } from 'github/github.service';

@Controller()
export class FollowController {
  constructor(private readonly github: GithubService) {}
  @Post('/follow/:id')
  public async followUser(
    @User() { accessToken, githubID }: IActiveUser,
    @Param('id') id: string
  ): Promise<IFollow['followUser']['user']> {
    return await this.github.follow(accessToken, githubID, id);
  }

  @Post('/unfollow/:id')
  public async unfollowUser(
    @User() { accessToken, githubID }: IActiveUser,
    @Param('id') id: string
  ): Promise<IUnfollow['unfollowUser']['user']> {
    return await this.github.unfollow(accessToken, githubID, id);
  }
}
