import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Event } from '../../model/getevent/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  selectedEmployee: Event;
  event: Event[];
  readonly baseURL = 'https://script.google.com/macros/s/AKfycbzp1brXop99zVGaqSehBVQlO0c5s8b-0fKj4UzPUxx01DkoJWuF/exec?request';
  constructor(private http : HttpClient) { }

  getEventList(){
    return this.http.get(this.baseURL + "=getEvent");
  }
}
