import { Test, TestingModule } from '@nestjs/testing';
import { CommerceController } from './commerce.controller';

describe('Commerce Controller', () => {
  let controller: CommerceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommerceController],
    }).compile();

    controller = module.get<CommerceController>(CommerceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
