import { React, useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

import { Helmet } from 'react-helmet'

import SolidButton from '../components/solid-button'
import './profile.css'

const Profile = () => {

  const { auth, setAuth } = useAuth();
  const [id, setId] = useState(null);
  const [name, setName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [pol, setPol] = useState(null);
  const [mejl, setMejl] = useState(null);
  const [lozinka, setLozinka] = useState(null);

  const [tickets, setTickets] = useState(null);

  useEffect(() => {
    if (auth.data) {
      fetch('http://localhost:8080/user/' + auth.data.userId)
        .then(res => {
          return res.json();
        })
        .then((res) => {
          setId(res.userId);
          setName(res.userName.substring(0, res.userName.indexOf(' ')));
          setLastName(res.userName.substring(res.userName.indexOf(' ')));
          setMejl(res.email);
          setPol(res.gender);
          setLozinka(res.password);
        });
    }
  }, []);

  useEffect(() => {
    if (auth.data) {
      fetch('http://localhost:8080/tickets/' + auth.data.userId)
        .then(res => {
          return res.json();
        })
        .then((res) => {
          setTickets(res);
        });
    }
  }, []);

  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState(null);
  const [gender, setGender] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const updateProfileInfo = () => {

    setUserId(id);
    setUserName((document.getElementsByClassName("profile-name")[0].value === "" ? name : document.getElementsByClassName("profile-name")[0].value) + (document.getElementsByClassName("profile-lastname")[0].value === "" ? lastName : document.getElementsByClassName("profile-lastname")[0].value));
    setGender(pol);
    setEmail(document.getElementsByClassName("profile-email")[0].value === "" ? mejl : document.getElementsByClassName("profile-email")[0].value);
    setPassword(document.getElementsByClassName("profile-password")[0].value === "" ? lozinka : document.getElementsByClassName("profile-password")[0].value);

    const user = { userId, userName, gender, email, password };

    if (userId) {
      fetch('http://localhost:8080/user', {
        method: 'PUT',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
      }).then(res => {
        return res.json();
      })
        .then((updatedUser) => {
          console.log(updatedUser);
        });
    }
  }

  const formatDate = (date) => {
    const formatedDate = date.substring(5, 7) + '.' + date.substring(8, 10) + '.';
    return formatedDate;
  }

  const deleteTicket = (ticketId) => {
    fetch('http://localhost:8080/ticket/' + ticketId, {
      method: 'DELETE',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ticketId)
    }).then(res => {
      return res.json();
    }).then((deletedTicket) => {
      const element = document.getElementById(deletedTicket.ticketId);
      element.style.display = "none";
    });
  }

  function isEmpty(obj) {
    for(var prop in obj) {
      if(Object.prototype.hasOwnProperty.call(obj, prop)) {
        return false;
      }
    }
    return JSON.stringify(obj) === JSON.stringify({});
  }

  const logOut = () => {
    setAuth({});
    if(isEmpty(auth)){
      console.log(true);
    }
  }

  return (
    <div className="profile-container">
      <Helmet>
        <title>Profile - Movie booking app</title>
        <meta property="og:title" content="Profile - Movie booking app" />
      </Helmet>
      <div className="profile-header">
        <nav data-role="Header" className="profile-logo-and-menu">
          <div className="profile-container1">
            <h1 className="profile-logo">
              Movie booking app
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h1>
          </div>
          <div className="profile-right-side">
            <div className="profile-links-container">
              <Link to="/" className="profile-text button">
                Pocetna
              </Link>
              <Link to="/movies" className="profile-navlink button">
                Filmovi
              </Link>
              <Link to="/izdvojeno" className="profile-navlink1 button">
                Izdvojeno
              </Link>
              <Link to="/kontakt" className="profile-navlink2 button">
                Kontakt
              </Link>
            </div>
          </div>
          <div data-type="BurgerMenu" className="profile-tablet-menu">
            <svg viewBox="0 0 1024 1024" className="profile-tablet-menu">
              <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            </svg>
          </div>
          <div data-type="MobileMenu" className="profile-mobile-menu">
            <div className="profile-nav">
              <div className="profile-top">
                <h1>Travel</h1>
                <div data-type="CloseMobileMenu" className="profile-close-menu">
                  <svg viewBox="0 0 1024 1024" className="profile-icon03">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="profile-right-side1">
                <div className="profile-links-container1">
                  <span className="profile-text01">Home</span>
                  <span className="profile-text02">About</span>
                  <span className="profile-text03">Tour Packages</span>
                  <span>Contact</span>
                </div>
                <a href="#main-section" className="profile-link">
                  <SolidButton button="Explore places"></SolidButton>
                </a>
              </div>
            </div>
            <div className="profile-follow-container">
              <span className="profile-text05">
                Follow us on
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <div className="profile-icons-container">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="profile-link1"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="profile-icon05"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="profile-link2"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="profile-icon07"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="profile-link3"
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="profile-icon09"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="profile-container2">
        <div className="profile-izmijeni-profil">
          <div className="profile-red">
            <span className="profile-text06">Vase ime:</span>
            <input
              type="text"
              placeholder={name}
              className="profile-name input"
            />
          </div>
          <div className="profile-red1">
            <span className="profile-text07">Vase prezime:</span>
            <input
              type="text"
              placeholder={lastName}
              className="profile-lastname input"
            />
          </div>
          <div className="profile-red2">
            <span className="profile-text08">Vas email:</span>
            <input
              type="email"
              placeholder={mejl}
              className="profile-email input"
            />
          </div>
          <div className="profile-red3">
            <span className="profile-text09">Vasa nova lozinka:</span>
            <input
              type="password"
              placeholder={''}
              className="profile-password input"
            />
          </div>
          <div className="profile-red4">
            <button onClick={() => (updateProfileInfo())} className="profile-izmjieni button">Izmijeni</button>
          </div>
        </div>
        <div className="profile-container3">
          <span className="profile-text10">
            <span>Vase rezervacije:</span>
            <button onClick={()=>(logOut())} className='button profile-odjavi'>Odjavi se</button>
            <span></span>
          </span>
          {tickets && tickets.map((ticket) => (
            <div className="profile-rezinfo" id={ticket.ticketId}>
              <img
                alt="image"
                src={ticket.projection.movie.img}
                className="profile-skika-filma"
              />
              <div className="profile-container4">
                <div className="profile-container5">
                  <span className="profile-ime-filma">
                    {ticket.projection.movie.movieName}
                  </span>
                </div>
                <span className="profile-detalji-o-filmu">
                  <span>{formatDate(ticket.projection.date)} u {ticket.projection.time.substring(0, 5)} sjediste {ticket.seatRow + ticket.seatNumber} u {ticket.projection.hall.hallName}</span>
                  <span></span>
                  <div className="profile-red5">
                    <button onClick={() => (deleteTicket(ticket.ticketId))} className="profile-uredi button">Obrisi</button>
                  </div>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Profile
