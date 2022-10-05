import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import SolidButton from '../components/solid-button'
import './izdvojeno.css'

const Izdvojeno = () => {

  return (
    <div className="izdvojeno-container">
      <Helmet>
        <title>Izdvojeno - Movie booking app</title>
        <meta property="og:title" content="Izdvojeno - Movie booking app" />
      </Helmet>
      <div className="izdvojeno-header">
        <nav data-role="Header" className="izdvojeno-logo-and-menu">
          <div className="izdvojeno-container1">
            <h1 className="izdvojeno-logo">
              Movie booking app
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h1>
          </div>
          <div className="izdvojeno-right-side">
            <div className="izdvojeno-links-container">
              <Link to="/" className="izdvojeno-text button">
                Pocetna
              </Link>
              <Link to="/movies" className="izdvojeno-navlink button">
                Filmovi
              </Link>
              <Link to="/izdvojeno" className="izdvojeno-navlink1 button">
                Izdvojeno
              </Link>
              <Link to="/kontakt" className="izdvojeno-navlink2 button">
                Kontakt
              </Link>
            </div>
          </div>
          <div data-type="BurgerMenu" className="izdvojeno-tablet-menu">
            <svg viewBox="0 0 1024 1024" className="izdvojeno-tablet-menu">
              <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            </svg>
          </div>
          <div data-type="MobileMenu" className="izdvojeno-mobile-menu">
            <div className="izdvojeno-nav">
              <div className="izdvojeno-top">
                <h1>Travel</h1>
                <div
                  data-type="CloseMobileMenu"
                  className="izdvojeno-close-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="izdvojeno-icon03">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="izdvojeno-right-side1">
                <div className="izdvojeno-links-container1">
                  <span className="izdvojeno-text01">Home</span>
                  <span className="izdvojeno-text02">About</span>
                  <span className="izdvojeno-text03">Tour Packages</span>
                  <span>Contact</span>
                </div>
                <a href="#main-section" className="izdvojeno-link">
                  <SolidButton button="Explore places"></SolidButton>
                </a>
              </div>
            </div>
            <div className="izdvojeno-follow-container">
              <span className="izdvojeno-text05">
                Follow us on
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <div className="izdvojeno-icons-container">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="izdvojeno-link1"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="izdvojeno-icon05"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="izdvojeno-link2"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="izdvojeno-icon07"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="izdvojeno-link3"
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="izdvojeno-icon09"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="izdvojeno-privatno-kino">
        <div className="izdvojeno-container2">
          <h1 className="izdvojeno-text06">Tvoje privatno kino</h1>
          <span className="izdvojeno-text07">
            tvoja dvorana, tvoj film, ti biras s kim
          </span>
        </div>
        <img
          alt="image"
          src="https://www.oerlive.com/wp-content/uploads/2020/01/shutterstock_499695973.jpg"
          className="izdvojeno-image"
        />
      </div>
      <div className="izdvojeno-hrana-u-kinu">
        <div className="izdvojeno-container3">
          <h1 className="izdvojeno-text08">Hrana u kinu</h1>
          <span className="izdvojeno-text09">NOVO U PONUDI</span>
        </div>
        <img
          alt="image"
          src="https://cdn.australia247.info/assets/uploads/4b7de2a5bcd733eab41637dd41818673_-victoria-whitehorse-city-burwood-east-reading-cinemas-burwood-03-8820-6110html.jpg"
          className="izdvojeno-image1"
        />
      </div>
      <div className="izdvojeno-loyalty-klub">
        <div className="izdvojeno-container4">
          <h1 className="izdvojeno-text10">Loyalty klub</h1>
          <span className="izdvojeno-text11">
            Popust za porodicu, gratis ulaznice...
          </span>
        </div>
        <img
          alt="image"
          src="https://www.boxofficepro.com/wp-content/uploads/2021/06/AdobeStock_298516782-scaled.jpeg"
          className="izdvojeno-image2"
        />
      </div>
      <div className="izdvojeno-footer">
        <div className="izdvojeno-menu">
          <h1 className="izdvojeno-logo2">Movie booking app</h1>
          <div className="izdvojeno-links-container2">
            <div className="izdvojeno-container5">
              <span className="izdvojeno-text12">Filmovi</span>
              <span className="izdvojeno-text13">Izdvojeno</span>
              <span className="izdvojeno-text14">Posebne ponude</span>
              <span className="izdvojeno-link4">Uskoro se prikazuje</span>
            </div>
            <div className="izdvojeno-container6">
              <span className="izdvojeno-text15">O nama</span>
              <span className="izdvojeno-text16">FAQ</span>
              <span className="izdvojeno-text17">Rok i uslovi</span>
              <span className="izdvojeno-text18">Kontakt</span>
            </div>
          </div>
          <div className="izdvojeno-follow-container1">
            <span className="izdvojeno-text19">Pratite nas na</span>
            <div className="izdvojeno-icons-container1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                className="izdvojeno-link5"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="izdvojeno-icon11"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer noopener"
                className="izdvojeno-link6"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="izdvojeno-icon13"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="izdvojeno-link7"
              >
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="izdvojeno-icon15"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Izdvojeno
