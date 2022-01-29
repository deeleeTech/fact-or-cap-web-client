import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import NewPost from '../components/NewPost';

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

  const postInfo = useSelector(state=>state.postData);
  const userInfo = useSelector(state=>state.userInfo);
  const loggedIn = useSelector(state=>state.loggedInStatus);

  const [ newFlag, setNewFlag ] = useState(false)


  useEffect(()=>{
    if(postInfo == null || loggedIn == false){
      navigate('/Upcoming')
    }
    console.log(postInfo)
  },[postInfo])

  return (
      <Grid container sx={{ paddingTop: '70px'}}>
          <Grid item xs={6}>
              {newFlag ? 
                <Button onClick={()=>setNewFlag(false)} sx={customStyles.backButtonStyle}>CANCEL</Button>
              :
                <Button onClick={()=>navigate('/Games')} sx={customStyles.backButtonStyle}>BACK</Button>
              }
          </Grid>
          <Grid item xs={6}>
              {newFlag ? 
                <Button onClick={()=>console.log('new fact made')} sx={customStyles.newButtonStyle}>CONFIRM</Button>
              :
                <Button onClick={()=>setNewFlag(true)} sx={customStyles.newButtonStyle}>NEW</Button>
              }
          </Grid>
          <Grid item xs={12} sx={customStyles.headerContainer}>
             {postInfo.awayTeamName}
             <br />
             VS
             <br />
             {postInfo.homeTeamName}
          </Grid>
          {newFlag ? 
            <Grid item xs={12}>
                <NewPost />
            </Grid>
          : null}
          <Grid item xs={12}>
            <Grid container>
                
            </Grid>
          </Grid>
      </Grid>
  )
}

