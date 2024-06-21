package com.cts.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.DTO.EventDTO;
import com.cts.IService.IEvent;
import com.cts.entity.Event;
import com.cts.exception.EventNotFoundException;
import com.cts.repo.eventrepo;
@Service
public class Imple implements IEvent {
	
	@Autowired
	eventrepo eventrepo;

	@Override
	public List<Event> getAllEvents() {
		return eventrepo.findAll();
	}

	@Override
	public Event addEvent(Event event) {
		return eventrepo.save(event);
	}

	@Override
	public Event updateEvent(Long eventId,EventDTO eventDTO) {
		Event event= eventrepo.findById(eventId).orElse(null);
		event.setId(eventDTO.getId());
		event.setDate(eventDTO.getDate());
		event.setDescription(eventDTO.getDescription());
		event.setLocation(eventDTO.getLocation());
		event.setRegistrationFee(eventDTO.getRegistrationFee());
		event.setTitle(eventDTO.getTitle());
		event.setMaxAttendees(eventDTO.getMaxAttendees());
		return eventrepo.save(event);
		
		
	}

	@Override
	public String deleteEvent(Long eventId) {
		eventrepo.deleteById(eventId);
		return "deleted succefully";
		
	}

	@Override
	public Optional<Event> getEvent(Long EventId) throws EventNotFoundException{
		if(eventrepo.findById(EventId).orElse(null)==null)throw new EventNotFoundException("Event Not Found");
		return eventrepo.findById(EventId);
	}

	

}
