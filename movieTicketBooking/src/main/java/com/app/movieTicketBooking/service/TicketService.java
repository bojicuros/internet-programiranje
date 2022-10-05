package com.app.movieTicketBooking.service;

import java.util.List;

import com.app.movieTicketBooking.model.Ticket;

public interface TicketService {

	Ticket addTicket(Ticket ticket);

	Ticket updateTicket(Ticket ticket);

	Ticket removeTicket(Ticket ticket);

	List<Ticket> viewAllTickets();

	Ticket viewTicket(Integer id);
	
	List<Ticket> viewUserTickets(Integer userId);

	List<Ticket> viewTicketsForProjection(Integer projectionId);

	Ticket removeTicketById(Integer id);

}