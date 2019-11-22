import { Test, TestingModule } from '@nestjs/testing';

import { PrismaModule } from 'prisma/prisma.module';
import { PrismaService } from 'prisma/prisma.service';
import { NotesService } from './notes.service';

describe('NotesService', () => {
  let service: NotesService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [NotesService],
    }).compile();

    service = module.get<NotesService>(NotesService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  afterEach(async () => {
    await prisma.client.deleteManyFollows({ githubID: 'Plan3t' });
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createFollow()', () => {
    it('should create a follow', async () => {
      await service.createFollow('wSedlacek', 'Plan3t');
      const follows = await prisma.client.follows();
      const plan3t = follows.find((follow) => follow.githubID === 'Plan3t');
      expect(plan3t).toBeTruthy();
    });

    it('should fail if a follow already exist', async () => {
      await service.createFollow('wSedlacek', 'Plan3t');
      const promise = service.createFollow('wSedlacek', 'Plan3t');
      await expect(promise).rejects.toBeTruthy();
    });
  });

  describe('removeFollow()', () => {
    it('should remove follow', async () => {
      const { id } = await prisma.client.createFollow({
        githubID: 'Plan3t',
        followed: { connect: { githubID: 'wSedlacek' } },
      });

      await service.removeFollow('wSedlacek', 'Plan3t');
      const plan3t = await prisma.client.follow({ id });
      expect(plan3t).toBeFalsy();
    });

    it('should fail if follow does not exist', async () => {
      const promise = service.removeFollow('wSedlacek', 'Plan3t');
      await expect(promise).rejects.toBeTruthy();
    });
  });
});
