import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
//redux
import { useSelector, useDispatch } from 'react-redux';

export default function Home() {

    const customStyles = {
        'homeContainer': {
            paddingTop: '70px',
            fontFamily: "'Fredericka the Great', cursive",
            fontWeight: '600'
        },
        'headerStyle': {
            fontSize: '48px',
            textAlign: 'left',
            padding: '10px',
            letterSpacing: '2px',
            textShadow: '1px 1px 1px black',
            color: 'white'
        },
        'introStyle' : {
            fontSize: '18px',
            border: '1px dotted #1E5631',
            borderRadius: '20px',
            padding: '10px',
            backgroundColor: '#7DAA6A',
            flexDiretion: 'row'
        },
        'bodyStyle' : {
            padding: '30px'
        },
        'buttonContainer' : {
            padding: '5px'
        },
        'buttonStyle' : {
            width: '100%',
            backgroundColor: 'rgba(255,255,255,.8)',
            color: 'black',
            fontFamily: "'Fredericka the Great', cursive",
            fontSize: '24px'
        }
    }

    const navigate = useNavigate();
    const authStatus = useSelector(state=>state.loggedInStatus)

    const handleButtonPress = (routePath) => {
        switch(routePath){
            case 'Factboard':
                navigate('/FactsBoard')
            case 'Login':
                navigate('/Login')
        }
    }

    return (
        <Grid sx={customStyles.homeContainer}>
            <Grid item xs={12} sx={customStyles.headerStyle}>
                Welcome,
            </Grid>
            <Grid item xs={12} sx={customStyles.introStyle}>
                Ready to put your money where your mouth is??&nbsp;
                <b style={{ fontSize: '20px', fontFamily: "'Fredoka One', cursive", fontWeight: '500' }}>
                    FACT
                </b>
                <b style={{ fontSize: '20px', fontWeight: '500', fontFamily: "none" }}>
                    OR
                </b>
                <b style={{ fontSize: '20px', fontFamily: "'Anton', sans-serif", fontWeight: '500' }}>
                    CAP
                </b>
                &nbsp;lets you state your opinion, while letting friends challenge you. Record personal challenges, sports predictions, societal reactions and anything you can think of! Just find the opposition and start making money.
            </Grid>
            <Grid item xs={12} sx={customStyles.bodyStyle}>
                <Grid container>
                    <Grid item xs={12} sx={customStyles.buttonContainer}>
                        {authStatus ? 
                            <Button onClick={()=>handleButtonPress('Login')} sx={customStyles.buttonStyle}>
                                Sign OUT
                            </Button>
                        :
                            <Button onClick={()=>handleButtonPress('Login')} sx={customStyles.buttonStyle}>
                                Sign IN
                            </Button>
                        }
                    </Grid>
                    <Grid item xs={12} sx={customStyles.buttonContainer}>
                        <Button onClick={()=>handleButtonPress('Factboard')} sx={customStyles.buttonStyle}>
                            Facts Posted
                        </Button>
                    </Grid>
                    <Grid item xs={12} sx={customStyles.buttonContainer}>
                        <Button sx={customStyles.buttonStyle}>
                            Today's Games
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
