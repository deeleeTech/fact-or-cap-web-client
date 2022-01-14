import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'
import useAuth from '../useAuth'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, TextField } from '@mui/material';
import Axios from 'axios'


export default function Login(props) {

    const customStyles = {
        'containerStyle': { 
            textAlign: 'center',
            paddingTop: '80px'
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

    const [ typedUsername, setTypedUsername ] = useState('')
    const [ typedPassword, setTypedPassword ] = useState('')

    const handleLogin = () => {
        let config = {
            method: 'get',
            url: "http://localhost:5000/users/login",
            headers: { 'Content-Type': 'application/json' },
            params: {
              usernameAttempt: 'Admin',
              passwordAttempt: 'Password'
            }
        };
        Axios( config ).then( res => {
            let serverData = res.data;
            if(serverData.message == 'successful_login'){
                login(serverData.loginData).then(() => {
                    navigate(state?.path || "/Home");
                });
            }
        } ).catch( err => {
            console.log(err);
        })
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
                                login
                          </Button>
                      </Grid>
                  </Grid>
            </Grid>
            <Grid item xs={3}></Grid>
        </Grid>
  );
}