package com.app.movieTicketBooking.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.movieTicketBooking.model.Ticket;
import com.app.movieTicketBooking.repository.TicketRepository;
import com.app.movieTicketBooking.service.TicketService;

@Service
public class TicketServiceImpl implements TicketService{
	@Autowired
	private TicketRepository repo;
	
	@Override
	public Ticket addTicket(Ticket ticket) {
		return repo.save(ticket);
	}

	@Override
	public Ticket updateTicket(Ticket ticket) {
		return repo.save(ticket);
	}

	@Override
	public Ticket removeTicket(Ticket ticket) {
		repo.delete(ticket);
		return ticket;
	}

	@Override
	public List<Ticket> viewAllTickets() {
		return repo.findAll();
	}

	@Override
	public Ticket viewTicket(Integer id) {
		return repo.findById(id).get();
	}

	@Override
	public List<Ticket> viewUserTickets(Integer userId) {
		return repo.getUserTickets(userId);
	}

	@Override
	public List<Ticket> viewTicketsForProjection(Integer projectionId) {
		return repo.getTicketForProjection(projectionId);
	}

	@Override
	public Ticket removeTicketById(Integer id) {
		Ticket ticket = repo.findById(id).get();
		repo.delete(ticket);
		return ticket;
	}

}
