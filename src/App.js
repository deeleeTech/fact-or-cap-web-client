import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation'
//ROUTES++++++++++++++++++++++++++++
import Home from './ROUTES/Home';
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
import UpcomingGames from './ROUTES/UpcomingGames';
import Profile from './ROUTES/Profile';
import Friends from './ROUTES/Friends';
import History from './ROUTES/History';
import Facts from './ROUTES/Facts';
import './App.css';




export default function App() {
  return (
    <div className='App'>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Upcoming" element={<UpcomingGames />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Friends" element={<Friends />} />
        <Route path="/Facts" element={<Facts />} />
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
