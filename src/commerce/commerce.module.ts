import { Module } from '@nestjs/common';
import { CommerceController } from './commerce.controller';
import { CommerceService } from './commerce.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CommerceSchema } from './schemas/commerce.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Commerce', schema: CommerceSchema }]),
  ],
  controllers: [CommerceController],
  providers: [CommerceService],
})
export class CommerceModule {}
