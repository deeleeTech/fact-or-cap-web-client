import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'


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
        fontSize: '26px',
        paddingBottom : '4px',
        backgroundColor: 'rgba(255,255,255,.2)',
        border: '1px solid white',
        borderBottom: 'none',
        textShadow: '1px 0px 2px black'
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
  const userInfo = useSelector(state=>state.userInfo); //USER ACCOUNT INFO

  const handleUserAccept = () => {
    const newCoinTotal = userInfo.capCoins - thisBet.gainCoins;
    if(newCoinTotal < 0){
        alert('not enough cap coins...')
    }
    else{
        axios.post('http://localhost:9000/bets/acceptGameBet', {betID: thisBet._id, acceptingUser: userInfo.username, newCapCoins: newCoinTotal})
        .then(function (response) {
        console.log(response.data.message);
        if(response.data.message == 'user_accepted_post'){
            navigate('/Games')
        }
        })
    }
  }

  return (
      <Grid container sx={customStyles.container}>
          <Grid item xs={12} sx={customStyles.usernameHeaderStyle}>
                <b style={{ borderBottom: '4px solid white' }}>{thisBet.usernamePosted}</b> thinks....
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
                <Button onClick={()=>handleUserAccept()} sx={customStyles.callButtonStyle}>
                    Accept For {thisBet.gainCoins} CapCoins
                </Button>
          </Grid>
      </Grid>
  )
}
