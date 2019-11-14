import { PassportSerializer } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

import { User } from 'prisma';
import { UserService } from 'app/user/user.service';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(private readonly userService: UserService) {
    super();
  }

  public serializeUser(user: User, done: (err: Error, id?: string) => void): void {
    done(null, user.id);
  }

  public deserializeUser(id: string, done: (err: Error, user?: User) => void): void {
    this.userService
      .findOne({ id })
      .then((user) => done(null, user))
      .catch((err) => done(err));
  }
}
