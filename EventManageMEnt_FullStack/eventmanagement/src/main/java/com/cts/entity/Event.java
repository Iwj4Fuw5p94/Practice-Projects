package com.cts.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;
    private LocalDateTime date;
    private String location;
    private int maxAttendees;
    private double registrationFee;
    public Event() {
	}
	public Event(Long id, String title, String description, LocalDateTime date, String location, int maxAttendees,
			double registrationFee) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.date = date;
		this.location = location;
		this.maxAttendees = maxAttendees;
		this.registrationFee = registrationFee;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public LocalDateTime getDate() {
		return date;
	}
	public void setDate(LocalDateTime date) {
		this.date = date;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public int getMaxAttendees() {
		return maxAttendees;
	}
	public void setMaxAttendees(int maxAttendees) {
		this.maxAttendees = maxAttendees;
	}
	public double getRegistrationFee() {
		return registrationFee;
	}
	public void setRegistrationFee(double registrationFee) {
		this.registrationFee = registrationFee;
	}
	@Override
	public String toString() {
		return "Event [id=" + id + ", title=" + title + ", description=" + description + ", date=" + date
				+ ", location=" + location + ", maxAttendees=" + maxAttendees + ", registrationFee=" + registrationFee
				+ "]";
	}
    
}
