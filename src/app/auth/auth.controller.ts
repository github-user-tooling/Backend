import { Controller, UseGuards, Get, Post, Req, Redirect } from '@nestjs/common';
import { Request } from 'express';

import { Public } from 'common/decorators';
import { GithubGuard } from 'common/guards';

@Controller('auth')
export class AuthController {
  @Public()
  @UseGuards(GithubGuard)
  @Get()
  public login() {}

  @Public()
  @UseGuards(GithubGuard)
  @Get('/callback')
  @Redirect('./active')
  public callback() {}

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
