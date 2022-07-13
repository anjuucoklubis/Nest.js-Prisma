import { Test, TestingModule } from '@nestjs/testing';
import { DaerahController } from './daerah.controller';

describe('DaerahController', () => {
  let controller: DaerahController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DaerahController],
    }).compile();

    controller = module.get<DaerahController>(DaerahController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
