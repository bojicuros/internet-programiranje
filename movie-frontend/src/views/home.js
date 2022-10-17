import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'
import useAuth from '../hooks/useAuth'

import SolidButton from '../components/solid-button'
import './home.css'


const Home = () => {

  const { auth } = useAuth();

  function Greeting() {
    if (auth.data) {
      return (
        <Link to="/profile">
          <svg viewBox="0 0 731.4285714285713 1024" className="home-icon" >
            <path d="M731.429 799.429c0 83.429-54.857 151.429-121.714 151.429h-488c-66.857 0-121.714-68-121.714-151.429 0-150.286 37.143-324 186.857-324 46.286 45.143 109.143 73.143 178.857 73.143s132.571-28 178.857-73.143c149.714 0 186.857 173.714 186.857 324zM585.143 292.571c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429z"></path>
          </svg>
        </Link>)
    } else {
      return (<Link to="/login" className="home-navlink3">
        <SolidButton
          button="Prijava"
          rootClassName="solid-button-root-class-name"
          className="home-component"
        ></SolidButton>
      </Link>)
    }
  }

  return (
    <div className="home-container">
      <Helmet>
        <title>Movie booking app</title>
        <meta property="og:title" content="Movie booking app" />
      </Helmet>
      <div className="home-gornji-dio">
        <nav data-role="Header" className="home-header">
          <div className="home-container01">
            <h1 className="home-logo">
              Movie booking app
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h1>
          </div>
          <div className="home-right-side">
            <div className="home-links-container">
              <Link to="/" className="home-navlink">
                Pocetna
              </Link>
              <Link to="/movies" className="home-navlink">
                Filmovi
              </Link>
              <Link to="/izdvojeno" className="home-navlink1">
                Izdvojeno
              </Link>
              <Link to="/kontakt" className="home-navlink2">
                Kontakt
              </Link>
            </div>
            <Greeting />
          </div>
          <div data-type="BurgerMenu" className="home-tablet-menu">
            <svg viewBox="0 0 1024 1024" className="home-tablet-menu">
              <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            </svg>
          </div>
          <div data-type="MobileMenu" className="home-mobile-menu">
            <div className="home-nav">
              <div className="home-top">
                <h1>Travel</h1>
                <div data-type="CloseMobileMenu" className="home-close-menu">
                  <svg viewBox="0 0 1024 1024" className="home-icon05">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="home-right-side1">
                <div className="home-links-container1">
                  <span className="home-text01">Home</span>
                  <span className="home-text02">About</span>
                  <span className="home-text03">Tour Packages</span>
                  <span>Contact</span>
                </div>
                <a href="#main-section" className="home-link">
                  <SolidButton button="Explore places"></SolidButton>
                </a>
              </div>
            </div>
            <div className="home-follow-container">
              <span className="home-text05">
                Follow us on
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <div className="home-icons-container">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link1"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon07"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link2"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="home-icon09"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link3"
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon11"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="home-platno">
          <h1 className="heading home-text06">Najnoviji filmovi</h1>
          <div className="home-content-container">
            <h2 className="subheading home-subheading">
              Novi kino program sve sedmice
            </h2>
            <span className="home-text07">
              <span>
                Svaki film je pazljivo izabran i odlicno ocijenjen.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>Filmovi prvo stizu kod nas.</span>
            </span>
            <div className="solid-button-container  ">
              <Link to="/movies" class="solid-button-button button">Pogledajte sve filmove
              </Link>
              </div>
          </div>
        </div>
      </div>
      <div id="main-section" className="home-sredisnji-dio">
        <h1>Stvari po kojima smo mi poznati</h1>
        <span className="home-text12"></span>
        <div className="home-cards-container">
          <div className="home-container02">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fGNpbmVtYXxlbnwwfHx8fDE2NTg5NDExNDc&amp;ixlib=rb-1.2.1&amp;w=300"
              className="home-image"
            />
            <div className="home-container03">
              <span className="home-text13">Tradicija</span>
            </div>
          </div>
          <div className="home-container04">
            <img
              alt="image"
              src="https://media.istockphoto.com/photos/family-in-the-cinema-picture-id1180700105?k=20&amp;m=1180700105&amp;s=170667a&amp;w=0&amp;h=MrLMrFiI3u0yQ4HZANJcDLVRSNlXUKxhi6k-rtj3njQ="
              className="home-image1"
            />
            <div className="home-container05">
              <span className="home-text14">Zabava za cijelu porodicu</span>
            </div>
          </div>
          <div className="home-container06">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1519178614-68673b201f36?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE1fHxsb2NhdGlvbnxlbnwwfHx8fDE2NTkxMTI4NjQ&amp;ixlib=rb-1.2.1&amp;w=300"
              className="home-image2"
            />
            <div className="home-container07">
              <span className="home-text15">Lokacija</span>
            </div>
          </div>
          <div className="home-container08">
            <img
              alt="image"
              src="https://d2cbg94ubxgsnp.cloudfront.net/Pictures/2000xAny/5/2/7/139527_shutterstock_773743066.jpg"
              className="home-image3"
            />
            <div className="home-container09">
              <span className="home-text16">Najukusnije kokice</span>
            </div>
          </div>
          <div className="home-container10">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1608170825938-a8ea0305d46c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDl8fGNpbmVtYXxlbnwwfHx8fDE2NTkxMTI5MDA&amp;ixlib=rb-1.2.1&amp;w=300"
              className="home-image4"
            />
            <div className="home-container11">
              <span className="home-text17">Sjedista za parove</span>
            </div>
          </div>
          <div className="home-container12">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1617914309185-9e63b3badfca?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDM2fHxjaW5lbWF8ZW58MHx8fHwxNjU5MTEyOTAx&amp;ixlib=rb-1.2.1&amp;w=300"
              className="home-image5"
            />
            <div className="home-container13">
              <span className="home-text18">Udobnost</span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-testimonial">
        <div className="home-container14">
          <h1 className="home-text19">
            <span>Sta nasi klijenti kazu</span>
          </h1>
          <span className="home-text21">
            <span>
              Procitajte neke od brojnih utisaka koje su ostavili nasi klijenti
            </span>
          </span>
          <div className="home-utisci">
            <div className="home-testimonial-card">
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon13">
                <path d="M438.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714zM950.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714z"></path>
              </svg>
              <div className="home-testimonial1">
                <span className="home-text23">
                  Kino u svetskom stilu, opuštena atmosfera ,komforan ambijent,
                  kulturna posluga. Veliki izbor filmova i preukusne kokice.
                  Filmovi za sve uzraste. Pravo mjesto za citavu porodicu.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text24">Ana Ilic</span>
                <img
                  alt="profile"
                  src="https://images.unsplash.com/photo-1542740348-39501cd6e2b4?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fHdvbWFufGVufDB8fHx8MTY1OTM0MzM2MQ&amp;ixlib=rb-1.2.1&amp;w=200"
                  className="home-image6"
                />
              </div>
            </div>
            <div className="home-testimonial-card1">
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon15">
                <path d="M438.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714zM950.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714z"></path>
              </svg>
              <div className="home-testimonial2">
                <span className="home-text25">
                  <span>
                    Ekipa za pet. Jako ljubazno osoblje i kada dolazim sa
                    društvom i kada je dječiji rođendan bio puno strpljenja i
                    volje. Čisto i uredno, odlična ponuda hrane i pića. Odlična
                    ponuda i filmova.
                  </span>
                  <br></br>
                  <span></span>
                </span>
                <span className="home-text28">Kristina Boric</span>
                <img
                  alt="profile"
                  src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDR8fHdvbWFufGVufDB8fHx8MTY1OTM0MzM2MQ&amp;ixlib=rb-1.2.1&amp;w=200"
                  className="home-image7"
                />
              </div>
            </div>
            <div className="home-testimonial-card2">
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon17">
                <path d="M438.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714zM950.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714z"></path>
              </svg>
              <div className="home-testimonial3">
                <span className="home-text29">
                  Odlicno opremljene kino sale: ogroman ekran, dobar zvuk i
                  udobna sjedista. Zaista sam uzivao gledajuci film.
                </span>
                <span className="home-text30">Luka Jovic</span>
                <img
                  alt="profile"
                  src="https://images.unsplash.com/photo-1615109398623-88346a601842?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxtYW58ZW58MHx8fHwxNjU5MzQzMzc2&amp;ixlib=rb-1.2.1&amp;w=200"
                  className="home-image8"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-footer">
        <div className="home-menu">
          <h1 className="home-logo2">Movie booking app</h1>
          <div className="home-links-container2">
            <div className="home-container15">
              <span className="home-text31">Filmovi</span>
              <span className="home-text32">Izdvojeno</span>
              <span className="home-text33">Posebne ponude</span>
              <span className="home-link4">Uskoro se prikazuje</span>
            </div>
            <div className="home-container16">
              <span className="home-text34">O nama</span>
              <span className="home-text35">FAQ</span>
              <span className="home-text36">Rok i uslovi</span>
              <span className="home-text37">Kontakt</span>
            </div>
          </div>
          <div className="home-follow-container1">
            <span className="home-text38">Pratite nas na</span>
            <div className="home-icons-container1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link5"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon19"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link6"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="home-icon21"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link7"
              >
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon23"
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

export default Home
