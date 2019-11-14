import { Controller, Get, Post, Req, UseGuards, Body } from '@nestjs/common';
import { Request } from 'express';

import { User as UserEntity } from 'prisma';
import { CreateUserDTO } from 'app/models/create-user.dto';
import { Public, User } from 'app/common/decorators';
import { LoginGuard } from 'app/common/guards';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('/register')
  public async register(@Body() signup: CreateUserDTO) {
    const user = await this.authService.register(signup);
    return user;
  }

  @Public()
  @UseGuards(LoginGuard)
  @Post('/login')
  public login(@User() user: UserEntity): UserEntity {
    return user;
  }

  @Public()
  @Get('/logout')
  public logout(@Req() req: Request): void {
    req.logout();
  }
}
