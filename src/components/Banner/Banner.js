import React from 'react';
import { useState } from 'react';
import './Banner.css';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram
} from 'react-icons/fa';
import './Banner.css';

const Banner = () => {
  const [intro] = useState({
    title: 'Amit Patel',
    text: "I'm Amit, A Freelance Web Designer and Developer",
    image: '/images/dp_low.png',
  });
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <ul className="header__ul">
                  <li>
                    <a href='https://www.facebook.com/people/Amit-Patel/100005975611113/'>
                      <FaFacebookF className="headerIcon"/>
                    </a>
                  </li>
                  <li>
                    <a href='https://twitter.com/amitpatel303'>
                      <FaTwitter className="headerIcon" />
                    </a>
                  </li>
                  <li>
                    <a href='https://www.linkedin.com/in/amit-patel-755a95178'>
                      <FaLinkedin className="headerIcon" />
                    </a>
                  </li>
                  <li>
                    <a href='https://www.instagram.com/amit_patel_303/'>
                      <FaInstagram className="headerIcon" />
                    </a>
                  </li>
                </ul>
                <h1>{intro.title}</h1>
                <p>{intro.text}</p>
                <div className="header__buttons">
                  <a href="/" className="btn btn-outline">
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner__img one-third js-fullheight order-md-last img"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
