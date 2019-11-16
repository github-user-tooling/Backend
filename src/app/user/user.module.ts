import { Module } from '@nestjs/common';

import { PrismaModule } from 'prisma/prisma.module';
import { GithubModule } from 'github/github.module';

import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [PrismaModule, GithubModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
