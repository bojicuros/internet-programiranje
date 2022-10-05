package com.app.movieTicketBooking;

import java.sql.Date;
import java.sql.Time;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.app.movieTicketBooking.model.Hall;
import com.app.movieTicketBooking.model.Movie;
import com.app.movieTicketBooking.model.Projection;
import com.app.movieTicketBooking.model.Ticket;
import com.app.movieTicketBooking.model.User;
import com.app.movieTicketBooking.repository.HallRepository;
import com.app.movieTicketBooking.repository.MovieRepository;
import com.app.movieTicketBooking.repository.ProjectionRepository;
import com.app.movieTicketBooking.repository.TicketRepository;
import com.app.movieTicketBooking.repository.UserRepository;

@SpringBootApplication
public class LoadDatabase /*implements CommandLineRunner */{
//	@Autowired(required = false)
//	private HallRepository hallRepository;
//	@Autowired(required = false)
//	private MovieRepository movieRepository;
//	@Autowired(required = false)
//	private ProjectionRepository projectionRepository;
//	@Autowired(required = false)
//	private TicketRepository ticketRepository;
//	@Autowired(required = false)
//	private UserRepository userRepository;
//
//	public static void main(String[] args) {
//		SpringApplication.run(LoadDatabase.class, args);
//	}
//
//	@Override
//	public void run(String... args) throws Exception {
//		userRepository.deleteAll();
//		User user = new User(1, "Marko Markovic", "Majke Jugovica 21, Banja Luka", "+38766953003", "markom44@gmail.com", "marko123");
//		userRepository.save(user);
//		
//
//		Hall hall1 = new Hall(1, "Sala 1", 64);
//		Hall hall2 = new Hall(2, "Sala 2", 64);
//		Hall hall3 = new Hall(3, "Sala 3", 64);
//		hallRepository.save(hall1);
//		hallRepository.save(hall2);
//		hallRepository.save(hall3);
//		
//		movieRepository.deleteAll();
//		
//		String movieDesc1 = "Priča je to o bivšem marincu koji se nađe u sukobu na vanzemaljskom planetu prepunom egzotičnih životnih oblika. Kao avatar ljudskog uma u vanzemaljskom tijelu, on se nađe rastrgan između dva svijeta u očajničkoj borbi za vlastito preživljavanje te za opstanak lokalnog stanovništva... Koristeći potpuno novu, revolucionarnu tehnologiju kompjuterske animacije okoliš i likovi se pretvaraju u fotorealistične trodimenzionalne prikaze koji će gledatelje prenijeti u nezaboravan vanzemaljski svijet bogat nevjerojatnim prizorima, stvorenjima i likovima.";
//		String movieDesc2 = "Radnja filma „Avatar: The Way of Water“ odvija se više od deset godina nakon događaja iz prvog dijela. Otkad je odlučio trajno prenijeti ljudsku svijest u svoje tijelo Avatara i postati novi vođa naroda Na’vi, Jake Sully živi sa svojom obitelji na Pandori. On i Neytiri su osnovali obitelj i dobili djecu. Kolonizirajuće su se snage vratile na Pandoru kako bi završili prvotnu potragu za rijetkim mineralom, prisiljavajući Jakea i Neytiri da pobjegnu iz svog doma, istražujući do tada nepoznate dijelove Pandore gdje će se upoznati s ljudima Metkayine, klanom domorodaca koji žive okruženi morem.";
//		String movieDesc3 = "Dobitnici Oskara George Clooney i  Julia Roberts ponovo se udružuju na velikom ekranu kao bivši partneri koji se nalaze na zajedničkoj misiji da spriječe svoju zaljubljenu kćerku da napravi istu grešku koju su i oni sami nekada napravili. Studiji Working Title, Smokehouse Pictures i Red Om Films, predstavljaju nam film KARTA ZA RAJ, romantičnu komediju o slatkom iznenađenju koje donosi druga šansa.";
//		String movieDesc4 = "Kraljica Ramonda (Angela Bassett), Shuri (Letitia Wright), M’Baku (Winston Duke), Okoye (Danai Gurira) i Dora Milaje (ukljucujuci Florence Kasumba), se bore da zastite njihovu naciju od ostatka svijeta nakon smrti kralja T’Challa-e. Ljudi iz Wakande teze da idu dalje i sada jos jednom moraju da se ujedine da pomognu Nakiji (Lupita Nyong’o) i Everett Ross-u (Martin Freeman) da pronadju novi put za Wakanda";
//
//		
//		Movie movie1 = new Movie(1, "Avatar", "Akcija, Sci-fi", "02:41:00", "Engleski", "xxx"
//				, "https://image.tmdb.org/t/p/w500/6EiRUJpuoeQPghrs3YNktfnqOVh.jpg");
//		movieRepository.save(movie1);
//		
//		Movie movie2 = new Movie(2, "Avatar: The Way of Water", "Akcija, Sci-fi", "02:56:07", "Engleski","xxw"
//				, "https://image.tmdb.org/t/p/w600_and_h900_bestv2/fjaoD0ZfPOf2C5BalCziPUaf4Zk.jpg");
//		movieRepository.save(movie2);
//		
//		Movie movie3 = new Movie(3, "Ticket to Paradise", "Akcija, Sci-fi", "01:44:15", "Engleski", "nmp"
//				, "https://i1.ytimg.com/vi/hkP4tVTdsz8/maxresdefault.jpg");
//		movieRepository.save(movie3);
//		
//		Movie movie4 = new Movie(4, "Black Panther: Wakanda Forever", "Akcija, Sci-fi, Triler", "02:41:00", "Engleski", "cao"
//				, "https://static.titlovi.com/img/0304/304077-tt9114286.jpg");
//		movieRepository.save(movie4);
//		
//		userRepository.deleteAll();
//		User user1 = new User(1, "Marko Markovic", "Majke Jugovica 1, Banja Luka", "+38766456093", "marko123@gmail.com", "marko123");
//		userRepository.save(user1);
//		
//		projectionRepository.deleteAll();
//		
//		String str = "2022-09-17";  
//	    Date date = Date.valueOf(str);
//	    
//	    Time time = Time.valueOf("12:00:00");
//		Projection projection1 = new Projection(1, date, time, hall3, movie2);
//		projectionRepository.save(projection1);
//		
//		Time time1 = Time.valueOf("13:15:00");
//		Projection projection2 = new Projection(2, date, time1, hall3, movie2);
//		projectionRepository.save(projection2);
//		
//		Time time2 = Time.valueOf("15:00:00");
//		Projection projection3 = new Projection(3, date, time2, hall3, movie2);
//		projectionRepository.save(projection3);
//		
//		Time time3 = Time.valueOf("17:30:00");
//		Projection projection4 = new Projection(4, date, time3, hall3, movie2);
//		projectionRepository.save(projection4);
//		
//		Time time4 = Time.valueOf("18:00:00");
//		Projection projection5 = new Projection(5, date, time4, hall3, movie2);
//		projectionRepository.save(projection5);
//		
//		Time time5 = Time.valueOf("19:00:00");
//		Projection projection6 = new Projection(6, date, time5, hall3, movie2);
//		projectionRepository.save(projection6);
//		
//		Time time6 = Time.valueOf("21:00:00");
//		Projection projection7 = new Projection(7, date, time6, hall3, movie2);
//		projectionRepository.save(projection7);
//		
//		
//		ticketRepository.deleteAll();
//		Ticket ticket1 = new Ticket(1, 3, 6, "A", projection7, user1);
//		ticketRepository.save(ticket1);
//		
//	}
}
