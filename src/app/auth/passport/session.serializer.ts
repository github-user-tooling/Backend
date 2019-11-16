import { PassportSerializer } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

import { User } from '@prisma';
import { AuthService } from '../auth.service';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(private readonly authService: AuthService) {
    super();
  }

  public serializeUser(user: User, done: (err: Error, id?: string) => void) {
    done(null, user.id);
  }

  public async deserializeUser(id: string, done: (err: Error, user?: User) => void) {
    try {
      const user = await this.authService.findUser({ id });
      done(null, user);
    } catch (err) {
      done(err);
    }
  }
}
