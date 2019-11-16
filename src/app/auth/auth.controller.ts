import { Controller, UseGuards, Get, Post, Req, Redirect } from '@nestjs/common';
import { Request } from 'express';

import { Public } from 'app/common/decorators';
import { GitHubGuard } from 'app/common/guards';

@Controller('auth')
export class AuthController {
  @Public()
  @UseGuards(GitHubGuard)
  @Get()
  public login() {}

  @Public()
  @UseGuards(GitHubGuard)
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
