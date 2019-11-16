import { Injectable } from '@nestjs/common';

import { User } from '@prisma';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  public async upsertUser({ login, accessToken }: Partial<User>) {
    const user =
      (await this.prisma.client.user({ login })) ||
      (await this.prisma.client.createUser({ login, accessToken }));
    if (user.accessToken !== accessToken)
      await this.prisma.client.updateUser({ where: { login }, data: { accessToken } });

    return { ...user, accessToken };
  }

  public findUser(where: Partial<User>): Promise<User | null> {
    return this.prisma.client.user(where);
  }
}
