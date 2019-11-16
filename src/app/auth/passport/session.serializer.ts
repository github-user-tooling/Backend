import { PassportSerializer } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

import { User } from 'prisma';
import { UserService } from 'app/user/user.service';
import { IAuth } from 'app/models/Auth';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(private readonly userService: UserService) {
    super();
  }

  public serializeUser(user: IAuth, done: (err: Error, id?: string) => void) {
    done(null, user.id);
  }

  public async deserializeUser(id: string, done: (err: Error, user?: User) => void) {
    try {
      const user = await this.userService.findOne({ id });
      done(null, user);
    } catch (err) {
      done(err);
    }
  }
}
