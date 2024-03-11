import { Module } from '@nestjs/common';
import { DynamicService } from './dynamic.service';
import { DynamicController } from './dynamic.controller';

@Module({
  providers: [DynamicService],
  controllers: [DynamicController],
})
export class DynamicModule {}