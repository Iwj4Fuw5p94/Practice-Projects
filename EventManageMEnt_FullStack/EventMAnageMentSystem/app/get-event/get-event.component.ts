import { Component } from '@angular/core';
import { EventService } from '../event.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Event } from '../Model/Event.Model';

@Component({
  selector: 'app-get-event',
  templateUrl: './get-event.component.html',
  styleUrls: ['./get-event.component.css']
})
export class GetEventComponent {
  searchForm!: FormGroup;
  event!: Event;

  constructor(private eventService: EventService, private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      id: ['', Validators.required]
    })
  }

  findid() {
  
      let eventId = this.searchForm.get('id')?.value;
      this.eventService.getEvent(eventId).subscribe(
        (data) => {
          alert("success")
          console.log(data);
          this.event = data;
        }
      )
    
  }
}
    // let eventId = this.searchForm.get('id')?.value;
    // this.eventervice.getEvent(eventId).subscribe(
    //   (data)=>{
    //     alert("submitted")
    //     console.log(data);
    //   }
    // )
  





