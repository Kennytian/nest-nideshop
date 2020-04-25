import { Test, TestingModule } from '@nestjs/testing';
import { CatsService } from './cats.service';
import { DatabaseModule } from '../../shared/database.module';

export const mockRepository = jest.fn(() => ({
  metadata: {
    columns: [],
    relations: [],
  },
}));

describe('CatsService', () => {
  let service: CatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      // 添加 Module
      imports: [DatabaseModule],
      providers: [
        CatsService,
        // {
        //   provide: MongoEntityManager,
        //   useValue: mockRepository,
        // },
      ],
    }).compile();

    service = module.get(CatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // it('should be "Hello cats!"', () => {
  //   expect(service.hello()).toBe('Hello cats!');
  // });

  afterAll(() => {
    service = null;
  });
});
