package com.app.movieTicketBooking.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.movieTicketBooking.model.User;


@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
	
	public List<User> findByEmail(String email);
		
}
