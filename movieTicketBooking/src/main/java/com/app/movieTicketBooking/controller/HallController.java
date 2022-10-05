package com.app.movieTicketBooking.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.movieTicketBooking.model.Hall;
import com.app.movieTicketBooking.service.HallService;

@RestController
@CrossOrigin(origins = "*")
public class HallController {
	@Autowired(required = false)
	private HallService service;

	@GetMapping("/hall/{id}")
	public Hall getCinemaHallById(@PathVariable("id") Integer id) {
		return service.viewCinemaHall(id);
	}

	@GetMapping("/halls")
	public List<Hall> getAllCinemaHalls() {
		return service.viewCinemaHallList();
	}

	@PostMapping("/hall")
	public Hall addCinemaHall(@RequestBody Hall hall) {
		return service.addCinemaHall(hall);
	}

	@PutMapping("/hall")
	public Hall updateCinemaHall(@RequestBody Hall hall) {
		return service.updateCinemaHall(hall);
	}

	@DeleteMapping("/hall/{id}")
	public Hall deleteCinemaHall(@PathVariable("id") Integer id) {
		return service.removeCinemaHall(id);
	}

}
