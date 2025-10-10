import React from 'react'
import './App.css'
import Exercicio01 from './exercicios/01.jsx'
import Exercicio02 from './exercicios/02.jsx'
import Exercicio03 from './exercicios/03.jsx'
import Exercicio04 from './exercicios/04.jsx'
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import Home from './Home'

function App() {

  return (
    <>
      <h1>Exercícios React Hooks</h1>
      <BrowserRouter>
        <ul>
          <li> <Link to="/">Página inicial</Link> </li>
          <li> <Link to="/01">Exercício 1</Link> </li>
          <li> <Link to="/02">Exercício 2</Link> </li>
          <li> <Link to="/03">Exercício 3</Link> </li>
          <li> <Link to="/04">Exercício 4</Link> </li>
        </ul>
        
        <hr />

        <Routes>
          {/* path="/" significa a raiz do website */}
          <Route path="/" element={<Home />} />
          <Route path="/01" element={<Exercicio01 />} />
          <Route path="/02" element={<Exercicio02 />} />
          <Route path="/03" element={<Exercicio03 />} />
          <Route path="/04" element={<Exercicio04 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App