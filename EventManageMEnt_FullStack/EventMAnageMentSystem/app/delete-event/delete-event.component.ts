import { Component } from '@angular/core';
import { EventService } from '../event.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-delete-event',
  templateUrl: './delete-event.component.html',
  styleUrls: ['./delete-event.component.css']
})
export class DeleteEventComponent {
  searchForm!: FormGroup;

  constructor(private eventService: EventService, private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      eventId: ['', [Validators.required, Validators.minLength(1)]]
    });
    
  }


  DeleteEvent(){
    if (this.searchForm.invalid) {
      alert("no")
      return; // If form is invalid, do not proceed with deletion
    }
    const eventId = this.searchForm.get('eventId')?.value;
    this.eventService.deleteEvent(Number(eventId)).subscribe(
      (data)=>{
        alert("fine it ")
        console.log("delete successfully")
        console.log(data)
      },
      (err)=>{
        alert("error find")
        console.log("err",err)
      }
    )

  }
}