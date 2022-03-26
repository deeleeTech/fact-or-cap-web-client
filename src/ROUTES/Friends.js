import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide'
//REDUX
import { useDispatch, useSelector } from 'react-redux';

const dummyFriends = ['D.ack','Kat316','Admin']

export default function Friends(props) {
    
    const customStyles = {
        'container' : {
            paddingTop: '70px'
        },
        'headerStyle' : {
            fontSize: '48px',
            textAlign: 'left',
            padding: '10px',
            letterSpacing: '2px',
            fontWeight: '700',
            color: 'white',
            textShadow: '1px 1px 5px black',
            fontFamily: "'Fredericka the Great', cursive",
        },
        'friendNameStyle' : {
            border: '1px solid black',
            borderRadius: '15px',
            padding: '5px',
            backgroundColor: 'rgba(0,0,0,.3)',
            textShadow: '1px 1px black',
            color: 'white'
        }
    }

    const userData = useSelector(state=>state.userInfo)

    return (
        <Grid container sx={customStyles.container}>
            <Grid item xs={12} sx={customStyles.headerStyle}>
                <Zoom left duration={1000}>
                    Friends
                </Zoom>
            </Grid>
            <Grid item xs={12} sx={{ overflow: 'auto'  }}>
                    {/* <Slide left top cascade duration={2000}>
                        <div>
                            {dummyFriends.map((each)=>{
                                return(
                                    <h1 style={customStyles.friendNameStyle}>
                                        {each}
                                    </h1>
                                )
                            })}
                        </div>
                    </Slide> */}
                    comming soon
            </Grid>
        </Grid>
    )
}
