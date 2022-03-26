import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import NewPost from '../components/NewPost';
import ExistingGameBet from '../components/ExistingGameBet';

export default function CreatePost(props){
  const customStyles = {
    'headerContainer' : {
      fontSize: '24px',
      fontWeight: '700',
      backgroundColor: 'rgba(255,255,255,.6)',
      border: '1px solid black',
      color: 'rgb(30,30,30)',
      padding: '10px'
    },
    'backButtonStyle' : {
      backgroundColor: 'red',
      fontWeight: '600',
      width: '100%',
      color: 'white',
      textShadow: '1px 0px black'
    },
    'newButtonStyle' : {
      backgroundColor: '#04B8CA',
      fontWeight: '600',
      width: '100%',
      color: 'white',
      textShadow: '1px 0px black'
    },
  }
  const navigate = useNavigate();

  const postInfo = useSelector(state=>state.postData); //GAME DETAILS REQUIRED
  const userInfo = useSelector(state=>state.userInfo); //USER ACCOUNT INFO
  const loggedIn = useSelector(state=>state.loggedInStatus); 
  const allBetsData = useSelector(state=>state.allGameBets); //ARRAY OF ALL GAME BETS

  const [ newFlag, setNewFlag ] = useState(false)

  useEffect(()=>{ //required data check
    if(postInfo == null || loggedIn == false){
      navigate('/Upcoming')
    }
    //console.log(postInfo)
  },[postInfo])

  return (
      <Grid container sx={{ paddingTop: '70px'}}>
          <Grid item xs={12} sx={customStyles.headerContainer}>
             {postInfo.awayTeamName}
             <br />
             VS
             <br />
             {postInfo.homeTeamName}
          </Grid>
          <Grid item xs={newFlag ? 12 : 6}>
              {newFlag ? 
                <Button onClick={()=>setNewFlag(false)} sx={customStyles.backButtonStyle}>CANCEL</Button>
              :
                <Button onClick={()=>navigate('/Games')} sx={customStyles.backButtonStyle}>BACK</Button>
              }
          </Grid>
          <Grid item xs={newFlag ? 0 : 6}>
              {newFlag ? 
                null
              :
                <Button onClick={()=>setNewFlag(true)} sx={customStyles.newButtonStyle}>NEW</Button>
              }
          </Grid>
          {newFlag ? 
            <Grid item xs={12} sx={{ paddingTop: '15px' }}>
                <NewPost gameDetails={postInfo} winningOptions={[postInfo.awayTeamName, postInfo.homeTeamName]} />
            </Grid>
          : 
          <Grid item xs={12} sx={{ paddingTop: '15px' }}>
            <Grid container>
                {allBetsData.map((eachBet, index)=>{
                  if(eachBet.gameID == postInfo._id && eachBet.usernamePosted != userInfo.username && eachBet.usernameAccepted == 'none'){
                    return(
                      <Grid item xs={12} key={index} >
                          <ExistingGameBet betObject={eachBet} />
                      </Grid>
                    ) 
                  }
                })}
            </Grid>
          </Grid>
          }
      </Grid>
  )
}

