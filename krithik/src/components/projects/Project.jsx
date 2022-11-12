import React from 'react'
import Box from '@mui/material/Box'
import './projects.css'

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
            <h3><a href={props.link}>{props.title}</a></h3>
            <p>{props.description}</p>
            <p>{props.tech}</p>
        </Box>
    </div>
  )
}

export default Project