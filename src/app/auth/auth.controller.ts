import { Controller, UseGuards, Redirect, Get, Post, Req, Body } from '@nestjs/common';
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
  @Redirect('./login', 307)
  public async register(@Body() signup: CreateUserDTO) {
    await this.authService.register(signup);
  }

  @Public()
  @UseGuards(LoginGuard)
  @Post('/login')
  public login(@User() user: UserEntity): UserEntity {
    return user;
  }

  @Get('/active')
  public activeSession(): boolean {
    return true;
  }

  @Public()
  @Post('/logout')
  public logout(@Req() req: Request): void {
    req.logout();
  }
}
