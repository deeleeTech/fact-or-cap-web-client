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
    // const [ selectedSport, setSelectedSport ] = useState('');
    // const [ selectedTeam, setSelectedTeam ] = useState('');

    //HANDLES TEXTFIELDS =========================================
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
    //============================================================

    const handleSignUp = () => {
        if(typedPassword != typedConfirmPassword){
            alert("passwords don't match....")
        }
        else{
            let config = { //AXIOS CONFIG SETTINGS
                method: 'post',
                url: "http://localhost:5000/users/signup",
                headers: { 'Content-Type': 'application/json' },
                data: {
                  usernameAttempt: typedUsername,
                  passwordAttempt: typedPassword,
                  emailAttempt: typedEmail
                }
            };
            Axios( config ).then( res => { // BACKEND REQUEST
                let serverData = res.data;
                console.log('Look Here!')
                console.log(serverData)
                if(serverData.message == 'user_exists'){
                    alert("this username already exists...")
                }
                else{
                    login(serverData.loginData).then(() => {
                        navigate("/Home");
                    });
                }
            } ).catch( err => {
                console.log(err);
            })
        }
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
                            fullWidth
                            id="outlined-name"
                            label="Email"
                            value={typedEmail}
                            onChange={handleEmailChange}
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
                          <Button onClick={handleSignUp} sx={customStyles.buttonStyle}>
                                Sign Up
                          </Button>
                          <div style={{ height: '8px', width: '100%' }}></div>
                          <Button onClick={()=>navigate('/login')} sx={customStyles.buttonStyle}>
                                Already Have Account?
                          </Button>
                      </Grid>
                  </Grid>
            </Grid>
            <Grid item xs={1}></Grid>
        </Grid>
  );
}