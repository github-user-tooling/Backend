import { Note } from '@prisma';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateNoteDTO implements Omit<Note, 'id'> {
  @IsString()
  @IsNotEmpty()
  public title: string;

  @IsString()
  @IsNotEmpty()
  public body: string;
}
