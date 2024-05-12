import { Module } from '@nestjs/common';
import { SampleService } from './sample.service';
import { SampleController } from './sample.controller';
import { SampleGateway } from './gateway/sample.gateway';

@Module({
  controllers: [SampleController],
  providers: [SampleService, SampleGateway],
})
export class SampleModule {}
