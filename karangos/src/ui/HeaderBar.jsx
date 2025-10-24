import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import logotipo from '../assets/karangos-logo-600px.png'

export default function HeaderBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Photos
          </Typography>
          <a href="/">
           <img 
            src={logotipo} 
            alt="Logotipo Karangos" 
            title="Karangos &bull; Os velhinhos são nossa paixão" 
            style={{ width: '300px' }}
            />
         </a>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
