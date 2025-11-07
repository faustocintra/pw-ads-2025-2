// import './App.css'
import { BrowserRouter } from 'react-router-dom'


import HeaderBar from './ui/HeaderBar'


import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'


import { ThemeProvider } from '@mui/material/styles'
import theme from './ui/theme'


import FooterBar from './ui/FooterBar'


import AppRoutes from './routes/AppRoutes'


function App() {
 return (
   <>
     <ThemeProvider theme={theme}>
      
       <CssBaseline />
      
       <BrowserRouter>
         <HeaderBar />


         {/* Dentro da prop "sx", "m" significa "margin" */}
         <Box id="innerRoot" sx={{ m: '48px 24px' }}>
           <AppRoutes />
         </Box>


         <FooterBar />
       </BrowserRouter>
    
     </ThemeProvider>
   </>
 )
}


export default App