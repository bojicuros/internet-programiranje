package com.app.movieTicketBooking.controller;

import java.util.List;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.movieTicketBooking.model.User;
import com.app.movieTicketBooking.service.UserService;
import com.app.movieTicketBooking.serviceImpl.PasswordService;

@RestController
@CrossOrigin(origins = "*")
public class UserController {
	@Autowired(required = false)
	private UserService service;

	@GetMapping("/user/{id}")
	public User getUserById(@PathVariable("id") Integer id) {
		return service.viewUser(id);
	}

	@GetMapping("/users")
	public List<User> getAllUsers() {
		return service.viewAllUsers();
	}

	@PostMapping("/user")
	public User addUser(@RequestBody User user) {
		return service.addUser(user);
	}

	@PutMapping("/user")
	public User updateUser(@RequestBody User user) {
		return service.updateUser(user);
	}

	@DeleteMapping("/user/{id}")
	public User deleteUser(@PathVariable("id") Integer id) {
		return service.deleteUser(id);
	}
	
	@PostMapping("/login")
	public User logginUser(@RequestBody User user) {
		JSONObject jsonUser = new JSONObject(user);
	    String email = jsonUser.getString("email");
	    String password = jsonUser.getString("password");
	    
	    List<User>usersByEmail = service.findByEmail(email);
	    if(usersByEmail.isEmpty())
	    	return null;
	    if(!PasswordService.doesPasswordsMatch(password, usersByEmail.get(0).getPassword()))
	    	return null;
		return usersByEmail.get(0);
	    
	}

}
