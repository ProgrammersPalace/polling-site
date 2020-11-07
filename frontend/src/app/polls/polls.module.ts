import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PollsListComponent } from './polls-list/polls-list.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [PollsListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    PollsListComponent, //TODO: make app component use routing and don't export this. 
  ]
})
export class PollsModule { }
