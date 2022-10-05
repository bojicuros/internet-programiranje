package com.app.movieTicketBooking.model;

import java.sql.Date;
import java.sql.Time;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity 
public class Projection {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int projectionId;
	
	private Date date;
	private Time time;
	private double price;
	
	@ManyToOne
	private Hall hall;
	@ManyToOne
	private Movie movie;
	
	public Projection() {	
	}
	
	public Projection(int projectionId, Date date, Time time,Hall hall, Movie movie,double price ) {
		super();
		this.projectionId = projectionId;
		this.date = date;
		this.time = time;
		this.hall = hall;
		this.movie = movie;
		this.price=price;
	}

	public Hall getHall() {
		return hall;
	}

	public void setHall(Hall hall) {
		this.hall = hall;
	}

	public Movie getMovie() {
		return movie;
	}

	public void setMovie(Movie movie) {
		this.movie = movie;
	}

	public int getProjectionId() {
		return projectionId;
	}
	public void setProjectionId(int projectionId) {
		this.projectionId = projectionId;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public Time getTime() {
		return time;
	}
	public void setTime(Time time) {
		this.time = time;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}


}
