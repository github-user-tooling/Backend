import { Test, TestingModule } from '@nestjs/testing';

import { NotesModule } from 'notes/notes.module';
import { NotesController } from './notes.controller';

describe('Notes Controller', () => {
  let controller: NotesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [NotesModule],
      controllers: [NotesController],
    }).compile();

    controller = module.get<NotesController>(NotesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
