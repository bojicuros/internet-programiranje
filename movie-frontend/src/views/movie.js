import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import SolidButton from '../components/solid-button'
import './movie.css'

const Movie = () => {

  const [today, setToday] = useState(new Date());
  const [day, setDay] = useState(today.getDay());
  const [dateFormat, setDateFormat] = useState(today.toISOString().split('T')[0]);

  const [movie, setMovie] = useState(null);
  const [projections, setProjections] = useState(null);

  const changeDate = (number) => {
    if(day === 0 && number === 7 || day === number)
      today.setDate(today.getDate());
    else if(day === 0)
      today.setDate(today.getDate() + (number-7));
    else
      today.setDate(today.getDate() + (number-day));
    setDay(today.getDay());
    setDateFormat(today.toISOString().split('T')[0]);
  }

  useEffect(() => {
     fetch('http://localhost:8080'+window.location.pathname)
     .then(res => {
        return res.json();
     })
     .then((data) => {
        setMovie(data);
     });
  },[]);

  useEffect(() => {
    if(movie !== null){
      fetch('http://localhost:8080/projections/'+movie.movieId+'/'+dateFormat)
      .then(res => {
        return res.json();
      })
      .then((data) => {
        setProjections(data);
      })
    }
 });

  return (
    <div className="movie-container">
      <Helmet>
        <title>Movie - Movie booking app</title>
        <meta property="og:title" content="Movie - Movie booking app" />
      </Helmet>
      <div className="movie-header">
        <nav data-role="Header" className="movie-logo-and-menu">
          <div className="movie-container1">
            <h1 className="movie-logo">
              Movie booking app
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h1>
          </div>
          <div className="movie-right-side">
            <div className="movie-links-container">
              <Link to="/" className="movie-text button">
                Pocetna
              </Link>
              <Link to="/movies" className="movie-navlink button">
                Filmovi
              </Link>
              <Link to="/izdvojeno" className="movie-navlink1 button">
                Izdvojeno
              </Link>
              <Link to="/kontakt" className="movie-navlink2 button">
                Kontakt
              </Link>
            </div>
          </div>
          <div data-type="BurgerMenu" className="movie-tablet-menu">
            <svg viewBox="0 0 1024 1024" className="movie-tablet-menu">
              <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            </svg>
          </div>
          <div data-type="MobileMenu" className="movie-mobile-menu">
            <div className="movie-nav">
              <div className="movie-top">
                <h1>Travel</h1>
                <div data-type="CloseMobileMenu" className="movie-close-menu">
                  <svg viewBox="0 0 1024 1024" className="movie-icon03">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="movie-right-side1">
                <div className="movie-links-container1">
                  <span className="movie-text01">Home</span>
                  <span className="movie-text02">About</span>
                  <span className="movie-text03">Tour Packages</span>
                  <span>Contact</span>
                </div>
                <a href="#main-section" className="movie-link">
                  <SolidButton button="Explore places"></SolidButton>
                </a>
              </div>
            </div>
            <div className="movie-follow-container">
              <span className="movie-text05">
                Follow us on
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <div className="movie-icons-container">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="movie-link1"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="movie-icon05"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="movie-link2"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="movie-icon07"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="movie-link3"
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="movie-icon09"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {movie && (<div className="movie-film-prikaz">
        <div className="movie-podaci-o-filmu">
         <div className="movie-slika-i-naziv">
            <h1 className="movie-naziv-filma">Ime filma: {movie.movieName}</h1>
            <img
              alt="image"
              src={movie.img}
              className="movie-slika"
            />
          </div>
          <div className="movie-ostale-informacije">
            <span className="movie-zanr">Zanr: {movie.movieGenre}</span>
            <span className="movie-trajanje">
              <span>Trajanje filma: {movie.movieDuration}</span>
              <span className="movie-text07"></span>
            </span>
            <span className="movie-jezik">
              <span>Jezik: {movie.language}</span>
            </span>
            <span className="movie-opis">
              <span>
                Opis:
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
                <span>
                  {movie.description}
              </span>
            </span>
          </div>
        </div>
      </div>)}
      <div className="movie-termini">
        <div className="movie-container2">
          <span className="movie-text15">Termini</span>
        </div>
        <div className="movie-dani">
          <button onClick={()=>(changeDate(1))} className={day === 1 ? "movie-text17 movie-ponedeljak" : "movie-text16 movie-ponedeljak"}>
            <span>Ponedeljak</span>
          </button>
          <button onClick={()=>(changeDate(2))} className={day === 2 ? "movie-text17 movie-utorak" : "movie-text16 movie-utorak"}>
            <span>Utorak</span>
          </button>
          <button onClick={()=>(changeDate(3))} className={day === 3 ? "movie-text17 movie-srijeda" : "movie-text16 movie-srijeda"}>
            <span>Srijeda</span>
          </button>
          <button onClick={()=>(changeDate(4))} className={day === 4 ? "movie-text17 movie-cetvrtak" : "movie-text16 movie-cetvrtak"}>
            <span>Četvrtak</span>
          </button>
          <button onClick={()=>(changeDate(5))} className={day === 5 ? "movie-text17 movie-petak" : "movie-text16 movie-petak"}>
            <span>Petak</span>
          </button>
          <button onClick={()=>(changeDate(6))} className={day === 6 ? "movie-text17 movie-subota" : "movie-text16 movie-subota"}>
            <span>Subota</span>
          </button>
          <button onClick={()=>(changeDate(7))} className={day === 0 ? "movie-text17 movie-nedelja" : "movie-text16 movie-nedelja"}>
            <span>Nedelja</span>
          </button>
        </div>
        <div className="movie-satnice">
        {projections && projections.map((projection)=>(
          <Link class="movie-navlink3" to={"/book/"+projection.projectionId}>
            <span>{projection.time.substring(0,5)}</span><br></br>
            <span className='movie-text40'>{projection.price+'KM'}</span>
          </Link>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Movie
