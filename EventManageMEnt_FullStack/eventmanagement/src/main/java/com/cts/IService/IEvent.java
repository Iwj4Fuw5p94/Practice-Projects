package com.cts.IService;

import java.util.List;
import java.util.Optional;

import com.cts.DTO.EventDTO;
import com.cts.entity.Event;
import com.cts.exception.EventNotFoundException;

public interface IEvent {
	public List<Event> getAllEvents();
	public Event addEvent(Event event);
	public Event updateEvent(Long eventId,EventDTO eventDTO);
	public String deleteEvent(Long eventId);
	public Optional<Event> getEvent(Long EventId) throws EventNotFoundException;
}
