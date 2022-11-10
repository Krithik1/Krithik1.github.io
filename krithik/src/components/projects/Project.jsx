import React from 'react'
import Box from '@mui/material/Box'
import './projects.css'
import { Grid } from '@mui/material'

const Project = (props) => {
  return (
    <div id="project">
        <Box sx={{ 
            bgcolor: 'primary.main', 
            color: 'aliceblue', 
            p: 2, 
            textAlign: 'center',
            borderRadius: '10px'
        }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <h3><a href={props.link}>{props.title}</a></h3>
                </Grid>
                <Grid item xs={12}>
                    <p>{props.description}</p>
                </Grid>
                <Grid item xs={12}>
                    <p>{props.tech}</p>
                </Grid>
            </Grid>
        </Box>
    </div>
  )
}

export default Project