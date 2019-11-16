import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Strategy, Profile } from 'passport-github2';

import { environment } from 'environment';
import { IAuth } from 'app/models';
import { UserService } from 'app/user/user.service';

@Injectable()
export class GitHubStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
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
  ): Promise<IAuth> {
    const user = await this.userService.findOrCreate({ login: username, accessToken });
    if (!user) throw new UnauthorizedException();
    return { ...user, accessToken };
  }
}
