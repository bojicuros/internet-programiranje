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

import com.app.movieTicketBooking.model.Movie;
import com.app.movieTicketBooking.service.MovieService;

@RestController
@CrossOrigin(origins = "*")
public class MovieController {
	@Autowired(required = false)
	private MovieService service;
	
	@GetMapping("/movie/{id}")
	public Movie getMovieById(@PathVariable("id") Integer id) {
		return service.viewMovie(id);
	}
	
	@GetMapping("/movies")
	public List<Movie> getAllMovies() {
		return service.viewMovieList();
	}
	
	@GetMapping("/movies/{genre}")
	public List<Movie> getAllMoviesOfGenre(@PathVariable("genre") String genre) {
		return service.viewMovieListByGenre(genre);
	}
	
	@PostMapping("/movie")
	public Movie addMovie(@RequestBody Movie movie) {
		return service.addMovie(movie);
	}
	
	@PutMapping("/movie")
	public Movie updateMovie(@RequestBody Movie movie) {
		return service.updateMovie(movie);
	}
	
	@DeleteMapping("/movie/{id}")
	public Movie deleteMovie(@PathVariable("id") Integer id) {
		return service.removeMovie(id);
	}
	
}