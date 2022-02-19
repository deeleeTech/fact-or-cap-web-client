import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { gather_game_bets } from '../__actions/gatherAllGameBets';
import { Select, MenuItem } from '@mui/material';
import axios from 'axios';

export default function NewPost(props){
  const customStyles = {
    'container' : {
      fontSize: '20px',
      fontWeight: '600',
      backgroundColor: 'rgba(0,0,0,.6)',
      border: '1px solid white',
      color: 'rgb(230,230,230)',
      padding: '15px'
    },
    'backButtonStyle' : {
      backgroundColor: 'red',
      fontWeight: '600',
      width: '100%',
      color: 'white',
      textShadow: '1px 0px black'
    },
    'newButtonStyle' : {
      backgroundColor: 'blue',
      fontWeight: '600',
      width: '100%',
      color: 'white',
      textShadow: '1px 0px black'
    },
    'winnerStyle' : {
        textAlign: 'left',
        fontWeight: '800',
        letterSpacing: '2px'
    },
    'totalStyle' : {
        padding: '5px',
        fontSize: '32px',
        fontWeight: '700'
    }
  }
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector(state=>state.userInfo);
  const allGameBets = useSelector(state=>state.allGameBets);
  const allMenuItems = props.winningOptions;
  const gameInfo = props.gameDetails;

  const [ projectedWinner, setProjectedWinner ] = useState('choose')
  const [ riskCapCoins, setRiskCapCoins ] = useState('');
  const [ gainCapCoins, setGainCapCoins ] = useState('');
  const [ totalWinnings, setTotalWinnings ] = useState(0);


  const handleWinnerChange = (event) => { //WINNER SELECTION
    setProjectedWinner(event.target.value);
  };

  const handleRiskChange = (event) => { // ON RISK CHANGE
    if(event.target.value == '') setRiskCapCoins(''); //resets to zero when fully deleted
    const enteredRisk = parseInt(event.target.value);
    if(isNaN(enteredRisk) == false){
        setRiskCapCoins(event.target.value);
    }
  };

  const handleGainChange = (event) => { //ON GAIN CHANGE
    if(event.target.value == '') setGainCapCoins(''); //resets to zero when fully deleted
    const enteredRisk = parseInt(event.target.value);
    if(isNaN(enteredRisk) == false){
        setGainCapCoins(event.target.value);
    }
  };

  const handleConfirmAttempt = () => {
      if(allMenuItems.includes(projectedWinner) == false){
          alert('Please Select A Valid Winner');
      }
      else if(riskCapCoins == '' || gainCapCoins == ''){
            alert('Please Enter A Valid Risk & Gain');
      }
      else if(riskCapCoins > currentUser.capCoins){
            alert('Not Enough Cap Coins to Risk That');
      }
      else{
          const currentSport = (gameInfo.gameID).slice(0,3)
          let stager = {
            'gameID': gameInfo.gameID,
            'gameStart' : gameInfo.gameStartDate,
            'riskCoins': riskCapCoins,
            'usernameAccepted': 'none',
            'wonPost': null,
            'sport': currentSport,
            'usernamePosted': currentUser.username,
            'projectedWinner' : projectedWinner,
            'gainCoins' : gainCapCoins
          }
        //   let config = { //AXIOS CONFIG SETTINGS
        //     method: 'post',
        //     url: "http://localhost:5000/bets/newGameBet",
        //     headers: { 'Content-Type': 'application/json' },
        //     data: stager
        // };
        axios.post('http://localhost:9000/bets/newGameBet', stager)
          .then(function (response) {
            //console.log(response.data.message);
            if(response.data.message == 'created_new_post'){
              //update client with new bet
              let stagerBets = allGameBets;
              stagerBets.push(stager);
              dispatch(gather_game_bets(stagerBets)) // REDUX LOCAL UPDATE
              navigate('/Games')
            }
          })
      }
  }

  useEffect(()=>{  //HOOK TO UPDATE TOTAL 
    let riskStager = 0;
    let gainStager = 0;
    if(riskCapCoins != '') riskStager = parseInt(riskCapCoins);
    if(gainCapCoins != '') gainStager = parseInt(gainCapCoins);
    setTotalWinnings(riskStager + gainStager);
  },[riskCapCoins, gainCapCoins])

  return (
      <Grid container sx={customStyles.container}>
          <Grid item xs={12} sx={customStyles.winnerStyle}> Winner: </Grid>
          <Grid item xs={12} sx={{ paddingBottom: '10px' }}>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={projectedWinner}
                label="Projection"
                onChange={handleWinnerChange}
                fullWidth
                sx={{
                    backgroundColor: 'white'
                }}
            >
                {allMenuItems && allMenuItems.map((eachItem)=>{
                    return(
                        <MenuItem value={eachItem}>{eachItem}</MenuItem>
                    )
                })}
            </Select>
          </Grid>
          <Grid item xs={3}>Risk</Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={3}>Gain</Grid>
          <Grid item xs={5}>Total Winnings</Grid>
          <Grid item xs={3}>
                <OutlinedInput
                    id="cap-coins-risk"
                    value={riskCapCoins}
                    onChange={handleRiskChange}
                    endAdornment={<InputAdornment position="end">cC</InputAdornment>}
                    aria-describedby="cap-coins"
                    sx={{ backgroundColor: 'white' }}
                />
          </Grid>
          <Grid item xs={1} sx={{ paddingTop: '18px', fontSize: '18px' }}> + </Grid>
          <Grid item xs={3}>
                <OutlinedInput
                    id="cap-coins-gain"
                    value={gainCapCoins}
                    onChange={handleGainChange}
                    endAdornment={<InputAdornment position="end">cC</InputAdornment>}
                    aria-describedby="cap-coins"
                    sx={{ backgroundColor: 'white' }}
                />
          </Grid>
          <Grid item xs={5} sx={customStyles.totalStyle}>
              {totalWinnings}
              <br />
              <Button onClick={()=>handleConfirmAttempt()}>
                  confirm
                </Button>
            </Grid>
      </Grid>
  )
}