package com.app.movieTicketBooking.serviceImpl;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.movieTicketBooking.model.Projection;
import com.app.movieTicketBooking.repository.ProjectionRepository;
import com.app.movieTicketBooking.service.ProjectionService;

@Service
public class ProjectionServiceImpl implements ProjectionService{
	
	@Autowired
	private ProjectionRepository repo;

	@Override
	public Projection addProjection(Projection projection) {
		return repo.save(projection);
	}

	@Override
	public Projection updateProjectionl(Projection projection) {
		return repo.save(projection);
	}

	@Override
	public Projection removeProjection(int projectionId) {
		Projection projection = repo.findById(projectionId).get();
		repo.delete(projection);
		return projection;
	}

	@Override
	public Projection viewProjection(int projectionId) {
		return repo.findById(projectionId).orElse(new Projection());
	}

	@Override
	public List<Projection> viewProjectionList() {
		return repo.findAll();
	}

	@Override
	public List<Projection> viewTimeAndPriceOfMovie(int movieId, String date) {
		return repo.getMovieProjections(movieId, Date.valueOf(date));
	}

}
