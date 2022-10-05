package com.app.movieTicketBooking.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.movieTicketBooking.model.Movie;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Integer>{
	
	@Query("SELECT s FROM Movie s WHERE s.movieGenre LIKE CONCAT('%',:zanr,'%')")
	public List<Movie> getMoviesByGenre(@Param("zanr") String genre);


}
