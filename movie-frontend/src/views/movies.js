import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import SolidButton from '../components/solid-button'
import OutlineButton from '../components/outline-button'
import './movies.css'

const Movies = () => {

  const [movies, setMovies] = useState(null);
  const [firstIndex, setFirstIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(4);

  useEffect(() => {
     fetch('http://localhost:8080'+window.location.pathname)
     .then(res => {
        return res.json();
     })
     .then((data) => {
        setMovies(data);
     })
  });

  const nextMovies = () => {
    if(movies.length>firstIndex+4){
      setFirstIndex(firstIndex+4)
      setLastIndex(lastIndex+4)
    }else{
      setFirstIndex(0)
      setLastIndex(4)
    }
  }

  const previousMovies = () => {
    if(firstIndex-4>-1){
      setFirstIndex(firstIndex-4)
      setLastIndex(lastIndex-4)
      console.log('i',firstIndex,lastIndex)
    }else{
      setLastIndex(movies.length%4===0 ? movies.length : movies.length+4-movies.length%4)
      setFirstIndex(movies.length%4===0 ? movies.length-4 : movies.length-movies.length%4)
      console.log('e',firstIndex,lastIndex)
    }
  }

  return (
    <div className="movies-container">
      <Helmet>
        <title>Movies - Movie booking app</title>
        <meta property="og:title" content="Movies - Movie booking app" />
      </Helmet>
      <div className="movies-header">
        <nav data-role="Header" className="movies-logo-and-menu">
          <div className="movies-container1">
            <h1 className="movies-logo">
              Movie booking app
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h1>
          </div>
          <div className="movies-right-side">
            <div className="movies-links-container">
              <Link to="/" className="movies-text button">
                Pocetna
              </Link>
              <Link to="/movies" className="movies-navlink button">
                Filmovi
              </Link>
              <Link to="/izdvojeno" className="movies-navlink1 button">
                Izdvojeno
              </Link>
              <Link to="/kontakt" className="movies-navlink2 button">
                Kontakt
              </Link>
            </div>
          </div>
          <div data-type="BurgerMenu" className="movies-tablet-menu">
            <svg viewBox="0 0 1024 1024" className="movies-tablet-menu">
              <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            </svg>
          </div>
          <div data-type="MobileMenu" className="movies-mobile-menu">
            <div className="movies-nav">
              <div className="movies-top">
                <h1>Movie Booking App</h1>
                <div data-type="CloseMobileMenu" className="movies-close-menu">
                  <svg viewBox="0 0 1024 1024" className="movies-icon03">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="movies-right-side1">
                <div className="movies-links-container1">
                  <span className="movies-text01">Pocetna</span>
                  <span className="movies-text02">Kontakt</span>
                  <span className="movies-text03">Filmovi</span>
                  <span>Contact</span>
                </div>
                <a href="#main-section" className="movies-link">
                  <SolidButton button="Explore places"></SolidButton>
                </a>
              </div>
            </div>
            <div className="movies-follow-container">
              <span className="movies-text05">
                Follow us on
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <div className="movies-icons-container">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="movies-link1"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="movies-icon05"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="movies-link2"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="movies-icon07"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="movies-link3"
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="movies-icon09"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="movies-zanrovi">
        <Link to='/movies' className="movies-svi">
          <span>Svi filmovi</span>
        </Link>
        <Link to='/movies/Akcija' className="movies-akcioni">
          <span>Akcija</span>
        </Link>
        <Link to='/movies/Triler' className="movies-triler">
          <span>Triler</span>
        </Link>
        <Link to='/movies/Misterija' className="movies-misterija">
          <span>Misterija</span>
        </Link>
        <Link to='/movies/Komedija' className="movies-komedija">Komedija</Link>
        <Link to='/movies/Drama' className="movies-drama">
          <span>Drama</span>
        </Link>
        <Link to='/movies/Horor' className="movies-horor">
          <span>Horor</span>
        </Link>
        <Link to='/movies/Romanticni' className="movies-romanticni">
          <span>Romanticni</span>
        </Link>
        <Link to='/movies/Kriminalisticki' className="movies-kriminalisticki">
          <span>Kriminalisticki</span>
        </Link>
        <Link to='/movies/Dokumentarni' className="movies-dokumentarni">
          <span>Dokumentarni</span>
        </Link>
        <Link to='/movies/Sci-fi' className="movies-porodicni">
          <span>Sci-fi</span>
        </Link>
      </div>
      <div className="movies-filmovi">
          {movies && movies.slice(firstIndex,lastIndex).map((movie)=>(
              <div className="movies-film3">
                <Link to={"/movie/"+movie.movieId}>
                  <img
                    alt="image"
                    src={movie.img}
                    className="movies-image"
                  />
              </Link>
              <div className="movies-container2">
                <span className="movies-text16">{movie.movieName}</span>
              </div>
            </div>
            ))}
      </div>
        <img
            alt="image"
            src="/playground_assets/arrow_right.png"
            className='movies-sljedece'
            onClick={()=>nextMovies()}
        />
        <img
            alt="image"
            src="/playground_assets/arrow_left.png"
            className='movies-prethodno'
            onClick={()=>previousMovies()}
        />
    </div>
  )
}

export default Movies
