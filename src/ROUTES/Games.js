import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
//REDUX
import { useDispatch, useSelector } from 'react-redux';
import NBAgame from '../components/NBAgame';
import NFLgame from '../components/NFLgame';
import MLBgame from '../components/MLBgame';

export default function Games(props) {

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

    const navigate = useNavigate(); // USED FOR ROUTING
    const reduxNBA = useSelector(state => state.allNBA);  //REDUX ARRAY
    const reduxNFL = useSelector(state => state.allNFL);  //REDUX ARRAY
    const allGames = reduxNBA.concat(reduxNFL); // JOINS ARRAYS

    const [ toggledDate, setToggledDate ] = useState(new Date());  // FILTER DATE
    const [ toggledButton, setToggledButton ] = useState('NBA');  // FILTER SPORT
    

    const filterGamesDate = (gameDate) => {  // FILTER FLAG FOR toggledDate
        const gameDateObject = new Date(gameDate);
        const gameMonth = gameDateObject.getMonth();
        const gameDateDay = gameDateObject.getDate();
        const gameYear = gameDateObject.getFullYear();
        if(toggledDate.getDate() == gameDateDay && toggledDate.getMonth() == gameMonth && toggledDate.getFullYear() == gameYear){
            return true // GAMES DATE = =TOGGLED DATE !!!!
        }
        else{
            return false 
        }
    }

    const filterGamesSport = (fullGameID) => {  //FILTER FLAG FOR GAME ID TO MATCH WITH toggleButton AKA Sport
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
                <Grid container sx={{ paddingTop: '8px', paddingBottom: '8px', fontSize: '20px' }}>
                    <Grid item xs={4} onClick={()=>setToggledButton('NBA')} sx={toggledButton == 'NBA' ? customStyles.toggledButtonStyle : {}}>NBA</Grid>
                    <Grid item xs={4} onClick={()=>setToggledButton('NFL')} sx={toggledButton == 'NFL' ? customStyles.toggledButtonStyle : {}}>NFL</Grid>
                    <Grid item xs={4} onClick={()=>setToggledButton('MLB')} sx={toggledButton == 'MLB' ? customStyles.toggledButtonStyle : {}}>MLB</Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                {allGames ? allGames.map((eachGame)=>{
                    if(filterGamesDate(eachGame.gameStartDate) && filterGamesSport(eachGame.gameID)){
                        if(toggledButton == 'NBA'){
                            return(
                                <NBAgame gameObject={eachGame} />
                            )
                        }
                        if(toggledButton == 'NFL'){
                            return(
                                <NFLgame gameObject={eachGame} />
                            )
                        }
                        if(toggledButton == 'MLB'){
                            return(
                                <MLBgame gameObject={eachGame} />
                            )
                        }
                    }
                }) : null}
            </Grid>
        </Grid>
    )
}
