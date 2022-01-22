import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
//REDUX
import { useDispatch, useSelector } from 'react-redux';
import { gather_post_data } from '../__actions/gatherPostData';

export default function NFLgame(props) {
    
    const customStyles = {   //STYLE FOR FOOTBALL TODO
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
        },
        'scoreStyle' : {
            fontSize: '44px',
            fontWeight: '700'
        },
        'seePostStyle': {
            width: '100%',
            backgroundColor: 'rgba(0,200,0,.8)',
            color: 'black',
            fontSize: '24px',
            fontWeight: '700',
            textShadow: '1px 0px white',
            borderTop: '2px dotted black'
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
    const tipOffTime = props.gameObject.gameStartTime;
    //-------------------------------

    const handleGameClick = () => {
        const postDataStager = props.gameObject;
        dispatch(gather_post_data(postDataStager)).then(navigate('/CreatePost'))
    }


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
                            <Grid item xs={2} sx={ {fontSize: '20px', paddingTop: '10px'} }>AT</Grid>
                            <Grid item xs={5} sx={customStyles.scoreStyle}>
                                {hmScore}
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={5} sx={customStyles.teamNameStyle}>{awTeam}</Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={5} sx={customStyles.teamNameStyle}>{hmTeam}</Grid>

                    <Grid item xs={12}>
                        <Button onClick={()=>handleGameClick()} sx={customStyles.seePostStyle}>
                            0 POSTS
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}