import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Poll } from './entities/poll.entity';

@Injectable()
export class PollsService {
    /*
    private polls: Poll[] = [
        {
            questionAsked: "Is this a poll?",
            dateCreated: new Date(),
        },
        {
            questionAsked: "Is mayonnaise an instrument?",
            dateCreated: new Date(),
        },
        {
            questionAsked: "Why though?",
            dateCreated: new Date(),
        }
    ];
    */

    constructor(
        @InjectRepository(Poll) private pollRepository: Repository<Poll>
    ) {}

    async findAll(): Promise<Poll[]> {
        return await this.pollRepository.find();
    }

}
