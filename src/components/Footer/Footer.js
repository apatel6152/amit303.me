import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaHeart
} from "react-icons/fa";
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer" id="footer">
      {/* <div className="container"> */}
        {/* <div className="contactSection"> */}
          <div className="row justifyCenter">
            <div className="col-12">
            
              {/* <div className="col-md-12 text-center"> */}
                <p className="footer_text">
                    Copyright ©2022 All rights reserved | This Portfolio is made with <FaHeart /> by <strong>Amit Patel</strong>
                </p>
              {/* </div> */}
              <ul className="contactCircles">
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
            </div>
          </div>
        </div>
      // </div>
    
  );
};

export default Footer;
