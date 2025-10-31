// import './App.css'
import { BrowserRouter } from 'react-router-dom'

import HeaderBar from './ui/HeaderBar.jsx'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import theme from './ui/theme.jsx'
import FooterBar from './ui/FooterBar.jsx'

function App() {
 return (
   <>
     <ThemeProvider theme={theme}>
       <BrowserRouter>
         <CssBaseline />
         <HeaderBar />
         <FooterBar />
       </BrowserRouter>
     </ThemeProvider>
   </>
 )
}


export default App
