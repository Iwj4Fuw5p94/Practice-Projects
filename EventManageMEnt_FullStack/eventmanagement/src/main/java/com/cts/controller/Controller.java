package com.cts.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.DTO.EventDTO;
import com.cts.IService.IEvent;
import com.cts.entity.Event;
import com.cts.exception.EventNotFoundException;

@RestController
@RequestMapping("/api/")
@CrossOrigin("*")
public class Controller {
	
	@Autowired
	IEvent ievent;
	
	@PostMapping("add")
	public Event addEvent(@RequestBody Event event) {
		return ievent.addEvent(event);
	}
	
	@PutMapping("update{eventId}")
	public Event updateEvent(@RequestBody EventDTO event,@PathVariable Long eventId){
		return ievent.updateEvent(eventId,event);
	}
	
	@GetMapping("getAll")
	public List<Event> getAll() {
		return ievent.getAllEvents();
	}
	
	@GetMapping("getById{eventId}")
	public Optional<Event> getByID(@PathVariable long eventId) throws EventNotFoundException {
		return ievent.getEvent(eventId);
	}
	
	@DeleteMapping("delete{eventId}")
	public String delete(@PathVariable Long eventId){
		ievent.deleteEvent(eventId);
		return "deleted successfully";
		
	}


}
