import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@material-ui/core/Typography';






const Burger = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='bars'>
    <Button onClick={handleOpen} className="burger" id="basic-button" color="inherit">
         <i className="fas fa-bars fa-lg"></i>
    </Button>
    <Modal
        open={open}
        onClose={handleClose}
      >
        <Box className='modal'>
          <Button href='#overlay' color="inherit">Home</Button>
          <Button href='#tokenomics' color="inherit">Tokenomics</Button>
          <Button href='#roadmap'color="inherit">Roadmap</Button>
          <Button href='#footer' color="inherit">Socials</Button>
        </Box>
      </Modal>
    </div>



  );
};

export default Burger;
