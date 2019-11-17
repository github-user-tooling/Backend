import { Module } from '@nestjs/common';

import { PrismaModule } from 'prisma/prisma.module';
import { GithubModule } from 'github/github.module';

import { UserController } from './user/user.controller';
import { NotesController } from './notes/notes.controller';
import { FollowController } from './follow/follow.controller';

@Module({
  imports: [PrismaModule, GithubModule],
  controllers: [UserController, NotesController, FollowController],
})
export class ResponseModule {}
