package com.app.movieTicketBooking.service;

import java.util.List;

import com.app.movieTicketBooking.model.Hall;

public interface HallService {
	
	Hall addCinemaHall(Hall hall);

	Hall updateCinemaHall(Hall hall);

	Hall removeCinemaHall(int hallId);

	Hall viewCinemaHall(int hallId);

	List<Hall> viewCinemaHallList();

}
