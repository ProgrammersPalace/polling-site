import { Get } from '@nestjs/common';
import { Controller } from '@nestjs/common';

@Controller('polls')
export class PollsController {
    @Get()
    getHello(): string {
        return "This is the polls controller!";
    }
}
