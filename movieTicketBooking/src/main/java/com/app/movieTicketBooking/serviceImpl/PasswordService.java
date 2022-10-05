package com.app.movieTicketBooking.serviceImpl;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class PasswordService {
	
  public static BCryptPasswordEncoder encoder= new BCryptPasswordEncoder();

  public static String encodePassword(String password) {
    return encoder.encode(password);
  }

  public static boolean doesPasswordsMatch(String password, String encodedPassword) {
    return encoder.matches(password, encodedPassword);
  }
  
}