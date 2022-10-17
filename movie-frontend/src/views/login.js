import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'
import useAuth from '../hooks/useAuth'

import SolidButton from '../components/solid-button'
import './login.css'

const Login = () => {

  const { setAuth } = useAuth();
  const [name, setName] = useState(null);
  const [lastname, setLastName] = useState(null);
  const [gender, setGender] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [userName, setUserName] = useState(null);


  const showRegistration = () => {
    document.getElementsByClassName("login-prijava")[0].style.display = "none";
    document.getElementsByClassName("login-registracija")[0].style.display = "block";
  }

  const handleRegistration = (e) => {
    e.preventDefault();

    const user = { userName, gender, email, password };

    fetch('http://localhost:8080/user', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    }).then(() => {
      setName(null);
      setLastName(null);
      setGender(null);
      setEmail(null);
      setPassword(null);
      setUserName(null);
      document.getElementsByClassName("login-name")[0].value = '';
      document.getElementsByClassName("login-lastname")[0].value = '';
      document.getElementsByClassName("login-gender")[0].value = 'null';
      document.getElementsByClassName("login-email1")[0].value = '';
      document.getElementsByClassName("login-password")[0].value = '';
      document.getElementsByClassName("login-prijava")[0].style.display = "block";
      document.getElementsByClassName("login-registracija")[0].style.display = "none";
    })
  }

  const handleLogin = (e) => {
    e.preventDefault();

    const user = { email, password };

    fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    }).then(response => {
      return response.json();
    })
      .then((data) => {
        setAuth({ data })
        alert("Uspjesno ste prijavljeni")
        document.getElementsByClassName("login-button")[0].value = '';
        document.getElementsByClassName("login-input")[0].value = '';
        setEmail(null);
        setPassword(null);
      }).catch(error => {
        alert("Pogresno ste unijeli email ili lozinku")
        console.log('request failed', error);
      });
  }

  return (
    <div className="login-container">
      <Helmet>
        <title>Login - Movie booking app</title>
        <meta property="og:title" content="Login - Movie booking app" />
      </Helmet>
      <img
        alt="cinema"
        src="https://images.unsplash.com/photo-1627133805103-ce2d34ccdd37?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2fHxjaW5lbWF8ZW58MHx8fHwxNjU4OTQxMTQ3&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=900"
        className="login-cinema"
      />
      <nav data-role="Header" className="login-logo-and-menu">
        <div className="login-container1">
          <h1 className="login-logo">
            Movie booking app
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </h1>
        </div>
        <div className="login-right-side">
          <div className="login-links-container">
            <Link to="/" className="login-text button">
              Pocetna
            </Link>
            <Link to="/movies" className="login-navlink button">
              Filmovi
            </Link>
            <Link to="/izdvojeno" className="login-navlink1 button">
              Izdvojeno
            </Link>
            <Link to="/kontakt" className="login-navlink2 button">
              Kontakt
            </Link>
          </div>
        </div>
        <div data-type="BurgerMenu" className="login-tablet-menu">
          <svg viewBox="0 0 1024 1024" className="login-tablet-menu">
            <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
          </svg>
        </div>
        <div data-type="MobileMenu" className="login-mobile-menu">
          <div className="login-nav">
            <div className="login-top">
              <h1>Travel</h1>
              <div data-type="CloseMobileMenu" className="login-close-menu">
                <svg viewBox="0 0 1024 1024" className="login-icon03">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="login-right-side1">
              <div className="login-links-container1">
                <span className="login-text01">Home</span>
                <span className="login-text02">About</span>
                <span className="login-text03">Tour Packages</span>
                <span>Contact</span>
              </div>
              <a href="#main-section" className="login-link">
                <SolidButton button="Explore places"></SolidButton>
              </a>
            </div>
          </div>
          <div className="login-follow-container">
            <span className="login-text05">
              Follow us on
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <div className="login-icons-container">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                className="login-link1"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="login-icon05"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer noopener"
                className="login-link2"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="login-icon07"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="login-link3"
              >
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="login-icon09"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <img
        alt="image"
        src="https://images.unsplash.com/photo-1585647347129-7aebb8689a78?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE3fHxjaW5lbWF8ZW58MHx8fHwxNjU4OTQxMTQ3&amp;ixlib=rb-1.2.1&amp;q=80&amp;h=400"
        className="login-popcorn"
      />
      <form onSubmit={handleRegistration} className="login-registracija">
        <span className="login-text06">
          <span className="login-text07">Registracija</span>
          <br></br>
          <span></span>
        </span>
        <span className="login-ime">
          <span className="login-text10">Ime</span>
          <br></br>
          <span></span>
        </span>
        <input
          type="text"
          required
          placeholder="Vase ime"
          className="login-name input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <span className="login-prezime">
          <span className="login-text13">Prezime</span>
        </span>
        <input
          type="text"
          required
          placeholder="Vase prezime"
          className="login-lastname input"
          value={lastname}
          onChange={(e) => setUserName(name + ' ' + e.target.value)}
        />
        <span className="login-pol">
          <span className="login-text14">Pol</span>
          <br></br>
          <span></span>
        </span>
        <select
          className="login-gender content"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="null" selected>
            ------
          </option>
          <option value="Muski">Muski</option>
          <option value="Zenski">Zenski</option>
        </select>
        <span className="login-email">
          <span className="login-text17">Email</span>
        </span>
        <input
          type="email"
          required
          placeholder="Vas email"
          className="login-email1 input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <span className="login-lozinka">
          <span className="login-text18">Lozinka</span>
        </span>
        <input
          type="password"
          required
          placeholder="Vasa lozinka"
          className="login-password input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type='submit'
          className="login-registruj-se button content" >
          Registruj se
        </button>
      </form>
      <form onSubmit={handleLogin} className="login-prijava">
        <span className="login-text26 subheading">
          <span className="login-text27"></span>
          <span className="login-text28">Prijava</span>
          <br></br>
          <span></span>
        </span>
        <span className="login-text31">
          <span className="login-text32">Email</span>
        </span>
        <input
          type="email"
          required
          placeholder="Vas email"
          className="login-button input"
          onChange={(e) => setEmail(e.target.value)}
        />
        <span className="login-text33">
          <span className="login-text34">Lozinka</span>
        </span>
        <input
          type="password"
          required
          placeholder="Vasa lozinka"
          className="login-input input"
          onChange={(e) => setPassword(e.target.value)}
        />
          <button type="submit" className="login-prijavi-se button content">
            Prijavi se
          </button>
        <span className="login-idi-na-registraciju">
          <span>
            Nemate profil?
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <button onClick={showRegistration} className="button content" style={{ borderRadius: "4px" }}>
            Registruj se
          </button>
        </span>
      </form>
    </div>
  )
}

export default Login
