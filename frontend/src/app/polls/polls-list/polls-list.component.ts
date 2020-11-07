import { Component, OnInit } from '@angular/core';
import { Poll } from '../poll';
import { PollService } from '../poll.service';

@Component({
  selector: 'app-polls-list',
  templateUrl: './polls-list.component.html',
  styleUrls: ['./polls-list.component.scss']
})
export class PollsListComponent implements OnInit {

  private polls: Poll[];

  constructor(private pollService: PollService) { }

  ngOnInit(): void {
    this.pollService.findAll().subscribe(pollResponse => this.polls = pollResponse);
  }

}
