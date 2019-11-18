import { Controller, Get, Put, Delete, Param, Body } from '@nestjs/common';

import { Note } from '@prisma';
import { IActiveUser, CreateNoteDTO } from 'models';
import { User } from 'common/decorators';
import { NotesService } from 'notes/notes.service';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Get('/:note')
  public async getNote(@User() { id }: IActiveUser, @Param('note') noteID: string): Promise<Note> {
    return await this.notesService.getNote(id, noteID);
  }

  @Put('/:note')
  public async updateNote(
    @User() { id }: IActiveUser,
    @Param('note') noteID: string,
    @Body() note: CreateNoteDTO
  ): Promise<Note> {
    return await this.notesService.updateNote(id, noteID, note);
  }

  @Delete('/:note')
  public async removeNote(
    @User() { id }: IActiveUser,
    @Param('note') noteID: string
  ): Promise<Note> {
    return await this.notesService.removeNote(id, noteID);
  }
}
