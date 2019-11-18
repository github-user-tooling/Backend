import { Module } from '@nestjs/common';

import { GithubModule } from 'github/github.module';
import { NotesModule } from 'notes/notes.module';
import { PrismaModule } from 'prisma/prisma.module';

import { FollowController } from './follow/follow.controller';
import { NotesController } from './notes/notes.controller';
import { SearchController } from './search/search.controller';
import { UserController } from './user/user.controller';

@Module({
  imports: [GithubModule, NotesModule, PrismaModule],
  controllers: [FollowController, NotesController, SearchController, UserController],
})
export class ResponseModule {}
