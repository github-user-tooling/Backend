import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Strategy } from 'passport-github2';

import { GithubService } from 'github/github.service';

import { environment } from '@env';
import { IActiveUser } from 'models';
import { AuthService } from '../auth.service';

@Injectable()
export class GitHubStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService, private readonly github: GithubService) {
    super({
      clientID: environment.githubClientID,
      clientSecret: environment.githubClientSecret,
      callbackURL: environment.githubCallbackURL,
    });
  }

  public async validate(accessToken: string): Promise<IActiveUser> {
    const githubID = await this.github.login(accessToken);
    const user = await this.authService.upsertUser({ githubID });
    if (!user) throw new UnauthorizedException();
    return { ...user, accessToken };
  }
}
