import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import { useSpring, useTransition, animated } from 'react-spring'
//ROUTES++++++++++++++++++++++++++++
import Home from './ROUTES/Home';
import UpcomingGames from './ROUTES/UpcomingGames';
import Profile from './ROUTES/Profile';
import Friends from './ROUTES/Friends';
import History from './ROUTES/History';
import Facts from './ROUTES/Facts';
//AUTH ROUTES =====
import Login from './ROUTES/Login';
//++++++++++++++++++++++++++++++++++
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet
} from "react-router-dom";
import useAuth from './useAuth';
import './App.css';




export default function App() {
  const propsFade = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } }); //SPRING ANIMATION
  return (
    <div className='App'>
      <animated.div style={propsFade}>
          <Navigation />
        <Routes>
          <Route
            path="/"
            element={
              <animated.div style={propsFade}>
                <Home />
              </animated.div>
            } 
          />
          <Route
            path="/Home"
            element={
              <animated.div style={propsFade}>
                <Home />
              </animated.div>
            } 
          />
          <Route path="/Upcoming" element={<UpcomingGames />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Friends" element={<Friends />} />
          <Route path="/FactsBoard" element={<Facts />} />
          <Route path="/History" element={<History />} />
          {/* <Route
              path="/episodes"
              element={
                <RequireAuth>
                  <Episodes />
                </RequireAuth>
              }
            /> */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </animated.div>
    </div>
  );
}

function RequireAuth({ children }) {
  const { authed } = useAuth();
  const location = useLocation();

  return authed === true
    ? children
    : <Navigate
        to="/login"
        replace
        state={{ path: location.pathname }}
      />;
}
