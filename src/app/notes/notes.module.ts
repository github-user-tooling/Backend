import { Module } from '@nestjs/common';

import { PrismaModule } from 'prisma/prisma.module';
import { NotesService } from './notes.service';

@Module({
  imports: [PrismaModule],
  providers: [NotesService],
  exports: [NotesService],
})
export class NotesModule {}
