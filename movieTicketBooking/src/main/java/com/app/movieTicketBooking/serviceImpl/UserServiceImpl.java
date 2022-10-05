package com.app.movieTicketBooking.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.movieTicketBooking.model.User;
import com.app.movieTicketBooking.repository.UserRepository;
import com.app.movieTicketBooking.service.UserService;

@Service
public class UserServiceImpl implements UserService {
	@Autowired
	private UserRepository repo;

	@Override
	public User addUser(User user) {
		user.setPassword(PasswordService.encodePassword(user.getPassword()));
		return repo.save(user);
	}

	@Override
	public User updateUser(User user) {
		User temp = repo.findById(user.getUserId()).get();
		if(user.getPassword().equals(temp.getPassword()))   //nije azurirana sifra
			return repo.save(user);
		user.setPassword(PasswordService.encodePassword(user.getPassword()));
		return repo.save(user);
	}

	@Override
	public User deleteUser(int userId) {
		User user = repo.findById(userId).get();
		repo.delete(user);
		return user;
	}

	@Override
	public User viewUser(int userId) {
		return repo.findById(userId).orElse(new User());
	}

	@Override
	public List<User> viewAllUsers() {
		return repo.findAll();
	}

	@Override
	public List<User> findByEmail(String email) {
		return repo.findByEmail(email);
	}

}
