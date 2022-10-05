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

import com.app.movieTicketBooking.model.Projection;
import com.app.movieTicketBooking.service.ProjectionService;

@RestController
@CrossOrigin(origins = "*")
public class ProjectionController {
	@Autowired(required = false)
	private ProjectionService service;
	
	@GetMapping("/projection/{id}")
	public Projection getProjectionById(@PathVariable("id") Integer id) {
		return service.viewProjection(id);
	}

	@GetMapping("/projections")
	public List<Projection> getAllProjections() {
		return service.viewProjectionList();
	}
	
	@GetMapping("/projections/{id}/{date}")
	public List<Projection> getTimeAndPriceOfMovie(@PathVariable("id") Integer id,@PathVariable("date") String date) {
		return service.viewTimeAndPriceOfMovie(id, date);
	}

	@PostMapping("/projection")
	public Projection addUser(@RequestBody Projection projection) {
		return service.addProjection(projection);
	}

	@PutMapping("/projection")
	public Projection updateProjection(@RequestBody Projection projection) {
		return service.updateProjectionl(projection);
	}

	@DeleteMapping("/projection/{id}")
	public Projection deleteProjection(@PathVariable("id") Integer id) {
		return service.removeProjection(id);
	}


}
