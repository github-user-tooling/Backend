import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';

import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [NotesService],
  exports: [NotesService],
})
export class NotesModule {}
