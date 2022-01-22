import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

export default function CreatePost(props){
  const navigate = useNavigate();

  const postInfo = useSelector(state=>state.postData);
  const userInfo = useSelector(state=>state.userInfo);
  const loggedIn = useSelector(state=>state.loggedInStatus);

  useEffect(()=>{
    if(postInfo == null || loggedIn == false){
      navigate('/Upcoming')
    }
  },[postInfo])

  return (
      <Grid container sx={{ paddingTop: '70px'}}>
          <Grid item xs={12}>

          </Grid>
          <Grid item xs={12}>

          </Grid>
      </Grid>
  )
}

