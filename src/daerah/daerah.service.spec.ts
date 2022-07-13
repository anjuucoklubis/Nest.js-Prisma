import { Test, TestingModule } from '@nestjs/testing';
import { DaerahService } from './daerah.service';

describe('DaerahService', () => {
  let service: DaerahService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DaerahService],
    }).compile();

    service = module.get<DaerahService>(DaerahService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
