import * as React from 'react'

function Greeting({initialName}) {
  // 💣 exclua esta declaração de variável e troque por uma chamada a React.useState
  const name = ''

  function handleChange(event) {
    // 🐨 atualize o nome aqui baseado em event.target.value
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Nome: </label>
        <input onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Olá {name}</strong> : 'Por favor, informe seu nome'}
    </div>
  )
}

function App() {
  return Greeting({initialName: "Turíbio"})
}

export default App