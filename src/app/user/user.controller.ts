import { Controller, Get } from '@nestjs/common';

import { User as UserEntity } from 'prisma';
import { User } from 'app/common/decorators';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('profile')
  public getUser(@User() { accessToken, ...user }: UserEntity): Omit<UserEntity, 'accessToken'> {
    return user;
  }
}
