// import './App.css'
import {BrowserRouter} from 'react-router-dom'
import HeaderBar from './ui/HeaderBar.jsx'
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return(
    <>
      <CssBaseline /> 
      <BrowserRouter>
        <HeaderBar />
      </BrowserRouter>
    </>
  )
}

export default App
