import { Injectable } from '@nestjs/common';

import { User } from '@prisma';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  public async upsertUser(payload: Omit<User, 'id'>) {
    const user = await this.prisma.client.upsertUser({
      create: payload,
      update: payload,
      where: { githubID: payload.githubID },
    });
    return { ...user };
  }

  public findUser(where: Partial<User>): Promise<User | null> {
    return this.prisma.client.user(where);
  }
}
