package com.app.movieTicketBooking.service;

import java.util.List;


import com.app.movieTicketBooking.model.User;


public interface UserService {
	
	User addUser(User user);
	
	User updateUser(User user);
	
	User deleteUser(int userId);
	
	User viewUser(int userId);
	
	List<User> viewAllUsers();
	
	List<User> findByEmail(String email);
	
}
