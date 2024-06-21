import { Component } from '@angular/core';
import { PlayerService } from '../player.service';
import { player } from '../player.model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { first } from 'rxjs';
@Component({
  selector: 'app-createplayer',
  templateUrl: './createplayer.component.html',
  styleUrls: ['./createplayer.component.css']
})
export class CreateplayerComponent {
  playerForm!: FormGroup;
  constructor(private playerservice:PlayerService,private formgroup:FormBuilder){}

  createPlayer(data:player){
    return this.playerservice.createPlayer(data)
    .subscribe(
      (player)=>{console.log("Create Player",player)}
    )
  }
  ngOnInit(){
    this.creatForm();
  }
  creatForm(){
    this.playerForm=this.formgroup.group({
      playerName:['',Validators.required],
      jerseyNumber:['',Validators.required],
      role:['',Validators.required],
      totalMatches:['',Validators.required],
      country:['',Validators.required],
      teamName:['',Validators.required],
      playerDescription:['',Validators.required]

    })
  }

  
  onSubmit(){
    if (this.playerForm.valid) {
      const newPlayer: player = this.playerForm.value;
      this.createPlayer(newPlayer);
      alert("form submitted")
    } else {
      alert("Something went wrong, please refill");
    }
  }
}
