package com.app.movieTicketBooking.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.movieTicketBooking.model.Hall;

@Repository
public interface HallRepository extends JpaRepository<Hall, Integer>{
	

}
