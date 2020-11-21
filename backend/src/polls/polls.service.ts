import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Poll } from './entities/poll.entity';

@Injectable()
export class PollsService {

    constructor(
        @InjectRepository(Poll) private pollRepository: Repository<Poll>
    ) {}

    async findAll(): Promise<Poll[]> {
        return await this.pollRepository.find();
    }

}
