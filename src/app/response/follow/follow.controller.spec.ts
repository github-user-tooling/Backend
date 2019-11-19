import { Test, TestingModule } from '@nestjs/testing';

import { GithubModule } from 'github/github.module';
import { FollowController } from './follow.controller';

describe('Follow Controller', () => {
  let controller: FollowController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [GithubModule],
      controllers: [FollowController],
    }).compile();

    controller = module.get<FollowController>(FollowController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
