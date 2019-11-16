import { Module } from '@nestjs/common';

import { PrismaModule } from 'prisma/prisma.module';
import { GithubModule } from 'github/github.module';

import { UserController } from './user.controller';

@Module({
  imports: [PrismaModule, GithubModule],
  controllers: [UserController],
})
export class UserModule {}
