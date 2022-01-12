import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'
import useAuth from '../useAuth'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';


export default function Login(props) {

    const customStyles = {
        'containerStyle': { 
            textAlign: 'center',
            paddingTop: '40px'
        },
        'loginStyle': {
            backgroundColor: 'white',
            borderRadius: '4px',
            border: '3px solid black'
        },
        'titleStyle': {
            fontSize: '20px',
            fontWeight: '700'
        }
    }

    const navigate = useNavigate();
    const { login } = useAuth();
    const { state } = useLocation();

    const handleLogin = () => {
        login().then(() => {
            navigate(state?.path || "/dashboard");
        });
      };

    return (
        <Grid container sx={customStyles.containerStyle}>
            <Grid item xs={3}></Grid>
            <Grid item xs={6} sx={customStyles.loginStyle}>
                  <Grid container>
                      <Grid item xs={12} sx={customStyles.titleStyle}>
                          Username/Email
                      </Grid>
                      <Grid item xs={12} sx={customStyles.titleStyle}>
                          Password
                      </Grid>
                      <Grid item xs={12} sx={customStyles.titleStyle}>
                          <Button onClick={handleLogin}>

                          </Button>
                      </Grid>
                  </Grid>
            </Grid>
            <Grid item xs={3}></Grid>
        </Grid>
  );
}