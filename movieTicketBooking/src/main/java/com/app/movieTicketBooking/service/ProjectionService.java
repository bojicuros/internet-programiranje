package com.app.movieTicketBooking.service;

import java.util.List;

import com.app.movieTicketBooking.model.Projection;

public interface ProjectionService {
	
	Projection addProjection(Projection projection);

	Projection updateProjectionl(Projection projection);

	Projection removeProjection(int projectionId);

	Projection viewProjection(int projectionId);

	List<Projection> viewProjectionList();
	
	List<Projection> viewTimeAndPriceOfMovie(int movieId, String date);

}
