import { React, useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

import { Helmet } from 'react-helmet'

import SolidButton from '../components/solid-button'
import './book.css'

const Book = () => {

  const { id } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [tickets, setTickets] = useState(null);
  const { auth } = useAuth();


  function arrayRemove(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }

  const bookSeat = (id) => {
    const element = document.getElementById(id);
    if (!element.classList.contains("book-button-taken")) {
      element.classList.toggle("book-button");
      element.classList.toggle("book-button-selected");
    }
    if (!element.classList.contains("book-button"))
      selectedSeats.push(id);
    else
      arrayRemove(selectedSeats, id);

    if (auth.data && selectedSeats.length > 0) {
      document.getElementsByClassName("book-potvrdi")[0].style.display = "block";
    } else {
      document.getElementsByClassName("book-potvrdi")[0].style.display = "none";
    }
  }

  const takenSeat = (id) => {
    const element = document.getElementById(id);
    if (element.classList.contains("book-button"))
      element.classList.toggle("book-button");
    if (!element.classList.contains("book-button-taken"))
      element.classList.toggle("book-button-taken");
  }

  const confirm = () => {

    fetch('http://localhost:8080/projection/' + id)
      .then(res => {
        return res.json();
      })
      .then((projection) => {
        if (projection) {
          selectedSeats.map((seat) => (
            addTicket(seat, projection)
          ))
        }
      });
  }

  const addTicket = (seat, projection) => {
    const user = auth.data;
    const seatNumber = seat.substring(1);
    const seatRow = seat.charAt(0);
    const ticket = { seatNumber, seatRow, projection, user };
    fetch('http://localhost:8080/ticket', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ticket)
    }).then(res => {
      return res.json();
    })
    .then((ticket) => {
      if (ticket) {
        console.log(ticket);
      }
    });
  }

  useEffect(() => {
    fetch('http://localhost:8080/tickets/projection/' + id)
      .then(res => {
        return res.json();
      })
      .then((data) => {
        setTickets(data);
      });
    if (tickets != null) {
      tickets.map((ticket) => (
        takenSeat(ticket.seatRow + ticket.seatNumber)
      ))
    }
  }, [tickets]);

  return (
    <div className="book-container">
      <Helmet>
        <title>Book - Movie booking app</title>
        <meta property="og:title" content="Book - Movie booking app" />
      </Helmet>
      <div className="book-header">
        <nav data-role="Header" className="book-logo-and-menu">
          <div className="book-container1">
            <h1 className="book-logo">
              Movie booking app
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h1>
          </div>
          <div className="book-right-side">
            <div className="book-links-container">
              <Link to="/" className="book-text button">
                Pocetna
              </Link>
              <Link to="/movies" className="book-navlink button">
                Filmovi
              </Link>
              <Link to="/izdvojeno" className="book-navlink1 button">
                Izdvojeno
              </Link>
              <Link to="/kontakt" className="book-navlink2 button">
                Kontakt
              </Link>
            </div>
          </div>
          <div data-type="BurgerMenu" className="book-tablet-menu">
            <svg viewBox="0 0 1024 1024" className="book-tablet-menu">
              <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            </svg>
          </div>
          <div data-type="MobileMenu" className="book-mobile-menu">
            <div className="book-nav">
              <div className="book-top">
                <h1>Travel</h1>
                <div data-type="CloseMobileMenu" className="book-close-menu">
                  <svg viewBox="0 0 1024 1024" className="book-icon03">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="book-right-side1">
                <div className="book-links-container1">
                  <span className="book-text01">Home</span>
                  <span className="book-text01">About</span>
                  <span className="book-text01">Tour Packages</span>
                  <span>Contact</span>
                </div>
                <a href="#main-section" className="book-link">
                  <SolidButton button="Explore places"></SolidButton>
                </a>
              </div>
            </div>
            <div className="book-follow-container">
              <span className="book-text05">
                Follow us on
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <div className="book-icons-container">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="book-link1"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="book-icon05"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="book-link2"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="book-icon07"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="book-link3"
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="book-icon09"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="book-ekran">
        <img
          alt="image"
          src="/playground_assets/pngitem_608859-1200w.png"
          className="book-neon"
        />
      </div>
      <div className="book-sva-sjedista">
        <div className="book-lijeva-strana">
          <div className="book-prvi-red">
            <button id='A1' onClick={() => (bookSeat('A1'))} className="book-button book-shadow1">1</button>
            <button id='A2' onClick={() => (bookSeat('A2'))} className="book-button book-shadow1">2</button>
            <button id='A3' onClick={() => (bookSeat('A3'))} className="book-button book-shadow1">3</button>
            <button id='A4' onClick={() => (bookSeat('A4'))} className="book-button book-shadow1">4</button>
            <button id='A5' onClick={() => (bookSeat('A5'))} className="book-button book-shadow1">5</button>
            <button id='A6' onClick={() => (bookSeat('A6'))} className="book-button book-shadow1">6</button>
            <button id='A7' onClick={() => (bookSeat('A7'))} className="book-button book-shadow1">7</button>
            <button id='A8' onClick={() => (bookSeat('A8'))} className="book-button book-shadow1">8</button>
          </div>
          <div className="book-drugi-red">
            <button id='B1' onClick={() => (bookSeat('B1'))} className="book-button book-shadow1">1</button>
            <button id='B2' onClick={() => (bookSeat('B2'))} className="book-button book-shadow1">2</button>
            <button id='B3' onClick={() => (bookSeat('B3'))} className="book-button book-shadow1">3</button>
            <button id='B4' onClick={() => (bookSeat('B4'))} className="book-button book-shadow1">4</button>
            <button id='B5' onClick={() => (bookSeat('B5'))} className="book-button book-shadow1">5</button>
            <button id='B6' onClick={() => (bookSeat('B6'))} className="book-button book-shadow1">6</button>
            <button id='B7' onClick={() => (bookSeat('B7'))} className="book-button book-shadow1">7</button>
            <button id='B8' onClick={() => (bookSeat('B8'))} className="book-button book-shadow1">8</button>
          </div>
          <div className="book-treci-red">
            <button id='C1' onClick={() => (bookSeat('C1'))} className="book-button book-shadow1">1</button>
            <button id='C2' onClick={() => (bookSeat('C2'))} className="book-button book-shadow1">2</button>
            <button id='C3' onClick={() => (bookSeat('C3'))} className="book-button book-shadow1">3</button>
            <button id='C4' onClick={() => (bookSeat('C4'))} className="book-button book-shadow1">4</button>
            <button id='C5' onClick={() => (bookSeat('C5'))} className="book-button book-shadow1">5</button>
            <button id='C6' onClick={() => (bookSeat('C6'))} className="book-button book-shadow1">6</button>
            <button id='C7' onClick={() => (bookSeat('C7'))} className="book-button book-shadow1">7</button>
            <button id='C8' onClick={() => (bookSeat('C8'))} className="book-button book-shadow1">8</button>
          </div>
          <div className="book-cetvrti-red">
            <button id='D1' onClick={() => (bookSeat('D1'))} className="book-button book-shadow1">1</button>
            <button id='D2' onClick={() => (bookSeat('D2'))} className="book-button book-shadow1">2</button>
            <button id='D3' onClick={() => (bookSeat('D3'))} className="book-button book-shadow1">3</button>
            <button id='D4' onClick={() => (bookSeat('D4'))} className="book-button book-shadow1">4</button>
            <button id='D5' onClick={() => (bookSeat('D5'))} className="book-button book-shadow1">5</button>
            <button id='D6' onClick={() => (bookSeat('D6'))} className="book-button book-shadow1">6</button>
            <button id='D7' onClick={() => (bookSeat('D7'))} className="book-button book-shadow1">7</button>
            <button id='D8' onClick={() => (bookSeat('D8'))} className="book-button book-shadow1">8</button>
          </div>
          <div className="book-peti-red">
            <button id='E1' onClick={() => (bookSeat('E1'))} className="book-button book-shadow1">1</button>
            <button id='E2' onClick={() => (bookSeat('E2'))} className="book-button book-shadow1">2</button>
            <button id='E3' onClick={() => (bookSeat('E3'))} className="book-button book-shadow1">3</button>
            <button id='E4' onClick={() => (bookSeat('E4'))} className="book-button book-shadow1">4</button>
            <button id='E5' onClick={() => (bookSeat('E5'))} className="book-button book-shadow1">5</button>
            <button id='E6' onClick={() => (bookSeat('E6'))} className="book-button book-shadow1">6</button>
            <button id='E7' onClick={() => (bookSeat('E7'))} className="book-button book-shadow1">7</button>
            <button id='E8' onClick={() => (bookSeat('E8'))} className="book-button book-shadow1">8</button>
          </div>
          <div className="book-sesti-red">
            <button id='F1' onClick={() => (bookSeat('F1'))} className="book-button book-shadow1">1</button>
            <button id='F2' onClick={() => (bookSeat('F2'))} className="book-button book-shadow1">2</button>
            <button id='F3' onClick={() => (bookSeat('F3'))} className="book-button book-shadow1">3</button>
            <button id='F4' onClick={() => (bookSeat('F4'))} className="book-button book-shadow1">4</button>
            <button id='F5' onClick={() => (bookSeat('F5'))} className="book-button book-shadow1">5</button>
            <button id='F6' onClick={() => (bookSeat('F6'))} className="book-button book-shadow1">6</button>
            <button id='F7' onClick={() => (bookSeat('F7'))} className="book-button book-shadow1">7</button>
            <button id='F8' onClick={() => (bookSeat('F8'))} className="book-button book-shadow1">8</button>
          </div>
          <div className="book-sedmi-red">
            <button id='G1' onClick={() => (bookSeat('G1'))} className="book-button book-shadow1">1</button>
            <button id='G2' onClick={() => (bookSeat('G2'))} className="book-button book-shadow1">2</button>
            <button id='G3' onClick={() => (bookSeat('G3'))} className="book-button book-shadow1">3</button>
            <button id='G4' onClick={() => (bookSeat('G4'))} className="book-button book-shadow1">4</button>
            <button id='G5' onClick={() => (bookSeat('G5'))} className="book-button book-shadow1">5</button>
            <button id='G6' onClick={() => (bookSeat('G6'))} className="book-button book-shadow1">6</button>
            <button id='G7' onClick={() => (bookSeat('G7'))} className="book-button book-shadow1">7</button>
            <button id='G8' onClick={() => (bookSeat('G8'))} className="book-button book-shadow1">8</button>
          </div>
          <div className="book-osmi-red">
            <button id='H1' onClick={() => (bookSeat('H1'))} className="book-button book-shadow1">1</button>
            <button id='H2' onClick={() => (bookSeat('H2'))} className="book-button book-shadow1">2</button>
            <button id='H3' onClick={() => (bookSeat('H3'))} className="book-button book-shadow1">3</button>
            <button id='H4' onClick={() => (bookSeat('H4'))} className="book-button book-shadow1">4</button>
            <button id='H5' onClick={() => (bookSeat('H5'))} className="book-button book-shadow1">5</button>
            <button id='H6' onClick={() => (bookSeat('H6'))} className="book-button book-shadow1">6</button>
            <button id='H7' onClick={() => (bookSeat('H7'))} className="book-button book-shadow1">7</button>
            <button id='H8' onClick={() => (bookSeat('H8'))} className="book-button book-shadow1">8</button>
          </div>
        </div>
        <div className="book-srediste">
          <span className="book-text06">
            A
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="book-text07">
            B
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="book-text08">
            C
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="book-text09">
            D
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="book-text10">E</span>
          <span className="book-text11">F</span>
          <span className="book-text12">G</span>
          <span className="book-text13">H</span>
        </div>
        <div className="book-desna-strana">
          <div className="book-prvi-red1">
            <button id='A9' onClick={() => (bookSeat('A9'))} className="book-button book-shadow2">9</button>
            <button id='A10' onClick={() => (bookSeat('A10'))} className="book-button book-shadow2">10</button>
            <button id='A11' onClick={() => (bookSeat('A11'))} className="book-button book-shadow2">11</button>
            <button id='A12' onClick={() => (bookSeat('A12'))} className="book-button book-shadow2">12</button>
            <button id='A13' onClick={() => (bookSeat('A13'))} className="book-button book-shadow2">13</button>
            <button id='A14' onClick={() => (bookSeat('A14'))} className="book-button book-shadow2">14</button>
            <button id='A15' onClick={() => (bookSeat('A15'))} className="book-button book-shadow2">15</button>
            <button id='A16' onClick={() => (bookSeat('A16'))} className="book-button book-shadow2">16</button>
          </div>
          <div className="book-drugi-red1">
            <button id='B9' onClick={() => (bookSeat('B9'))} className="book-button book-shadow2">9</button>
            <button id='B10' onClick={() => (bookSeat('B10'))} className="book-button book-shadow2">10</button>
            <button id='B11' onClick={() => (bookSeat('B11'))} className="book-button book-shadow2">11</button>
            <button id='B12' onClick={() => (bookSeat('B12'))} className="book-button book-shadow2">12</button>
            <button id='B13' onClick={() => (bookSeat('B13'))} className="book-button book-shadow2">13</button>
            <button id='B14' onClick={() => (bookSeat('B14'))} className="book-button book-shadow2">14</button>
            <button id='B15' onClick={() => (bookSeat('B15'))} className="book-button book-shadow2">15</button>
            <button id='B16' onClick={() => (bookSeat('B16'))} className="book-button book-shadow2">16</button>
          </div>
          <div className="book-treci-red1">
            <button id='C9' onClick={() => (bookSeat('C9'))} className="book-button book-shadow2">9</button>
            <button id='C10' onClick={() => (bookSeat('C10'))} className="book-button book-shadow2">10</button>
            <button id='C11' onClick={() => (bookSeat('C11'))} className="book-button book-shadow2">11</button>
            <button id='C12' onClick={() => (bookSeat('C12'))} className="book-button book-shadow2">12</button>
            <button id='C13' onClick={() => (bookSeat('C13'))} className="book-button book-shadow2">13</button>
            <button id='C14' onClick={() => (bookSeat('C14'))} className="book-button book-shadow2">14</button>
            <button id='C15' onClick={() => (bookSeat('C15'))} className="book-button book-shadow2">15</button>
            <button id='C16' onClick={() => (bookSeat('C16'))} className="book-button book-shadow2">16</button>
          </div>
          <div className="book-cetvrti-red1">
            <button id='D9' onClick={() => (bookSeat('D9'))} className="book-button book-shadow2">9</button>
            <button id='D10' onClick={() => (bookSeat('D10'))} className="book-button book-shadow2">10</button>
            <button id='D11' onClick={() => (bookSeat('D11'))} className="book-button book-shadow2">11</button>
            <button id='D12' onClick={() => (bookSeat('D12'))} className="book-button book-shadow2">12</button>
            <button id='D13' onClick={() => (bookSeat('D13'))} className="book-button book-shadow2">13</button>
            <button id='D14' onClick={() => (bookSeat('D14'))} className="book-button book-shadow2">14</button>
            <button id='D15' onClick={() => (bookSeat('D15'))} className="book-button book-shadow2">15</button>
            <button id='D16' onClick={() => (bookSeat('D16'))} className="book-button book-shadow2">16</button>
          </div>
          <div className="book-peti-red1">
            <button id='E9' onClick={() => (bookSeat('E9'))} className="book-button book-shadow2">9</button>
            <button id='E10' onClick={() => (bookSeat('E10'))} className="book-button book-shadow2">10</button>
            <button id='E11' onClick={() => (bookSeat('E11'))} className="book-button book-shadow2">11</button>
            <button id='E12' onClick={() => (bookSeat('E12'))} className="book-button book-shadow2">12</button>
            <button id='E13' onClick={() => (bookSeat('E13'))} className="book-button book-shadow2">13</button>
            <button id='E14' onClick={() => (bookSeat('E14'))} className="book-button book-shadow2">14</button>
            <button id='E15' onClick={() => (bookSeat('E15'))} className="book-button book-shadow2">15</button>
            <button id='E16' onClick={() => (bookSeat('E16'))} className="book-button book-shadow2">16</button>
          </div>
          <div className="book-sesti-red1">
            <button id='F9' onClick={() => (bookSeat('F9'))} className="book-button book-shadow2">9</button>
            <button id='F10' onClick={() => (bookSeat('F10'))} className="book-button book-shadow2">10</button>
            <button id='F11' onClick={() => (bookSeat('F11'))} className="book-button book-shadow2">11</button>
            <button id='F12' onClick={() => (bookSeat('F12'))} className="book-button book-shadow2">12</button>
            <button id='F13' onClick={() => (bookSeat('F13'))} className="book-button book-shadow2">13</button>
            <button id='F14' onClick={() => (bookSeat('F14'))} className="book-button book-shadow2">14</button>
            <button id='F15' onClick={() => (bookSeat('F15'))} className="book-button book-shadow2">15</button>
            <button id='F16' onClick={() => (bookSeat('F16'))} className="book-button book-shadow2">16</button>
          </div>
          <div className="book-sedmi-red1">
            <button id='G9' onClick={() => (bookSeat('G9'))} className="book-button book-shadow2">9</button>
            <button id='G10' onClick={() => (bookSeat('G10'))} className="book-button book-shadow2">10</button>
            <button id='G11' onClick={() => (bookSeat('G11'))} className="book-button book-shadow2">11</button>
            <button id='G12' onClick={() => (bookSeat('G12'))} className="book-button book-shadow2">12</button>
            <button id='G13' onClick={() => (bookSeat('G13'))} className="book-button book-shadow2">13</button>
            <button id='G14' onClick={() => (bookSeat('G14'))} className="book-button book-shadow2">14</button>
            <button id='G15' onClick={() => (bookSeat('G15'))} className="book-button book-shadow2">15</button>
            <button id='G16' onClick={() => (bookSeat('G16'))} className="book-button book-shadow2">16</button>
          </div>
          <div className="book-osmi-red1">
            <button id='H9' onClick={() => (bookSeat('H9'))} className="book-button book-shadow2">9</button>
            <button id='H10' onClick={() => (bookSeat('H10'))} className="book-button book-shadow2">10</button>
            <button id='H11' onClick={() => (bookSeat('H11'))} className="book-button book-shadow2">11</button>
            <button id='H12' onClick={() => (bookSeat('H12'))} className="book-button book-shadow2">12</button>
            <button id='H13' onClick={() => (bookSeat('H13'))} className="book-button book-shadow2">13</button>
            <button id='H14' onClick={() => (bookSeat('H14'))} className="book-button book-shadow2">14</button>
            <button id='H15' onClick={() => (bookSeat('H15'))} className="book-button book-shadow2">15</button>
            <button id='H16' onClick={() => (bookSeat('H16'))} className="book-button book-shadow2">16</button>
          </div>
        </div>
      </div>
      <div className="book-informacije">
        <div className="book-boje-info">
          <span className="book-text14">Slobodno sjediste</span>
          <button className="book-button128 button"></button>
          <span className="book-text15">Zauzeto sjediste</span>
          <button className="book-button129 button"></button>
          <span className="book-text16">Izabrano sjediste</span>
          <button className="book-button130 button"></button>
        </div>
        <button onClick={() => (confirm())} type="submit" className="book-potvrdi button">
          POTVRDI
        </button>
      </div>
      <div className="book-footer">
        <div className="book-menu">
          <h1 className="book-logo2">Movie booking app</h1>
          <div className="book-links-container2">
            <div className="book-container2">
              <span className="book-text17">Filmovi</span>
              <span className="book-text18">Izdvojeno</span>
              <span className="book-text19">Posebne ponude</span>
              <span className="book-link4">Uskoro se prikazuje</span>
            </div>
            <div className="book-container3">
              <span className="book-text20">O nama</span>
              <span className="book-text21">FAQ</span>
              <span className="book-text22">Rok i uslovi</span>
              <span className="book-text23">Kontakt</span>
            </div>
          </div>
          <div className="book-follow-container1">
            <span className="book-text24">Pratite nas na</span>
            <div className="book-icons-container1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                className="book-link5"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="book-icon11"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer noopener"
                className="book-link6"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="book-icon13"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="book-link7"
              >
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="book-icon15"
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

export default
  Book