import { Module } from '@nestjs/common';

import { NotesModule } from 'notes/notes.module';
import { GithubService } from './github.service';

@Module({
  imports: [NotesModule],
  providers: [GithubService],
  exports: [GithubService],
})
export class GithubModule {}
