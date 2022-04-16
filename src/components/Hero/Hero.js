import React from 'react'
import vid from '../../files/vid.webm';
import pic from '../../files/clean-logo.png';
import { Box, textAlign } from '@mui/system';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import {useEffect, useState} from 'react';



function Hero() {


  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return() => window.removeEventListener("scroll", handleScroll);
  }, []);



 
  
  return (
      <div>
        <video style={{ transform:`translateY(${offsetY * 0.8}px)`}} className='videoTag' autoPlay loop muted>
            <source src={vid} type='video/webm' />
        </video>
        <div id='overlay' className='overlay'>
          <div className='container1'>
            <Box
            component="img"
            
            sx={{
              height: 900,
              width: 900,
              maxHeight: { xs: 350, sm: 400, md: 450, lg: 600, xl: 900},
              maxWidth: { xs: 350, sm: 400, md: 450, lg: 600, xl: 900},
              paddingBottom: {sm: '4%', md: '4%', lg: '4%'},
              
            }}
            
            src={pic}
          />
          </div>
          <div className='container2'>
            <Typography sx={{ 
            fontFamily: 'NINJA', 
            color: '#fff',
            fontWeight: 'bold',
            fontSize: { xs: 35, sm: 50, md: 57, lg: 70, xl: 90},
            textAlign: { xs: 'center', sm: 'center', md:'left', lg: 'left', xl:'left'},
         
              
            }} variant='h2' component='h1'>Crobnobi</Typography>
            
            <Typography sx={{  
            fontSize: '25px', 
            fontSize: { xs: 20},
            color: '#fff',
            fontFamily: 'Roboto Mono'
            }} variant='h4' component='h1'>the <b>$CRINJA</b> token of cronos chain. 
            This token is a community-owned and driven token platform that aims to revolutionize the cronos chain.</Typography>
            <br></br>


            <div className='buttons-hero'>

              <div>
                <Button variant='contained'size='large' color='success' sx={{ marginRight: '40px',}} onClick={
                  (e) =>{
                    e.preventDefault();
                    window.location.href='https://app.bogged.finance/cro/swap?chain=cronos&tokenIn=CRO&tokenOut=0x90B29dB06577B0C5624E178A81377F2E0A095d2B&embed=1&theme=light';
                  }
                }>Buy Token</Button>
              </div>
              <div>
              <Button variant='contained' size='large' color='success' onClick={
                  (e) =>{
                    e.preventDefault();
                    window.location.href='https://dexscreener.com/cronos/0xfb307dc1d74facef5a43bf34aabf2731571761b7';
                  }}>View Chart</Button>       
                         
              </div>

            </div>

          </div>     
        </div>
      </div>
  )
}




export default Hero