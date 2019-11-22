import { Test, TestingModule } from '@nestjs/testing';

import { PrismaModule } from 'prisma/prisma.module';
import { PrismaService } from 'prisma/prisma.service';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [AuthService],
    }).compile();

    service = module.get<AuthService>(AuthService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  afterEach(async () => {
    await prisma.client.deleteManyUsers({ githubID: 'Cyndergate' });
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findUser()', () => {
    it('should return falsy on bad request', async () => {
      const user = await service.findUser({ githubID: 'BAD' });
      expect(user).toBeFalsy();
    });

    it('should return a user with valid User ID', async () => {
      const user = await service.findUser({ githubID: 'wSedlacek' });
      expect(user.id).toBeTruthy();
    });
  });

  describe('upsertUser()', () => {
    it('should return a user with an ID', async () => {
      const user = await service.upsertUser({ githubID: 'Cyndergate' });
      expect(typeof user.id).toBe('string');
      expect(user.id).toBeTruthy();
    });

    it('should be available to the Prisma Service', async () => {
      await service.upsertUser({ githubID: 'Cyndergate' });
      const user = await prisma.client.user({ githubID: 'Cyndergate' });
      expect(user).toBeTruthy();
    });
  });
});
