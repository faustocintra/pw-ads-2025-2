import { createTheme } from '@mui/material/styles'
import { yellow, pink } from '@mui/material/colors'


const theme = createTheme({
 palette: {
   mode: 'dark',
   primary: {
     main: yellow[500]
   },
   secondary: {
     main: pink[500]
   }
 },
 typography: {  //usando sistema de temas da biblioteca MUI para ajustar tamanho e fonte das páginas
   h1: {
     fontSize: '2.5rem',
     fontWeight: 'bold'
   }
 }
})


export default theme