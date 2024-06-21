package com.cts.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cts.entity.Event;

public interface eventrepo extends JpaRepository<Event, Long> {

}
