import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
//REDUX
import { useDispatch, useSelector } from 'react-redux';
import { gather_post_data } from '../__actions/gatherPostData';

export default function NBAgame(props) {
    
    const customStyles = {
        'gameContainer': {
           padding: '7px',
           fontFamily: 'regular',
           paddingBottom: '10px'
        },
        'gameStyle': {
            border: '2px solid rgba(0,0,0,.5)',
            backgroundColor: 'rgba(255,255,255,.6)',
            borderBottomLeftRadius: '10px',
            borderBottomRightRadius: '10px'
        },
        'gameIDstyle' : {
            backgroundColor: 'black',
            color: 'white',
            textAlign: 'left',
            padding: '3px',
            letterSpacing: '2px'
        },
        'gameBetsStyle' : {
            backgroundColor: 'black',
            color: 'white',
            textAlign: 'right',
            padding: '3px',
        },
        'gameTipStyle' : {
            backgroundColor: 'black',
            color: 'white',
            textAlign: 'right'
        },
        'teamNameStyle' : {
            fontSize: '26px',
            fontWeight: '600',
            padding: '3px'
        },
        'teamScoreStyle' : {
            fontSize: '30px',
            fontWeight: '700',
            textAlign: 'center'
        },
        'seePostStyle': {
            width: '200px',
            backgroundColor: 'rgba(80,250,80,.5)',
            color: 'black',
            fontSize: '24px',
            fontWeight: '700',
            textShadow: '1px 0px white',
            borderTop: '2px dotted black',
            borderRadius: '20px'
        }
    }

    const navigate = useNavigate();
    const dispatch = useDispatch();

    //mongo object ------------------
    const game = props.gameObject.gameID;
    const hmTeam = props.gameObject.homeTeamName;
    const awTeam = props.gameObject.awayTeamName;
    const hmScore = props.gameObject.homeTeamScore;
    const awScore = props.gameObject.awayTeamScore;
    const gmStatus = props.gameObject.gameStatus;
    const gmBets = props.gameObject.betCount;
    //-------------------------------

    const handleGameClick = () => {
        if(gmStatus == 'Final') return
        const postDataStager = props.gameObject;
        dispatch(gather_post_data(postDataStager))
        navigate('/CreatePost')
    }


    return (
        <Grid container sx={customStyles.gameContainer}>
            <Grid item xs={12} onClick={()=>handleGameClick()}  sx={customStyles.gameStyle}>
                <Grid container>

                    <Grid item xs={6} sx={customStyles.gameIDstyle}>{gmStatus}</Grid>
                    <Grid item xs={6} sx={customStyles.gameBetsStyle}>{gmBets} Bet(s)</Grid>


                    <Grid item xs={12}>
                        <Grid container sx={{ textAlign: 'left' }}>
                            <Grid item xs={10} sx={customStyles.teamNameStyle}>{hmTeam}</Grid>
                            <Grid item xs={2} sx={customStyles.teamScoreStyle}>{hmScore}</Grid>

                            <Grid item xs={10} sx={customStyles.teamNameStyle}>{awTeam}</Grid>
                            <Grid item xs={2} sx={customStyles.teamScoreStyle}>{awScore}</Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </Grid>
    )
}