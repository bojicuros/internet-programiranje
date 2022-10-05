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

import com.app.movieTicketBooking.model.Ticket;
import com.app.movieTicketBooking.service.TicketService;

@RestController
@CrossOrigin(origins = "*")
public class TicketController {
	@Autowired(required = false)
	private TicketService service;
		
	@GetMapping("/tickets")
	public List<Ticket> getAllTickets(){
		return service.viewAllTickets();
	}
	
	@GetMapping("/ticket/{id}")
	public Ticket getTicketById(@PathVariable("id") Integer id) {
		return service.viewTicket(id);
	}
	
	@GetMapping("/tickets/{id}")
	public List<Ticket> getUserTickets(@PathVariable("id") Integer id){
		return service.viewUserTickets(id);
	}
	
	@GetMapping("/tickets/projection/{id}")
	public List<Ticket> getTicketsForProjection(@PathVariable("id") Integer id){
		return service.viewTicketsForProjection(id);
	}
	
	@PostMapping("/ticket")
	public Ticket addTicket(@RequestBody Ticket ticket){
		return service.addTicket(ticket);
	}
	
	@PutMapping("/ticket")
	public Ticket updateTicket(@RequestBody Ticket ticket){
		return service.updateTicket(ticket);
	}
	
	@DeleteMapping("/ticket")
	public Ticket deleteTicket(@RequestBody Ticket ticket){
		return service.removeTicket(ticket);
	}
	
	@DeleteMapping("/ticket/{id}")
	public Ticket deleteTicketById(@PathVariable("id") Integer id) {
		return service.removeTicketById(id);
	}
	
	
}
