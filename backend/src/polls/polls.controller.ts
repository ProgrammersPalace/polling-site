import { Get } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { get } from 'http';
import { Observable, of } from 'rxjs';
import { Poll } from './interfaces/poll.interface';
import { PollsService } from './polls.service';

@Controller('polls')
export class PollsController {

    constructor(private pollsService: PollsService) {}

    @Get()
    getAllPolls(): Observable<Poll[]> {
        return of(this.pollsService.findAll());
    }
}
