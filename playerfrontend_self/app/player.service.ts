import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { player } from './player.model';
@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http:HttpClient){
   }
   baseUrl:String='http://localhost:8181/api/players/';

  getallAllPlayer():Observable<player[]>{
    return this.http.get<player[]>(this.baseUrl + 'getall');
   }
   getplayer(country:string):Observable<number>{
    return this.http.get<number>(this.baseUrl+'totalmatchesbycountry/'+`${country}`);
   }
   deletePlayer(playerId:number):Observable<player>{
    return this.http.delete<player>(this.baseUrl+`${playerId}`);
   }
   createPlayer(player:player):Observable<player>{
    return this.http.post<player>(this.baseUrl+'create',player);
   }
}
