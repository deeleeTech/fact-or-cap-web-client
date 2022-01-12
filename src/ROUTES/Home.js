import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';

export default function Home() {

    const customStyles = {
        'homeContainer': {
            paddingTop: '70px'
        }
    }

    return (
        <Grid sx={customStyles.homeContainer}>
            <Grid item xs={12}>
                homescreen
            </Grid>
        </Grid>
    )
}
