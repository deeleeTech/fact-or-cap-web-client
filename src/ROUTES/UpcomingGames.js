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
            fontSize: '22px',
            textAlign: 'left',
            padding: '10px',
            letterSpacing: '2px',
            textShadow: '1px 1px 1px black',
            color: 'white',
            backgroundColor: 'black',
            textAlign: 'center',
            fontFamily: 'regular',
            border: '1px solid white',
            borderRadius: '3px'
        },
        'buttonStyle' : {
            color: '#1E5631',
            textShadow: '1px 1px 35px white',
            fontWeight: '700',
            height: '100%',
            width: '100%'
        },
        'toggledButtonStyle' : {
            textShadow: '1px 1p white',
            border: '4px solid white',
            backgroundColor: 'rgba(255,255,255,.2)'
        }
    }

    const navigate = useNavigate();
    const allGames = useSelector(state => state.allNBA);
    const [ todaysGames, setTodaysGames ] = useState(null);


    const [ toggledDate, setToggledDate ] = useState(new Date());
    const [ toggledButton, setToggledButton ] = useState('NBA');

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

    const filterGamesSport = (fullGameID) => {  //FILTER FLAG FOR GAME ID TO MATCH WITH toggleButton
        const sport = fullGameID.slice(0,3);
        if(sport == toggledButton){
            return true;
        }
        else{
            return false;
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
            <Grid item xs={12} sx={customStyles.headerStyle}>
                <Grid container>
                    <Grid item xs={2}>
                        <Button onClick={()=>handleDateChange(toggledDate, false)} sx={customStyles.buttonStyle}>
                            back
                        </Button>
                    </Grid>
                    <Grid item xs={8} sx={{ paddingTop: '3px' }}>{toggledDate.toDateString()}</Grid>
                    <Grid item xs={2}>
                        <Button onClick={()=>handleDateChange(toggledDate, true)} sx={customStyles.buttonStyle}>
                            next
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container sx={{ paddingTop: '8px', fontSize: '20px' }}>
                    <Grid item xs={4} onClick={()=>setToggledButton('NBA')} sx={toggledButton == 'NBA' ? customStyles.toggledButtonStyle : {}}>NBA</Grid>
                    <Grid item xs={4} onClick={()=>setToggledButton('NFL')} sx={toggledButton == 'NFL' ? customStyles.toggledButtonStyle : {}}>NFL</Grid>
                    <Grid item xs={4} onClick={()=>setToggledButton('MLB')} sx={toggledButton == 'MLB' ? customStyles.toggledButtonStyle : {}}>MLB</Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                {allGames ? allGames.map((eachGame)=>{
                    if(filterGamesDate(eachGame.gameStartDate) && filterGamesSport(eachGame.gameID)){
                        return(
                            <NBAgame gameObject={eachGame} />
                        )
                    }
                }) : null}
            </Grid>
        </Grid>
    )
}
