import { Component, OnInit } from '@angular/core';
import { Event } from '../../model/getevent/event.model';
import { EventService } from 'src/app/service/eventservice/event.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [EventService],
})
export class HomeComponent implements OnInit {
  
  constructor(public eventService: EventService) { }

  ngOnInit() {
    
    this.refreshEventList();
  }
  refreshEventList() {
    this.eventService.getEventList().subscribe((res) => {
      this.eventService.event = res as Event[];
      console.log(res);
    });
  }

}
