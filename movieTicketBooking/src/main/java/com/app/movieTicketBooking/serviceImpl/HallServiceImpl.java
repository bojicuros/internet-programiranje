package com.app.movieTicketBooking.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.movieTicketBooking.model.Hall;
import com.app.movieTicketBooking.repository.HallRepository;
import com.app.movieTicketBooking.service.HallService;

@Service
public class HallServiceImpl implements HallService{
	
	@Autowired
	private HallRepository repo;

	@Override
	public Hall addCinemaHall(Hall hall) {
		return repo.save(hall);
	}

	@Override
	public Hall updateCinemaHall(Hall hall) {
		return repo.save(hall);
	}

	@Override
	public Hall removeCinemaHall(int hallId) {
		Hall hall = repo.findById(hallId).get();
		repo.delete(hall);
		return hall;
	}

	@Override
	public Hall viewCinemaHall(int hallId) {
		return repo.findById(hallId).orElse(new Hall());
	}

	@Override
	public List<Hall> viewCinemaHallList() {
		return repo.findAll();
	}

}
