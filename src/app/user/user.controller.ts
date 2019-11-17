import { Controller, Get } from '@nestjs/common';

import { IActiveUser, ICalendarDTO, ITendenciesDTO } from 'models';
import { IProfile, IUser } from 'github/queries';
import { User } from 'common/decorators';
import { GithubService } from 'github/github.service';

@Controller('user')
export class UserController {
  constructor(private readonly github: GithubService) {}

  @Get('profile')
  public async getProfile(@User() { accessToken }: IActiveUser): Promise<IProfile['viewer']> {
    return await this.github.profile(accessToken);
  }

  @Get('calendar')
  public async getCalendar(@User() { accessToken, githubID }: IActiveUser): Promise<ICalendarDTO> {
    return await this.github.calendar(accessToken, githubID);
  }

  @Get('following')
  public async getFollowing(@User() { accessToken }: IActiveUser): Promise<IUser[]> {
    return await this.github.following(accessToken);
  }

  @Get('tendencies')
  public async getTendencies(
    @User() { accessToken, githubID }: IActiveUser
  ): Promise<ITendenciesDTO> {
    return await this.github.tendencies(accessToken, githubID);
  }
}
