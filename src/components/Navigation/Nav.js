import React, { useState } from "react";
import {HashLink as Link} from 'react-router-hash-link';
import { FaAlignJustify } from "react-icons/fa";
import './Nav.css';

const Nav = () => {

  const [state, setState] = useState(false);
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
          <ul className="navbar__left">
            <div className="navbar__left-logo">
              <Link className="navbar-brand" to="#" rel="tooltip">Amit's Portfolio</Link>
            </div>
          </ul>
          {state ? (
            <ul className="navbar__right">
              <li>
                <Link to="#">Home</Link>
              </li>
              <li>
                <Link to="#about">About</Link>
              </li>
              <li>
                <Link to="#education">Education</Link>
              </li>
              <li>
                <Link to="#skills">Skills</Link>
              </li>
              <li>
                <Link to="#projects">Projects</Link>
              </li>
              <li>
                <Link to="#contact">Contact</Link>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="toggle" onClick={() => setState(!state)}>
        <FaAlignJustify />
      </div>
    </nav>
  );
};

export default Nav;
