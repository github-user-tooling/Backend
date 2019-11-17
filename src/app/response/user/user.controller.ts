import { Controller, Get, Param } from '@nestjs/common';

import { IActiveUser, ICalendarDTO, ITendenciesDTO } from 'models';
import { IProfile, IUser } from 'github/queries';
import { User } from 'common/decorators';
import { GithubService } from 'github/github.service';

@Controller('user')
export class UserController {
  constructor(private readonly github: GithubService) {}

  @Get('/profile')
  public async getProfile(
    @User() { accessToken, githubID }: IActiveUser
  ): Promise<IProfile['node']> {
    return await this.github.profile(accessToken, githubID);
  }

  @Get('/:id/profile')
  public async getSpecificProfile(
    @User() { accessToken }: IActiveUser,
    @Param('id') id: string
  ): Promise<IProfile['node']> {
    return await this.github.profile(accessToken, id);
  }

  @Get('/calendar')
  public async getCalendar(@User() { accessToken, githubID }: IActiveUser): Promise<ICalendarDTO> {
    return await this.github.calendar(accessToken, githubID);
  }

  @Get('/:id/calendar')
  public async getSpecificCalendar(
    @User() { accessToken }: IActiveUser,
    @Param('id') id: string
  ): Promise<ICalendarDTO> {
    return await this.github.calendar(accessToken, id);
  }

  @Get('/following')
  public async getFollowing(@User() { accessToken, githubID }: IActiveUser): Promise<IUser[]> {
    return await this.github.following(accessToken, githubID, true);
  }

  @Get('/:id/following')
  public async getSpecificFollowing(
    @User() { accessToken }: IActiveUser,
    @Param('id') id: string
  ): Promise<IUser[]> {
    return await this.github.following(accessToken, id, false);
  }

  @Get('/tendencies')
  public async getTendencies(
    @User() { accessToken, githubID }: IActiveUser
  ): Promise<ITendenciesDTO> {
    return await this.github.tendencies(accessToken, githubID);
  }

  @Get('/:id/tendencies')
  public async getSpecificTendencies(
    @User() { accessToken }: IActiveUser,
    @Param('id') id: string
  ): Promise<ITendenciesDTO> {
    return await this.github.tendencies(accessToken, id);
  }
}
