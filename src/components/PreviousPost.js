import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

export default function PreviousPost(props){
  const navigate = useNavigate();


  useEffect(()=>{
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