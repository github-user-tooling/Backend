import { Module } from '@nestjs/common';

import { AuthModule } from 'auth/auth.module';
import { ResponseModule } from 'response/response.module';
import { PrismaModule } from 'prisma/prisma.module';
import { GithubModule } from 'github/github.module';
import { NotesModule } from 'notes/notes.module';

@Module({
  imports: [AuthModule, ResponseModule, PrismaModule, GithubModule, NotesModule],
})
export class AppModule {}
