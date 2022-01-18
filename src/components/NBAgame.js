import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
//REDUX
import { useDispatch, useSelector } from 'react-redux';

export default function NBAgame(props) {
    
    const customStyles = {
        'gameContainer': {
           padding: '5px',
           fontFamily: 'regular'
        },
        'gameStyle': {
            border: '1px solid black',
            backgroundColor: 'white'
        },
        'gameIDstyle' : {
            backgroundColor: 'black',
            color: 'white',
            textAlign: 'left'
        },
        'gameTipStyle' : {
            backgroundColor: 'black',
            color: 'white',
            textAlign: 'right'
        },
        'teamNameStyle' : {
            fontSize: '22px',
            fontWeight: '600',
            padding: '3px'
        }
    }

    const navigate = useNavigate();

    //mongo object ------------------
    const game = props.gameObject.gameID;
    const hmTeam = props.gameObject.homeTeamName;
    const awTeam = props.gameObject.awayTeamName;
    const hmScore = props.gameObject.homeTeamScore;
    const awScore = props.gameObject.awayTeamScore;
    const tipOffTime = props.gameObject.gameStartTime;
    //-------------------------------


    return (
        <Grid container sx={customStyles.gameContainer}>
            <Grid item xs={12} sx={customStyles.gameStyle}>
                <Grid container>
                    <Grid item xs={6} sx={customStyles.gameIDstyle}>{game}</Grid>
                    <Grid item xs={6} sx={customStyles.gameTipStyle}>{tipOffTime}</Grid>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={5} sx={customStyles.scoreStyle}>
                                {awScore}
                            </Grid>
                            <Grid item xs={2}>AT</Grid>
                            <Grid item xs={5} sx={customStyles.scoreStyle}>
                                {hmScore}
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={5} sx={customStyles.teamNameStyle}>{awTeam}</Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={5} sx={customStyles.teamNameStyle}>{hmTeam}</Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}