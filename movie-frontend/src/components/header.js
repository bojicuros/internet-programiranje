import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import SolidButton from './solid-button'
import './header.css'

const Header = (props) => {
  return (
    <div className={`header-header ${props.rootClassName} `}>
      <nav data-role="Header" className="header-logo-and-menu">
        <div className="header-container">
          <h1 className="header-logo">{props.Logo}</h1>
        </div>
        <div className="header-right-side">
          <div className="header-links-container">
            <Link to="/" className="header-text button">
              <span>Pocetna</span>
            </Link>
            <span className="header-text02 button">{props.text}</span>
            <span className="header-text03 button">{props.text1}</span>
            <span className="header-text04 button">{props.text2}</span>
          </div>
        </div>
        <div data-type="BurgerMenu" className="header-tablet-menu">
          <svg viewBox="0 0 1024 1024" className="header-tablet-menu">
            <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
          </svg>
        </div>
        <div data-type="MobileMenu" className="header-mobile-menu">
          <div className="header-nav">
            <div className="header-top">
              <h1>{props.Logo1}</h1>
              <div data-type="CloseMobileMenu" className="header-close-menu">
                <svg viewBox="0 0 1024 1024" className="header-icon03">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="header-right-side1">
              <div className="header-links-container1">
                <span className="header-text05">{props.text4}</span>
                <span className="header-text06">{props.text5}</span>
                <span className="header-text07">{props.text6}</span>
                <span>{props.text7}</span>
              </div>
              <a href="#main-section" className="header-link">
                <SolidButton button="Explore places"></SolidButton>
              </a>
            </div>
          </div>
          <div className="header-follow-container">
            <span className="header-text09">{props.text3}</span>
            <div className="header-icons-container">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                className="header-link1"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="header-icon05"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer noopener"
                className="header-link2"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="header-icon07"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="header-link3"
              >
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="header-icon09"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

Header.defaultProps = {
  rootClassName: '',
  text1: 'Tour Packages',
  Logo: 'Movie booking app ',
  text4: 'Home',
  text6: 'Tour Packages',
  text: 'Filmovi',
  text5: 'About',
  Logo1: 'Travel',
  text2: 'Kontakt',
  text7: 'Contact',
  text3: 'Follow us on ',
}

Header.propTypes = {
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  Logo: PropTypes.string,
  text4: PropTypes.string,
  text6: PropTypes.string,
  text: PropTypes.string,
  text5: PropTypes.string,
  Logo1: PropTypes.string,
  text2: PropTypes.string,
  text7: PropTypes.string,
  text3: PropTypes.string,
}

export default Header
