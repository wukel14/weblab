import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";

const GOOGLE_CLIENT_ID =
  "1022090822547-onhpr32s0rsnm0b3mt92eejshuv1hgup.apps.googleusercontent.com";

const NavBar = ({ userId, handleLogin, handleLogout }) => {
  return (
    <div className="NavBar-container">
      <header>
        <nav>
          <div className="NavBar-title u-inlineBlock">Debate Time</div>
          <div className="NavBar-linkContainer u-inlineBlock">
            <ul>
              <li>
                <Link to="/" className="NavBar-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/feed" className="NavBar-link">
                  Feed
                </Link>
              </li>
              <li>
                <Link to="/map" className="NavBar-link">
                  Map
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
