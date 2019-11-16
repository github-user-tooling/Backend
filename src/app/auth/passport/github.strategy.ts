import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Strategy, Profile } from 'passport-github2';

import { environment } from '@env';
import { IActiveUser } from 'models';
import { AuthService } from '../auth.service';

@Injectable()
export class GitHubStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      clientID: environment.githubClientID,
      clientSecret: environment.githubClientSecret,
      callbackURL: environment.githubCallbackURL,
    });
  }

  public async validate(
    accessToken: string,
    refreshToken: string,
    { username }: Profile
  ): Promise<IActiveUser> {
    const user = await this.authService.upsertUser({ login: username });
    if (!user) throw new UnauthorizedException();
    return { ...user, accessToken };
  }
}
