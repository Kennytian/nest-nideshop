import { Test } from '@nestjs/testing';
import { DatabaseModule } from '../../shared/database.module';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

describe('Cats Controller', () => {
  let controller: CatsController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [DatabaseModule],
      controllers: [CatsController],
      providers: [CatsService],
    }).compile();

    controller = moduleRef.get<CatsController>(CatsController);
  });

  describe('cats', () => {
    it('Hello', async () => {
      const result = await controller.hello();
      expect(result).toEqual('Hello cats!');
    });
  });
});
