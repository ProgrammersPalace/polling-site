import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Poll } from './poll';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  private pollUrl = 'http://localhost:3000/polls/';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Poll[]> {
    return this.http.get<Poll[]>(`${this.pollUrl}`);
  }

}
