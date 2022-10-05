package com.app.movieTicketBooking.repository;

import java.sql.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.movieTicketBooking.model.Projection;

@Repository
public interface ProjectionRepository extends JpaRepository<Projection, Integer>{
	
	@Query("FROM Projection WHERE movie_movie_id=?1 AND date=?2")
	public List<Projection> getMovieProjections(int movieId, Date date);
	

}
