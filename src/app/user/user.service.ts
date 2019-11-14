import { Injectable } from '@nestjs/common';

import { UserNullablePromise, User } from 'prisma';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDTO } from '../models';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  public createUser(signup: CreateUserDTO): Promise<User> {
    return this.prisma.client.createUser({ role: 'User', ...signup });
  }

  public findOne(where: Partial<User>): UserNullablePromise {
    return this.prisma.client.user(where);
  }

  public async findAndCount(): Promise<[User[], number]> {
    const list = await this.prisma.client.users();
    return [list, list.length];
  }
}
