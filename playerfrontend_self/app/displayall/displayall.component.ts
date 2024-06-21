import { Component } from '@angular/core';
import { PlayerService } from '../player.service';
import { player } from '../player.model';

@Component({
  selector: 'app-displayall',
  templateUrl: './displayall.component.html',
  styleUrls: ['./displayall.component.css']
})
export class DisplayallComponent {
  player:player[]=[];
  
  constructor(private playerservice:PlayerService){}

  ngOnInit(): void {
    this.getAllPlayer();
  }

  getAllPlayer(){
    this.playerservice.getallAllPlayer().subscribe(
      (player)=>this.player=player
    )
  }
}
