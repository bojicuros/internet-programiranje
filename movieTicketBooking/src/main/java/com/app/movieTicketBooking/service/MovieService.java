package com.app.movieTicketBooking.service;

import java.util.List;

import com.app.movieTicketBooking.model.Movie;

public interface MovieService {

	Movie addMovie(Movie movie);

	Movie updateMovie(Movie movie);

	Movie removeMovie(int movieId);

	Movie viewMovie(int movieId);

	List<Movie> viewMovieList();
	
	List<Movie> viewMovieListByGenre(String genre);

}
