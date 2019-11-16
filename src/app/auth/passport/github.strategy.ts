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
    { id }: Profile
  ): Promise<IActiveUser> {
    const user = await this.authService.upsertUser({ githubID: id });
    if (!user) throw new UnauthorizedException();
    return { ...user, accessToken };
  }
}
