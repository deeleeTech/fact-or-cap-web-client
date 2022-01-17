import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import { useSpring, useTransition, animated } from 'react-spring';
import Axios from 'axios';
// REDUX >>>>>>>>>>>>>>>>>>>>>>>>>>>
import { useDispatch } from 'react-redux';
import { gather_NBA_games } from './__actions/gatherAllGames';
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//ROUTES++++++++++++++++++++++++++++
import Home from './ROUTES/Home';
import UpcomingGames from './ROUTES/UpcomingGames';
import Profile from './ROUTES/Profile';
import Friends from './ROUTES/Friends';
import History from './ROUTES/History';
import Facts from './ROUTES/Facts';
//AUTH ROUTES =====
import Login from './ROUTES/Login';
import Signup from './ROUTES/Signup';
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
  const dispatch = useDispatch();

  useEffect(()=>{
    let config = { //AXIOS CONFIG SETTINGS
      method: 'get',
      url: "http://localhost:5000/games/allNBA", 
      headers: { 'Content-Type': 'application/json' }
    };
    Axios( config ).then( res => { // BACKEND REQUEST
      let gamesData = res.data.resData;
      dispatch(gather_NBA_games(gamesData))
    }).catch( err => {
      console.log(err);
    })
  },[])

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
          <Route path="/signup" element={<Signup />} />
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
