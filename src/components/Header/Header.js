import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Burger from './Burger';
import React from 'react'; 

const Header = () => {


  return (
    <Grid className='top'>
      <AppBar className='appBar' position='relative' sx={{ backgroundColor: '#0A0608'}}>
        <Toolbar className='tBar'>
            <Typography variant="h4" component="h2" sx={{ color: '#EAC778', paddingLeft: {xs: '0px'}, fontFamily: 'NINJA',
                                                           fontSize: {xs: '25px'}}}>
              Arabian Shibnobi
            </Typography>
            <Button className='button' color="inherit" href='#overlay'>Home</Button>
            <Button className='button' color="inherit" href='#tokenomics'>Tokenomics</Button>
            <Button className='button' color="inherit" href='#roadmap'>Roadmap</Button>
            <Button className='button' color="inherit" href='#footer'>Socials</Button>
            <div>
              <Button className='button' color="inherit" variant="outlined" sx={{ color: '#EAC778', marginRight: '20px'}}>Presale</Button> 
              {/* <Button className='button' color="inherit" variant="outlined" sx={{ color: '#EAC778', marginRight: '20px'}} onClick={
                  (e) =>{
                    e.preventDefault();
                    window.location.href='https://app.bogged.finance/cro/swap?chain=cronos&tokenIn=CRO&tokenOut=0x90B29dB06577B0C5624E178A81377F2E0A095d2B&embed=1&theme=light';
                  }
                }>Buy Token</Button> 
              <Button className='button' color="inherit" variant="outlined" sx={{color: '#EAC778'}} onClick={
                  (e) =>{
                    e.preventDefault();
                    window.location.href='https://dexscreener.com/cronos/0xfb307dc1d74facef5a43bf34aabf2731571761b7';
                  }}>View Chart</Button>  */}
            </div>
          <Burger/>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default Header;
