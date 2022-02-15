import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Burger from './Burger';
import React from 'react'; 

const Header = () => {

  //State setup for dropdown in Nav
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () =>{
    setAnchorEl(null);
  }


  return (
    <Grid className='top'>
      <AppBar className='appBar' position='absolute' sx={{ backgroundColor: '#333'}}>
        <Toolbar className='tBar'>
            <Typography variant="h4" component="h2" sx={{ paddingLeft: '40px'}}>
              React
              <i className='fab fa-react'></i>
            </Typography>
            <Button className='button' color="inherit">Home</Button>
            <Button className='button' color="inherit">Services</Button>
            <Button className='button' color="inherit">About Us</Button>
            <Button className='button' color="inherit">Portfolio</Button>
            <Button className='button' id="basic-button" onClick={handleClick} color="inherit">
              Dropdown <i className="fas fa-angle-double-down"></i>
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
            <MenuItem onClick={handleClose}>Item 1</MenuItem>
            <MenuItem onClick={handleClose}>Item 2</MenuItem>
            <MenuItem onClick={handleClose}>Item 3</MenuItem>
          </Menu>
            <div>
              <Button className='button' color="inherit" variant="outlined" sx={{ marginRight: '20px'}}>Login</Button> 
              <Button className='button' color="inherit" variant="outlined">Sign Up</Button> 
            </div>
          <Burger/>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default Header;
