// import './App.css'
import { BrowserRouter } from 'react-router-dom'
 
 
import HeaderBar from './ui/HeaderBar'

import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box' //importado para colocar o texto das páginas dentro de um box com margens configuradas
 
import { ThemeProvider } from '@mui/material/styles'
import theme from './ui/theme'
 
 
import FooterBar from './ui/FooterBar'
 
import AppRoutes from './routes/AppRoutes' //incluído para carregar as rotas qdo a aplicação for iniciada

 
function App() {
 return (
   <>
    <ThemeProvider theme={theme}>
     
      <CssBaseline />
     
      <BrowserRouter>
        <HeaderBar />
        {/* Dentro da prop "sx", "m" significa "margin". Por padrão as margens do box são invisíveis. */}
        <Box id="innerRoot" sx={{ m: '48px 24px' }}> {/*margem de 48px nas bordas superior e inferior e uma margem de 24px nas bordas esquerda e direita. */}
          <AppRoutes /> {/*Aqui é a área onde o conteúdo das páginas vai aparecer */}
        </Box>
        <FooterBar />
      </BrowserRouter>
   
    </ThemeProvider>
   </>
 )
}
 
 
export default App


//recomendações de design m3.material.io do Google para padronizar aplicações Android
//foi trazido para web também e traduziu-se para CSS.
//juntou com o React e formou-se a biblioteca pronta de design (componentes visuais): mui.com