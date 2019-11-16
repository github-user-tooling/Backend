import { Injectable } from '@nestjs/common';

import { UserNullablePromise, User } from 'prisma';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  public async findOrCreate({ login, accessToken }: Partial<User>) {
    const user =
      (await this.prisma.client.user({ login })) ||
      (await this.prisma.client.createUser({ login, accessToken }));
    if (user.accessToken !== accessToken)
      await this.prisma.client.updateUser({ where: { login }, data: { accessToken } });

    return { ...user, accessToken };
  }

  public findOne(where: Partial<User>): UserNullablePromise {
    return this.prisma.client.user(where);
  }
}
