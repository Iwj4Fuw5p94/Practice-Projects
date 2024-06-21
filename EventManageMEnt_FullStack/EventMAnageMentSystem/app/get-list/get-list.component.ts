import { Component } from '@angular/core';
import { EventService } from '../event.service';
import { Event } from '../Model/Event.Model'; // Correctly import the Event interface
@Component({
  selector: 'app-get-list',
  templateUrl: './get-list.component.html',
  styleUrls: ['./get-list.component.css']
})
export class GetListComponent {
  event!: Event[];
  // event: Event[]=[];

  constructor(private eventservice:EventService) { }

  findAll(){
    this.eventservice.getEvents().subscribe(
      (data)=>{
        console.log(data);
        this.event=data
        alert("you can view all")
      }
    )
  }
}
