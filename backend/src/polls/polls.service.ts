import { Injectable } from '@nestjs/common';
import { Poll } from './interfaces/poll.interface';

@Injectable()
export class PollsService {
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

    findAll(): Poll[] {
        return this.polls;
    }
}
