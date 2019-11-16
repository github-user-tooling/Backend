import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Strategy, Profile } from 'passport-github2';

import { environment } from '@env';
import { User } from '@prisma';
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
  ): Promise<User> {
    const user = await this.authService.upsertUser({ login: username, accessToken });
    if (!user) throw new UnauthorizedException();
    return { ...user, accessToken };
  }
}
