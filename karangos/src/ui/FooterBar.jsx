import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CoffeeIcon from '@mui/icons-material/Coffee';

export default function FooterBar() {
 return <>
   <Box
     component="footer"
     sx={{
       backgroundColor: 'action.disabledBackground',
       display: 'flex',
       justifyContent: 'center',
       position: 'fixed',  // posição fixa
       bottom: 0,          // na parte de baixo da página
       width: '100vw'
     }}
   >
   
     <Typography
       variant="caption"
       sx={{
         '& a': {  // Altera a cor do link (a) dentro do Typography (&)
           color: 'secondary.light'
         }
       }}
     >
       Desenvolvido e mantido com <CoffeeIcon fontSize="small"/> por <a href="mailto:professor@faustocintra.com.br">Prof. Fausto Cintra</a>
     </Typography>
   </Box>
 </>
}
