import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import { useSpring, useTransition, animated } from 'react-spring';
import Axios from 'axios';
// REDUX >>>>>>>>>>>>>>>>>>>>>>>>>>>
import { useDispatch, useSelector } from 'react-redux';
import { gather_NBA_games, gather_NFL_games } from './__actions/gatherAllGames';
import { gather_game_bets } from './__actions/gatherAllGameBets';
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//ROUTES++++++++++++++++++++++++++++
import Home from './ROUTES/Home';
import Games from './ROUTES/Games';
import Profile from './ROUTES/Profile';
import Friends from './ROUTES/Friends';
import History from './ROUTES/History';
import Facts from './ROUTES/Facts';
import CreatePost from './ROUTES/CreatePost';
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
import Parlays from './ROUTES/Parlays';





export default function App() {
  const propsFade = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } }); //SPRING ANIMATION
  const dispatch = useDispatch();
  const liveURL = 'https://us-central1-main-server-deeleetech.cloudfunctions.net/app'

  const postDataReady = useSelector(state=>state.postData);

  //GETS NBA TEAM GAMES
  useEffect(()=>{
    let config = { //AXIOS CONFIG SETTINGS
      method: 'get',
      url: "https://us-central1-main-server-deeleetech.cloudfunctions.net/app/allNBAGames",  //LOCAL http://localhost:9000/games/allNBA
      headers: { 'Content-Type': 'application/json' }
    };
    Axios( config ).then( res => { // BACKEND REQUEST
      let gamesData = res.data.resData;
      dispatch(gather_NBA_games(gamesData))
    }).catch( err => {
      console.log(err);
    })
  },[])
  //GETS NFL TEAM GAMES
  useEffect(()=>{
    let config = { //AXIOS CONFIG SETTINGS
      method: 'get',
      url: "https://us-central1-main-server-deeleetech.cloudfunctions.net/app/allNFL", 
      headers: { 'Content-Type': 'application/json' }
    };
    Axios( config ).then( res => { // BACKEND REQUEST
      let gamesData = res.data.resData;
      dispatch(gather_NFL_games(gamesData))
    }).catch( err => {
      console.log(err);
    })
  },[])
  //GETS ALL GAME BETS
  useEffect(()=>{
    let config = { //AXIOS CONFIG SETTINGS
      method: 'get',
      url: "https://us-central1-main-server-deeleetech.cloudfunctions.net/app/allBets", 
      headers: { 'Content-Type': 'application/json' }
    };
    Axios( config ).then( res => { // BACKEND REQUEST
      let gameBetsData = res.data.betData;
      if(res.data.message != 'no_bets_found'){
        dispatch(gather_game_bets(gameBetsData))
      }
    }).catch( err => {
      console.log(err);
    })
  },[])

  return (
    <div className='App'>
      <animated.div style={propsFade}>
          <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Games" element={<Games />} />
          <Route path="/Facts" element={<Facts />} />
          <Route path="/Parlays" element={<Parlays />} />

          <Route
              path="/Profile"
              element={
                <RequireAuth>
                  <Profile /> 
                </RequireAuth>
              }
            />
          <Route path="/Friends" element={<Friends />} />
          <Route path="/History" element={<History />} />

          <Route
              path="/CreatePost"
              element={
                <RequireAuth>
                  {postDataReady != null ? <CreatePost /> : <Home />}
                </RequireAuth>
              }
            />
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
