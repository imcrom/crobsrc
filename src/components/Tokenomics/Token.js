import React from 'react';
import { Box, textAlign } from '@mui/system';
import { Typography } from '@mui/material';
import pic1 from '../../files/wall1.png';
import pic2 from '../../files/wall2.png';
import {useEffect, useState} from 'react';
import AOS from "aos"
import { Tokenhead } from './Tokenhead';
import "aos/dist/aos.css"

export const Token = () => {

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    AOS.init({ duration: 1000});
    AOS.refresh();
}, []);


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return() => window.removeEventListener("scroll", handleScroll);
    
  }, []);



  return (
    <div id='tokenomics' className='back-g'>
      <div className='header-token'>
          <Tokenhead/>
          <div className='token'>
            <div className='text-container1'>
            <Typography data-aos="zoom-in" data-aos-duration="1000" sx={{  
                  fontSize: '50px', 
                  color: '#fff',
                  fontFamily: 'NINJA',
                  margin: '15%',
                  marginRight: '10%',
                  marginLeft: '10%',
                  marginBottom: 0,
                  marginTop: '26px',
                  textAlign: 'center',
                  paddingBottom: '40px',
                  fontSize: { xs: '15px', sm: '25px', md: '25px', lg: '30px', xl: '30px'},
                  }} variant='h4' component='h1'>The <b> Crobnobi</b> token is a token launched on cronos chain 
                                                  that features a low tax for development on marketing. The tax are
                                                  broken down as follows:</Typography>
                  <br></br>
            </div>
        </div>
      </div>


    <div className='token'>
      <div className='pic-container1'>
      <Box  data-aos="fade-up" data-aos-duration="1000"
            component="img"
            sx={{
              height: 720,
              width: 540,
              maxHeight: { xs: 300, sm: 300, md: 300, lg: 500, xl: 600},
              maxWidth: { xs: 250, sm: 250, md: 250, lg: 400, xl: 500},
              marginLeft: {xs: '0%',sm: '0%', md: '20%', lg: '20%', xl:'20%'},
            }}
            src={pic1}
          />
      </div>
      <div className='text-container1'>
      <Typography data-aos="fade-left" data-aos-duration="1000" sx={{ 
            fontFamily: 'NINJA', 
            color: '#fff',
            fontWeight: 'bold',
            fontSize: { xs: '30px', sm: '30px', md: '40px', lg: '50px', xl: '50px'},
            textAlign: {xs: 'center', sm: 'center', md: 'left', lg: 'left', xl: 'left'}
            }} variant='h2' component='h1'>Buy Tax</Typography>

      <Typography data-aos="fade-left" data-aos-duration="1000" sx={{  
            fontSize: { xs: '20px', sm: '20px', md: '30px', lg: '30px', xl: '30px'},
            color: '#fff',
            fontFamily: 'NINJA',
            textAlign: {xs: 'center', sm: 'center', md: 'left', lg: 'left', xl: 'left'},
            }} variant='h4' component='h1'><b>4% (1% Liquidity 3% Marketing and Development)</b></Typography>
            <br></br>
      </div>
    </div>



    <div className='token'>
      <div className='pic-container1'>
      <Box data-aos="fade-up" data-aos-duration="1000"
            component="img"
            sx={{
              height: 720,
              width: 540,
              maxHeight: { xs: 300, sm: 300, md: 300, lg: 500, xl: 600},
              maxWidth: { xs: 250, sm: 250, md: 250, lg: 400, xl: 500},
              marginLeft: {xs: '0%',sm: '0%', md: '20%', lg: '20%', xl:'20%'},
            }}
            src={pic2}
          />
      </div>

      <div className='text-container1'>
        <Typography data-aos="fade-right" data-aos-duration="1000" sx={{ 
              fontFamily: 'NINJA', 
              color: '#fff',
              fontWeight: 'bold',
              fontSize: { xs: '30px', sm: '30px', md: '40px', lg: '50px', xl: '50px'},
              textAlign: {xs: 'center', sm: 'center', md: 'left', lg: 'left', xl: 'left'},
              }} variant='h2' component='h1'>Sell Tax</Typography>

        <Typography data-aos="fade-right" data-aos-duration="1000" sx={{  
              fontSize: '50px', 
              fontSize: { xs: '20px', sm: '20px', md: '30px', lg: '30px', xl: '30px'},
              color: '#fff',
              fontFamily: 'NINJA',
              textAlign: 'right',
              textAlign: {xs: 'center', sm: 'center', md: 'left', lg: 'left', xl: 'left'},
              }} variant='h4' component='h1'><b>8% (2% Liquidity 6% Marketing and Development)</b></Typography>
              <br></br>
        </div>

    </div>
    
    </div>
    
  )
}
