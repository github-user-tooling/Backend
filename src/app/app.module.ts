import { Module } from '@nestjs/common';

import { AuthModule } from 'auth/auth.module';
import { GithubModule } from 'github/github.module';
import { NotesModule } from 'notes/notes.module';
import { PrismaModule } from 'prisma/prisma.module';
import { ResponseModule } from 'response/response.module';

@Module({
  imports: [AuthModule, GithubModule, NotesModule, PrismaModule, ResponseModule],
})
export class AppModule {}
