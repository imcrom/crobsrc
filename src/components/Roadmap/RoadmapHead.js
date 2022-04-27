import React from 'react'
import { Typography } from '@mui/material'
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'
export const RoadmapHead= () => {

    useEffect(() => {
        AOS.init({ duration: 1000});
        AOS.refresh();
    }, []);

  return (
    <div>
        <Typography data-aos="zoom-in" data-aos-duration="500" sx={{ 
        fontFamily: 'NINJA', 
        color: '#EAC778',
        fontWeight: 'bold',
        fontSize: { xs: 25, sm: 30, md: 60, lg: 70},
        textAlign: 'center',
        paddingTop: '40px',
        }} variant='h4' component='h4'>Roadmap</Typography>
    </div>
  )
}
