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
import './App.css';
import Basketball from './ROUTES/Basketball';
import Football from './ROUTES/Football';



export default function App() {
  return (
    <div className='App'>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Basketball" element={<Basketball />} />
        <Route path="/Football" element={<Football />} />
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
