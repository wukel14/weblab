import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";
import DarkMode from "../modules/DarkMode.js";

import "./Skeleton.css";
import { get, post } from "../../utilities";

const GOOGLE_CLIENT_ID =
  "1022090822547-onhpr32s0rsnm0b3mt92eejshuv1hgup.apps.googleusercontent.com";

const Skeleton = ({ userId, handleLogin, handleLogout }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleGuestClick = () => {
    navigate("/feed");
    window.location.reload();
  };

  const handleGoogleLogin = (credentialResponse) => {
    handleLogin(credentialResponse);

    // Navigate to homepage after login
    navigate("/");
  };

  useEffect(() => {
    get("/api/whoami").then((user) => {
      if (user._id) {
        setLoggedIn(true);
      }
    });
  }, []);

  return (
    <div className="Skeleton-container">
      <div className="Skeleton-content">
        <h1 className="Skeleton-header u-textCenter"> Debate Time</h1>
        <div className="Skeleton-loginpart u-flexColumn u-flex-alignCenter">
          {userId ? (
            // If user is logged in, show logout button
            <button
              onClick={() => {
                googleLogout();
                handleLogout();
              }}
            >
              Logout
            </button>
          ) : (
            // If user is not logged in, show Google login button
            <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
              <GoogleLogin
                className="GoogleLogin-button"
                onSuccess={handleGoogleLogin}
                onError={(err) => console.log(err)}
              />
            </GoogleOAuthProvider>
          )}
          <div
            className="Skeleton-guest u-clickable u-darken u-textCenter"
            onClick={handleGuestClick}
          >
            Click to see this week's debate!
          </div>
          <DarkMode className="DarkMode-button" />
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
