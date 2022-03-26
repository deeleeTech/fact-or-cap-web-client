import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router-dom";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AddBoxIcon from '@mui/icons-material/AddBox';
//REDUX
import { useDispatch, useSelector } from 'react-redux';

export default function Profile(props) {
    
    const customStyles = {
        'userCardStyle' : {
            border: '1px solid white',
            borderRadius: '20px',
            backgroundColor: 'black'
        },
        'avatarStyle' : {
            height: '80px',
            border: '1px dotted black',
            borderRadius: '20px',
            backgroundColor: 'rgba(255,255,255,.9)'
        },
        'usernameStyle' : {
            fontSize: '34px',
            backgroundColor: 'rgba(0,0,0,.9)',
            color: 'white',
            padding: '4px',
            borderRadius: '20px'
        },
        'changeButtonStyle' : {
            backgroundColor: 'rgba(255,255,255,0.6)',
            padding: '1px',
            fontSize: '12px',
            color: 'black'
        },
        'activeContainer' : {
            padding: '4px'
        },
        'activeStyle' : {
            fontSize: '96px',
            color: 'white',
            padding: '4px',
            fontWeight: '700',
            paddingBottom: '20px'
        },
        'gamesButtonStyle': {
            backgroundColor: 'rgba(255,255,255,0.6)',
            padding: '3px',
            fontSize: '18px',
            color: 'black',
            border: '2px solid black',
            borderRadius: '10px'
        }
    }

    const userData = useSelector(state=>state.userInfo)
    const rows = userData.betsData

    return (
        <Grid container sx={{ paddingTop: '70px'}}>
            <Grid item xs={12} sx={{ paddingTop: '20px' }}>
                <Grid container sx={customStyles.userCardStyle}>
                    <Grid item xs={5} sx={customStyles.avatarStyle}>
                        <PersonOutlineIcon sx={{ fontSize: '78px' }} />
                    </Grid>
                    <Grid item xs={7}>
                        <Grid container>
                            <Grid item xs={12} sx={customStyles.usernameStyle}>
                                {userData.username}
                            </Grid>
                            <Grid item xs={12}>
                                {/* <Button sx={customStyles.changeButtonStyle}>
                                    change
                                </Button> */}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12} sx={{ paddingTop: '20px' }}>
                <Grid container sx={customStyles.activeContainer}>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={12} sx={{ letterSpacing: '2px', fontWeight: '600', fontSize: '28px' }}>
                                CAP COINS 
                            </Grid>
                            <Grid item xs={12} sx={customStyles.activeStyle}>
                                {userData.capCoins} 
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        {/* <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 350 }} aria-label="simple table">
                                    <TableHead>
                                    <TableRow>
                                        <TableCell>Team</TableCell>
                                        <TableCell align="right">RISK/GAIN</TableCell>
                                        <TableCell align="right">Cap</TableCell>
                                    </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    {rows.map((row, index) => (
                                        <TableRow
                                        key={index}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                        <TableCell component="th" scope="row">
                                            <b>{row.projectedWinner}</b><br/>{new Date(row.gameStart).toDateString()}
                                        </TableCell>
                                        <TableCell align="right">{row.riskCoins + "/" + row.gainCoins}</TableCell>
                                        <TableCell align="right">{row.usernameAccepted}</TableCell>
                                        </TableRow>
                                    ))}
                                    </TableBody>
                                </Table>
                            </TableContainer> */}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
