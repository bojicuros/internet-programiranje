package com.app.movieTicketBooking.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.movieTicketBooking.model.Ticket;

@Repository
public interface TicketRepository  extends JpaRepository<Ticket, Integer>{
	
	@Query("FROM Ticket WHERE projection_projection_id=?1")
	public List<Ticket> getTicketForProjection(int projectionId);
	
	@Query("FROM Ticket WHERE user_user_id=?1")
	public List<Ticket> getUserTickets(int userId);
	
}
