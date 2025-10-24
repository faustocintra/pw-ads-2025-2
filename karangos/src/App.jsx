import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import { BrowserRouter } from 'react-router-dom'
import HeaderBar from './ui/HeaderBar'
import CssBaseline from '@mui/material/CssBaseline'

function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <HeaderBar />
      </BrowserRouter>
    </>
  )
}

export default App

//recomendações de design m3.material.io do Google para padronizar aplicações Android
//foi trazido para web também e traduziu-se para CSS.
//juntou com o React e formou-se a biblioteca pronta de design (componentes visuais): mui.com