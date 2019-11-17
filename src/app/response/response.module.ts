import { Module } from '@nestjs/common';

import { GithubModule } from 'github/github.module';
import { PrismaModule } from 'prisma/prisma.module';
import { NotesModule } from 'notes/notes.module';

import { UserController } from './user/user.controller';
import { FollowController } from './follow/follow.controller';
import { NotesController } from './notes/notes.controller';

@Module({
  imports: [PrismaModule, GithubModule, NotesModule],
  controllers: [UserController, NotesController, FollowController],
})
export class ResponseModule {}
