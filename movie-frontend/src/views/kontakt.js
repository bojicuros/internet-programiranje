import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import SolidButton from '../components/solid-button'
import './kontakt.css'

const Kontakt = () => {
  return (
    <div className="kontakt-container">
      <Helmet>
        <title>Kontakt - Movie booking app</title>
        <meta property="og:title" content="Kontakt - Movie booking app" />
      </Helmet>
      <div className="kontakt-header">
        <nav data-role="Header" className="kontakt-logo-and-menu">
          <div className="kontakt-container1">
            <h1 className="kontakt-logo">
              Movie booking app
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h1>
          </div>
          <div className="kontakt-right-side">
            <div className="kontakt-links-container">
              <Link to="/" className="kontakt-text button">
                Pocetna
              </Link>
              <Link to="/movies" className="kontakt-navlink button">
                Filmovi
              </Link>
              <Link to="/izdvojeno" className="kontakt-navlink1 button">
                Izdvojeno
              </Link>
              <Link to="/kontakt" className="kontakt-navlink2 button">
                Kontakt
              </Link>
            </div>
          </div>
          <div data-type="BurgerMenu" className="kontakt-tablet-menu">
            <svg viewBox="0 0 1024 1024" className="kontakt-tablet-menu">
              <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            </svg>
          </div>
          <div data-type="MobileMenu" className="kontakt-mobile-menu">
            <div className="kontakt-nav">
              <div className="kontakt-top">
                <h1>Travel</h1>
                <div data-type="CloseMobileMenu" className="kontakt-close-menu">
                  <svg viewBox="0 0 1024 1024" className="kontakt-icon03">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="kontakt-right-side1">
                <div className="kontakt-links-container1">
                  <span className="kontakt-text01">Home</span>
                  <span className="kontakt-text02">About</span>
                  <span className="kontakt-text03">Tour Packages</span>
                  <span>Contact</span>
                </div>
                <a href="#main-section" className="kontakt-link">
                  <SolidButton button="Explore places"></SolidButton>
                </a>
              </div>
            </div>
            <div className="kontakt-follow-container">
              <span className="kontakt-text05">
                Follow us on
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <div className="kontakt-icons-container">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="kontakt-link1"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="kontakt-icon05"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="kontakt-link2"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="kontakt-icon07"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="kontakt-link3"
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="kontakt-icon09"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="kontakt-info">
        <div className="kontakt-poruka">
          <span className="kontakt-text06">
            <span className="kontakt-text07"></span>
            <span className="kontakt-text08">KAKVI SU VASI UTISCI?</span>
            <br></br>
            <span className="kontakt-text10">POSALJITE NAM PORUKU</span>
          </span>
          <div className="kontakt-unos">
            <input
              type="text"
              placeholder="Vase ime"
              className="kontakt-ime input"
            />
            <input
              type="text"
              placeholder="Vas email"
              className="kontakt-vas-email input"
            />
            <input
              type="text"
              placeholder="Vasa poruka"
              className="kontakt-vasa-poruka input"
            />
          </div>
          <button type="submit" className="kontakt-posalji button">
            POSALJI PORUKU
          </button>
        </div>
        <div className="kontakt-kontakt">
          <span className="kontakt-text11">
            <span className="kontakt-text12"></span>
            <span className="kontakt-text13">KONTAKTNE INFORMACIJE</span>
          </span>
          <div className="kontakt-container2">
            <div className="kontakt-telefon">
              <svg viewBox="0 0 1024 1024" className="kontakt-icon11">
                <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
              </svg>
              <div className="kontakt-container3">
                <span className="kontakt-text14">Telefon</span>
                <span className="kontakt-text15">051/436-976</span>
              </div>
            </div>
            <div className="kontakt-email">
              <svg viewBox="0 0 1024 1024" className="kontakt-icon13">
                <path d="M512 470l342-214h-684zM854 768v-426l-342 212-342-212v426h684zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
              </svg>
              <div className="kontakt-container4">
                <span className="kontakt-text16">Email</span>
                <span className="kontakt-text17">moviebooking@cinema.com</span>
              </div>
            </div>
            <div className="kontakt-drustvene-mreze">
              <svg viewBox="0 0 1024 1024" className="kontakt-icon15">
                <path d="M938 726v-300h-170v300h170zM982 342q18 0 30 12t12 30v426q0 18-12 31t-30 13h-256q-18 0-31-13t-13-31v-426q0-18 13-30t31-12h256zM170 256v470h428v128h-598v-128h86v-470q0-34 25-60t59-26h768v86h-768z"></path>
              </svg>
              <div className="kontakt-container5">
                <span className="kontakt-text18">Drustvene mreze</span>
                <div className="kontakt-icons-container1">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="kontakt-link4"
                  >
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="kontakt-icon17"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="kontakt-link5"
                  >
                    <svg
                      viewBox="0 0 602.2582857142856 1024"
                      className="kontakt-icon19"
                    >
                      <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="kontakt-link6"
                  >
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="kontakt-icon21"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="kontakt-adresa">
        <span className="kontakt-text19">
          <span className="kontakt-text20">ADRESA</span>
        </span>
        <span className="kontakt-text21">
          Dr. Mladena Stojanovica 2, Banja Luka
        </span>
        <img
          alt="image"
          src="/playground_assets/screenshot%202022-07-30%20at%2011.33.35-1400w.png"
          className="kontakt-image"
        />
      </div>
    </div>
  )
}

export default Kontakt
