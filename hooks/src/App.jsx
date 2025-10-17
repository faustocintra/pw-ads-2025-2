import React from 'react'
import './App.css'

import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'

import Home from './Home'
import Exercicio01 from './exercicios/01.jsx'
import Exercicio02 from './exercicios/02.jsx'
import Exercicio03 from './exercicios/03.jsx'
import Exercicio04 from './exercicios/04.jsx'
import Exercicio05 from './exercicios/05.jsx'
import Exercicio06 from './exercicios/06.jsx'

function App() {

  return (
    <>
      <h1>Exercícios React Hooks</h1>
      <BrowserRouter>
        <ul>
          <li> <Link to="/">Página inicial</Link> </li>
          <li> <Link to="/01">Exercício 01</Link> </li>
          <li> <Link to="/02">Exercício 02</Link> </li>
          <li> <Link to="/03">Exercício 03</Link> </li>
          <li> <Link to="/04">Exercício 04</Link> </li>
          <li> <Link to="/05">Exercício 05</Link> </li>
          <li> <Link to="/06">Exercício 06</Link> </li>
        </ul>
        
        <hr />

        <Routes>
          {/* path="/" significa a raiz do website */}
          <Route path="/" element={<Home />} />
          <Route path="/01" element={<Exercicio01 />} />
          <Route path="/02" element={<Exercicio02 />} />
          <Route path="/03" element={<Exercicio03 />} />
          <Route path="/04" element={<Exercicio04 />} />
          <Route path="/05" element={<Exercicio05 />} />
          <Route path="/06" element={<Exercicio06 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
