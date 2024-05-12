import { Injectable } from '@nestjs/common';
import { CreateSampleDto } from './dto/create-sample.dto';
import { UpdateSampleDto } from './dto/update-sample.dto';
import { SampleGateway } from './gateway/sample.gateway';

@Injectable()
export class SampleService {
  constructor(private readonly sampleGateway: SampleGateway) {}

  create(createSampleDto: CreateSampleDto) {
    this.sampleGateway.justEmitting();
    return 'This action adds a new sample';
  }

  findAll() {
    return `This action returns all sample`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sample`;
  }

  update(id: number, updateSampleDto: UpdateSampleDto) {
    return `This action updates a #${id} sample`;
  }

  remove(id: number) {
    return `This action removes a #${id} sample`;
  }
}
