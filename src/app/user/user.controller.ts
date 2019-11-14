import { Controller, Get } from '@nestjs/common';

import { User as UserEntity } from 'prisma';
import { Role, User } from 'app/common/decorators';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('profile')
  public getGloballyProtectedProfile(@User() user: UserEntity): UserEntity {
    return user;
  }

  @Get('/list')
  @Role('Admin')
  public async findAll(): Promise<{ list: UserEntity[]; count: number }> {
    const [list, count] = await this.userService.findAndCount();
    return { list, count };
  }
}
