import { Test, TestingModule } from '@nestjs/testing';

import { environment } from '@env';
import { NotesModule } from 'notes/notes.module';
import { GithubService } from './github.service';

describe('GithubService', () => {
  let service: GithubService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [NotesModule],
      providers: [GithubService],
    }).compile();

    service = module.get<GithubService>(GithubService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('login()', () => {
    it('should provide ID', async () => {
      const id = await service.login(environment.testingToken);
      expect(id).toBeTruthy();
      expect(typeof id).toBe('string');
    });
  });

  describe('dashboard()', () => {
    it('should provide user and following', async () => {
      const id = 'MDQ6VXNlcjM2MjQwOTg=';
      const dashboard = await service.dashboard(environment.testingToken, id, false);
      expect(dashboard.user).toBeTruthy();
      expect(dashboard.following).toBeTruthy();
    });
  });
});
