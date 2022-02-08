import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react'; 

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid className='top'>
      <AppBar className='appBar' position='absolute' sx={{ backgroundColor: '#333'}}>
        <Toolbar className='tBar'>
            <Typography variant="h4" component="h2" sx={{ paddingLeft: '40px'}}>
              React
              <i className='fab fa-react'></i>
            </Typography>
              <Button color="inherit">Home</Button>
              <Button color="inherit">Services</Button>
              <Button color="inherit">About Us</Button>
              <Button color="inherit">Portfolio</Button>
              <Button id="basic-button" onClick={handleClick} color="inherit">
                Dropdown
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
              <MenuItem onClick={handleClose}>Item 1</MenuItem>
              <MenuItem onClick={handleClose}>Item 2</MenuItem>
              <MenuItem onClick={handleClose}>Item 3</MenuItem>
            </Menu>
              <div>
                <Button color="inherit" variant="outlined" sx={{ marginRight: '20px'}}>Login</Button> 
                <Button color="inherit" variant="outlined">Sign Up</Button> 
              </div>            
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default Header;
