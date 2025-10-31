import React from 'react'
import Box from '@mui/material/Box'


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
     Texto de teste
   </Box>
 </>
}
