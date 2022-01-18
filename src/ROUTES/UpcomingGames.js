import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
//REDUX
import { useDispatch, useSelector } from 'react-redux';
import NBAgame from '../components/NBAgame';

export default function UpcomingGames(props) {

    const customStyles = {
        'upcomingContainer': {
            paddingTop: '70px',
            fontFamily: "'Fredericka the Great', cursive",
            fontWeight: '600'
        },
        'headerStyle': {
            fontSize: '48px',
            textAlign: 'left',
            padding: '10px',
            letterSpacing: '2px',
            textShadow: '1px 1px 1px black',
            color: 'white'
        }
    }

    const navigate = useNavigate();
    const allGames = useSelector(state => state.allNBA);
    const [ todaysGames, setTodaysGames ] = useState(null);
    const [ filteredGames, setFilteredGames ] = useState(null);

    useEffect(()=>{
        //filter out todays games
        
    },[])


    return (
        <Grid sx={customStyles.upcomingContainer}>
            <Grid item xs={12}>
                Upcoming Games
            </Grid>
            <Grid item xs={12}>
                {allGames ? allGames.map((eachGame)=>{
                    return(
                        <NBAgame gameObject={eachGame} />
                    )
                }) : null}
            </Grid>
        </Grid>
    )
}
