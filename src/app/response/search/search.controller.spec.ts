import { Test, TestingModule } from '@nestjs/testing';

import { GithubModule } from 'github/github.module';
import { SearchController } from './search.controller';

describe('Search Controller', () => {
  let controller: SearchController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [GithubModule],
      controllers: [SearchController],
    }).compile();

    controller = module.get<SearchController>(SearchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
