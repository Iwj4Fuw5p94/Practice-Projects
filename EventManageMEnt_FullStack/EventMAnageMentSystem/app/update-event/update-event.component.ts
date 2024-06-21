import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventService } from '../event.service';
import { Event } from '../Model/Event.Model';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent {
  event!: Event;
  bookForm!: FormGroup;

  constructor(private bookservice: EventService, private formBuilder: FormBuilder) {
    this.bookForm = this.formBuilder.group({
      id: [0, Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
      location: ['', Validators.required],
      maxAttendees: ['', Validators.required],
      registrationFee: [0, Validators.required]
    });
  }



  updatebook(){


    if(this.bookForm.valid){
      this.event={
        id:this.bookForm.value.id,
        title: this.bookForm.value.title,
        description: this.bookForm.value.description,
        date: this.bookForm.value.data,
        location: this.bookForm.value.location,
        maxAttendees: this.bookForm.value.maxAttendees,
        registrationFee: this.bookForm.value.registrationFee
      }
      this.bookservice.updateEvent(this.event.id,this.event).subscribe(
        (data)=>{
          alert("done")
          console.log("everthing is fine");
          console.log(this.event)
        },
        (err)=>{
          alert("not done")
        }
      )
    }

  }
}
