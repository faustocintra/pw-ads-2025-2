import React from 'react'
import './App.css'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Home from './home'
import Exercicio01 from './exercicios/01'
import Exercicio02 from './exercicios/02'

function App() {
  return (
    <>
      <h1>Exercícios React Hooks</h1>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Página Inicial</Link>
          </li>
          <li>
            <Link to="/exercicio01">Exercício 01</Link>
          </li>
          <li>
            <Link to="/exercicio02">Exercício 02</Link>
          </li>
        </ul>
        <hr />
        <Routes>
          {/* path = Significa a raiz do website */}
          <Route path='/' element={<Home />} />
          <Route path='/exercicio01' element={<Exercicio01 />} />
          <Route path='/exercicio02' element={<Exercicio02 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App