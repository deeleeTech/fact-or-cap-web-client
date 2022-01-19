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


    const [ toggledDate, setToggledDate ] = useState(new Date())

    useEffect(()=>{
        //filter out todays games
        
    },[])

    const filterGamesDate = (gameDate) => {
        const gameDateObject = new Date(gameDate);
        const gameMonth = gameDateObject.getMonth();
        const gameDateDay = gameDateObject.getDate();
        const gameYear = gameDateObject.getFullYear();
        if(toggledDate.getDate() == gameDateDay && toggledDate.getMonth() == gameMonth && toggledDate.getFullYear() == gameYear){
            return true
        }
        else{
            return false
        }
    }

    const handleDateChange = (currentToggledDate, directionFlag) => {
        const currentDate = currentToggledDate;
        const newDate = new Date(currentDate)
        if(directionFlag){
            newDate.setDate(newDate.getDate() + 1)
        }
        else{
            newDate.setDate(newDate.getDate() - 1)
        }
        setToggledDate(newDate)
    }
    

    return (
        <Grid sx={customStyles.upcomingContainer}>
            <Grid item xs={12}>
                <Grid container>
                    <Grid item xs={2}>
                        <button onClick={()=>handleDateChange(toggledDate, false)}>
                            back
                        </button>
                    </Grid>
                    <Grid item xs={8}>{toggledDate.toDateString()}</Grid>
                    <Grid item xs={2}>
                        <button onClick={()=>handleDateChange(toggledDate, true)}>
                            next
                        </button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                {allGames ? allGames.map((eachGame)=>{
                    if(filterGamesDate(eachGame.gameStartDate)){
                        return(
                            <NBAgame gameObject={eachGame} />
                        )
                    }
                }) : null}
            </Grid>
        </Grid>
    )
}
