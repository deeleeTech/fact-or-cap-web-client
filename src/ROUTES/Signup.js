import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'
import useAuth from '../useAuth'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Alert, Button, TextField } from '@mui/material';
import Axios from 'axios'


export default function Signup(props) {

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
        'headerStyle' : {
            backgroundColor: 'black',
            color: 'white',
            padding: '5px',
            letterSpacing: '3px',
            fontSize: '28px',
            fontWeight: '700'
        },
        'titleStyle': {
            fontSize: '20px',
            fontWeight: '700',
            padding: '10px'
        },
        'buttonStyle': {
            fontWeight: '600',
            border: '1px solid black',
            borderRadius: '15px',
            color: 'black',
            width: '100%'
        }
    }

    const navigate = useNavigate();
    const { login } = useAuth();
    const { state } = useLocation();

    const [ typedUsername, setTypedUsername ] = useState('');
    const [ typedPassword, setTypedPassword ] = useState('');
    const [ typedConfirmPassword, setTypedConfirmPassword ] = useState('');
    const [ typedEmail, setTypedEmail ] = useState('');
    const [ selectedSport, setSelectedSport ] = useState('');
    const [ selectedTeam, setSelectedTeam ] = useState('');

    const handleUsernameChange = (event) => {
        setTypedUsername(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setTypedPassword(event.target.value);
    };
    const handleConfirmPasswordChange = (event) => {
        setTypedConfirmPassword(event.target.value);
    };
    const handleEmailChange = (event) => {
        setTypedEmail(event.target.value);
    };

    const handleLogin = () => {
        // let config = { //AXIOS CONFIG SETTINGS
        //     method: 'get',
        //     url: "http://localhost:5000/users/login",
        //     headers: { 'Content-Type': 'application/json' },
        //     params: {
        //       usernameAttempt: typedUsername,
        //       passwordAttempt: typedPassword
        //     }
        // };
        // Axios( config ).then( res => { // BACKEND REQUEST
        //     let serverData = res.data;
        //     if(serverData.message == 'successful_login'){
        //         login(serverData.loginData).then(() => {
        //             navigate(state?.path || "/Home");
        //         });
        //     }
        //     else{
        //         alert(serverData.message)
        //     }
        // } ).catch( err => {
        //     console.log(err);
        // })
    };

    return (
        <Grid container sx={customStyles.containerStyle}>
            <Grid item xs={1}></Grid>
            <Grid item xs={10} sx={customStyles.loginStyle}>
                  <Grid container>
                      <Grid item xs={12} sx={customStyles.headerStyle}>
                            SIGN UP
                      </Grid>
                      <Grid item xs={12} sx={customStyles.titleStyle}> 
                        <TextField
                            fullWidth
                            id="outlined-name"
                            label="Username"
                            value={typedUsername}
                            onChange={handleUsernameChange}
                            />
                      </Grid>
                      <Grid item xs={12} sx={customStyles.titleStyle}>
                        <TextField
                            label="Password"
                            id="outlined-name"
                            fullWidth
                            value={typedPassword}
                            onChange={handlePasswordChange}
                            />
                      </Grid>
                      <Grid item xs={12} sx={customStyles.titleStyle}>
                        <TextField
                            label="Confirm Password"
                            id="outlined-name"
                            fullWidth
                            value={typedConfirmPassword}
                            onChange={handleConfirmPasswordChange}
                            />
                      </Grid>
                      <Grid item xs={12} sx={customStyles.titleStyle}>
                        <TextField
                            label="Email"
                            id="outlined-name"
                            fullWidth
                            value={typedEmail}
                            onChange={handleEmailChange}
                            />
                      </Grid>
                      <Grid item xs={12} sx={customStyles.titleStyle}>
                          <Button onClick={handleLogin} sx={customStyles.buttonStyle}>
                                submit
                          </Button>
                          <div style={{ height: '8px', width: '100%' }}></div>
                          <Button onClick={()=>navigate('/login')} sx={customStyles.buttonStyle}>
                                Have Account?
                          </Button>
                      </Grid>
                  </Grid>
            </Grid>
            <Grid item xs={1}></Grid>
        </Grid>
  );
}