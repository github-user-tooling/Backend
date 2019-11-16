import { Controller, Get } from '@nestjs/common';

import { IActiveUser } from 'models';
import { User } from 'common/decorators';
import { GithubService } from 'github/github.service';
import { IProfile } from 'github/queries';
import { ICalendarDTO } from '../models/CalendarDTO';

@Controller('user')
export class UserController {
  constructor(private readonly github: GithubService) {}

  @Get('profile')
  public async getProfile(@User() { accessToken }: IActiveUser): Promise<IProfile['viewer']> {
    return await this.github.profile(accessToken);
  }

  @Get('calendar')
  public async getCalendar(@User() { accessToken, id }: IActiveUser): Promise<ICalendarDTO> {
    return await this.github.calendar(accessToken, id);
  }
}
