import React from 'react'
import './App.css'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Home from './home'
import Exercicio01 from './exercicios/01'
import Exercicio02 from './exercicios/02'
import Exercicio03 from './exercicios/03'
import Exercicio04 from './exercicios/04'
import Exercicio05 from './exercicios/05'
import Exercicio06 from './exercicios/06'   

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
          <li>
            <Link to="/exercicio03">Exercício 03</Link>
          </li>
              <li>
                <Link to="/exercicio04">Exercício 04</Link>
              </li>
              <li>
                <Link to="/exercicio05">Exercício 05</Link>
              </li> 
              <li>
                <Link to="/exercicio06">Exercício 06</Link>
              </li>

        </ul>
        <hr />
        <Routes>
          {/* path = Significa a raiz do website */}
          <Route path='/' element={<Home />} />
          <Route path='/exercicio01' element={<Exercicio01 />} />
          <Route path='/exercicio02' element={<Exercicio02 />} />
          <Route path='/exercicio03' element={<Exercicio03 />} />
          <Route path='/exercicio04' element={<Exercicio04 />} />
          <Route path='/exercicio05' element={<Exercicio05 />} />
          <Route path='/exercicio06' element={<Exercicio06 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App