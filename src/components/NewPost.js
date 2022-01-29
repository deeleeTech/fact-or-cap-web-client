import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

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
  }
  const navigate = useNavigate();

//   const postInfo = useSelector(state=>state.postData);
//   const userInfo = useSelector(state=>state.userInfo);
//   const loggedIn = useSelector(state=>state.loggedInStatus);


//   useEffect(()=>{
//     if(postInfo == null || loggedIn == false){
//       navigate('/Upcoming')
//     }
//     console.log(postInfo)
//   },[postInfo])

  return (
      <Grid container sx={{ paddingTop: '10px'}}>
          <Grid item xs={12} sx={customStyles.container}>
              new post incoming bois
          </Grid>
      </Grid>
  )
}