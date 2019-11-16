import { PassportSerializer } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

import { IActiveUser } from 'models';
import { GithubService } from 'github/github.service';
import { AuthService } from '../auth.service';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(private readonly authService: AuthService, private readonly github: GithubService) {
    super();
  }

  public serializeUser(user: IActiveUser, done: (err: Error, id?: string) => void) {
    done(null, user.accessToken);
  }

  public async deserializeUser(
    accessToken: string,
    done: (err: Error, user?: IActiveUser) => void
  ) {
    try {
      const login = await this.github.login(accessToken);
      const user = await this.authService.findUser({ login });
      done(null, { ...user, accessToken });
    } catch (err) {
      done(err);
    }
  }
}
