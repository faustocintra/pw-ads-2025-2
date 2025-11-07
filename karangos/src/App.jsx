//import './App.css'
import { BrowserRouter } from 'react-router-dom'
import HeaderBar from './ui/HeaderBar'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import theme from './ui/theme'
import FooterBar from './ui/FooterBar'
import AppRoutes from './routes/AppRoutes'
import Box from '@mui/material/Box'


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <HeaderBar />
        {/* Dentro da prop "sx", "m" significa "margin" */}
        <Box id="innerRoot" sx={{ m: '48px 24px' }}></Box>
          <AppRoutes />
        </Box>
        <FooterBar />
      </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
