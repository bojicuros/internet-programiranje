package com.app.movieTicketBooking.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="hall")
public class Hall {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int hallId;
	
	private String hallName;
	private int numberOfSeats;
	
	public  Hall() {
	}
	
	public Hall(int hallId, String hallName, int numberOfSeats) {
		this.hallId = hallId;
		this.hallName = hallName;
		this.numberOfSeats = numberOfSeats;
	}
	
	public int getHallId() {
		return hallId;
	}

	public void setHallId(int hallId) {
		this.hallId = hallId;
	}
	
	public String getHallName() {
		return hallName;
	}
	public void setHallName(String screenName) {
		this.hallName = screenName;
	}
	public int getNumberOfSeats() {
		return numberOfSeats;
	}
	public void setNumberOfSeats(int numberOfSeats) {
		this.numberOfSeats = numberOfSeats;
	}
	
}
