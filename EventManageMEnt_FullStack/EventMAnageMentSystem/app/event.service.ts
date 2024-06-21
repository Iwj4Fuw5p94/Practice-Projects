import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from './Model/Event.Model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  baseURL:string="http://localhost:8986/api/";
  constructor(private http:HttpClient) { 

  }

  addEvent(event:Event):Observable<Event>{
    return this.http.post<Event>(this.baseURL+"add",event);
  }

  deleteEvent(eventId:number):Observable<void>{
    return this.http.delete<void>(this.baseURL+"delete"+eventId);
  }

  getEvents():Observable<Event[]>{
    return this.http.get<Event[]>(this.baseURL+"getAll");
  }
  
  getEvent(id:number):Observable<Event>{
    return this.http.get<Event>(this.baseURL+"getById"+id);
  }

  updateEvent(eventId:number,event:Event):Observable<Event>{
    return this.http.put<Event>(this.baseURL+"update"+eventId,event);
  }
  
}
