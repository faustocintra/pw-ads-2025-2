// import './App.css'
import { BrowserRouter } from 'react-router-dom'

import HeaderBar from './ui/HeaderBar.jsx'
import CssBaseline from '@mui/material/CssBaseline'

function App() {
 return (
   <>
     <BrowserRouter>
       <CssBaseline />
       <HeaderBar />
     </BrowserRouter>
   </>
 )
}


export default App
