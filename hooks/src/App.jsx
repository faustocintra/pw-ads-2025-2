import React from 'react'
import './App.css'
import Exercicio01 from './exercicios/01.jsx'
import Exercicio02 from './exercicios/02.jsx'

import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'

import Home from './Home'

function App() {

  return (
    <>
      <h1>Exercícios React Hooks</h1>
      <BrowserRouter>
        <ul>
          <li> <Link to="/">Página inicial</Link> </li>
          <li> <Link to="/01">Exercício 01</Link> </li>
          <li> <Link to="/02">Exercício 02</Link> </li>
        </ul>
        
        <hr />

        <Routes>
          {/* path="/" significa a raiz do website */}
          <Route path="/" element={<Home />} />
          <Route path="/01" element={<Exercicio01 />} />
          <Route path="/02" element={<Exercicio02 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App