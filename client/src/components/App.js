import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

import jwt_decode from "jwt-decode";

import NotFound from "./pages/NotFound.js";
import Skeleton from "./pages/Skeleton.js";
import FeedPage from "./pages/FeedPage.js";
import MapPage from "./pages/MapPage.js";
import NavBar from "./modules/NavBar.js";

import "../utilities.css";
import "./App.css";

import { socket } from "../client-socket.js";

import { get, post } from "../utilities";

/**
 * Define the "App" component
 */
const App = () => {
  useEffect(() => {}, []);

  const [userId, setUserId] = useState(undefined);
  const [landing, setLanding] = useState(true);
  const location = useLocation();

  useEffect(() => {
    get("/api/whoami").then((user) => {
      if (user._id) {
        setUserId(user._id);
      }
    });
  }, []);

  const handleLogin = (credentialResponse) => {
    const userToken = credentialResponse.credential;
    const decodedCredential = jwt_decode(userToken);
    console.log(`Logged in as ${decodedCredential.name}`);
    post("/api/login", { token: userToken }).then((user) => {
      setUserId(user._id);
      post("/api/initsocket", { socketid: socket.id });
    });
  };

  const handleLogout = () => {
    setUserId(undefined);
    post("/api/logout");
  };

  const handleLandingChange = () => {
    setLanding(false);
  };

  useEffect(() => {}, [location]);

  return (
    <>
      <NavBar />
      <div className="App-container">
        <Routes>
          <Route
            path="/"
            element={
              <Skeleton
                path="/"
                handleLogin={handleLogin}
                handleLogout={handleLogout}
                userId={userId}
                setLanding={handleLandingChange}
              />
            }
          ></Route>
          <Route path="*" element={<NotFound />} />
          <Route path="/feed" element={<FeedPage />} />
          <Route path="/map" element={<MapPage />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
