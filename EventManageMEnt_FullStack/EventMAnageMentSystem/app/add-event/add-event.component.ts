import { Component } from '@angular/core';
import { EventService } from '../event.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Event } from '../Model/Event.Model'; // Correctly import the Event interface


@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent {

  event!: Event;
  searchform!: FormGroup;

  constructor(private eventservice:EventService,private formbuilder:FormBuilder){
    this.searchform = this.formbuilder.group({
      id:[''],
      title:[''],
      description:[''],
      date:[''],
      location:[''],
      maxAttendees:[''],
      registrationFee:['']
    })
  }
  createForm(){
    const formsValue=this.searchform.value
    return this.eventservice.addEvent(formsValue).subscribe(
      (data)=>{
        alert("done")

        this.event=data
        console.log(data)
      }
    )
    console.log(this.event)

  }

}
