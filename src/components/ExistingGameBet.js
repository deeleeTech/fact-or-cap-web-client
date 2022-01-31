import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';


export default function CreatePost(props){
  const customStyles = {
    'container' : {
      backgroundColor: 'rgba(0,0,0,.4)',
      color: 'white',
      padding: '5px',
      border: '1px solid rgba(255,255,255,.8)',
      borderRadius: '3px'
    },
    'usernameHeaderStyle' : {
        textAlign: 'left',
        paddingLeft: '4px',
        fontWeight: '700',
        letterSpacing: '1px',
        fontSize: '18px'
    },
    'projectedStyle' : {
        textAlign: 'right',
        paddingRight: '4px',
        fontWeight: '700',
        letterSpacing: '2px',
        fontSize: '24px',
        paddingBottom : '4px'
    },
    'capCoinsContainer' : {
        padding: '5px',
        fontSize: '18px',
        borderBottom: '1px solid white',
        borderLeft: '1px solid white',
        borderRight: '1px solid white'
    },
    'capCoinsStyle' : {
        fontSize: '28px',
        fontWeight: '700',
        width: '100%',
        borderTop: '1px solid white'
    },
    'callButtonContainer' : {
        padding: '10px'
    },
    'callButtonStyle' : {
        backgroundColor: 'green',
        color: 'white',
        fontSize: '16px',
        border: '1px solid black',
        padding: '8px',
        fontWeight: '600',
        textShadow: '1px 0px 20px black'
    }
  }
  const navigate = useNavigate();

  const thisBet = props.betObject;

  return (
      <Grid container sx={customStyles.container}>
          <Grid item xs={12} sx={customStyles.usernameHeaderStyle}>
                <b style={{ borderBottom: '3px solid white' }}>{thisBet.usernamePosted}</b> thinks....
          </Grid>
          <Grid item xs={12} sx={customStyles.projectedStyle}>
                {thisBet.projectedWinner}
          </Grid>
          <Grid item xs={4} sx={customStyles.capCoinsContainer}>
              <div style={customStyles.capCoinsStyle}>
                  {thisBet.riskCoins}
              </div>
              Their Risk
          </Grid>
          <Grid item xs={4} sx={customStyles.capCoinsContainer}>
              <div style={customStyles.capCoinsStyle}>
                  {thisBet.gainCoins}
              </div>
              Cap Call
          </Grid>
          <Grid item xs={4} sx={customStyles.capCoinsContainer}>
              <div style={customStyles.capCoinsStyle}>
                  {parseInt(thisBet.riskCoins) + parseInt(thisBet.gainCoins)}
              </div>
              Payout
          </Grid>
          <Grid item xs={12} sx={customStyles.callButtonContainer}>
                <Button sx={customStyles.callButtonStyle}>
                    Accept For {thisBet.gainCoins} CapCoins
                </Button>
          </Grid>
      </Grid>
  )
}
