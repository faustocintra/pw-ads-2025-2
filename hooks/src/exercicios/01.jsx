import * as React from 'react'
<<<<<<< HEAD
 
function Greeting({initialName}) {
  // 💣 exclua esta declaração de variável e troque por uma chamada a React.useState
  const [name, setName] = React.useState('')
 
  function handleChange(event) {
    // 🐨 atualize o nome aqui baseado em event.target.value
    setName(event.target.value)
  }
 
=======

function Greeting({initialName}) {
  // 💣 exclua esta declaração de variável e troque por uma chamada a React.useState
  const name = ''

  function handleChange(event) {
    // 🐨 atualize o nome aqui baseado em event.target.value
  }

>>>>>>> main
  return (
    <div>
      <form>
        <label htmlFor="name">Nome: </label>
<<<<<<< HEAD
        {/*
          Em React, um componente controlado é aquele que tem seu valor
          sincronizado com uma variável de estado.
          Assim, quando a variável de estado muda seu valor, o valor do componente
          muda, o valor da variável de estado também é alterado. No caso abaixo,
          isso é implementado associando o valor do atributo value à variável de estado.*/}
        <input onChange = {handleChange} id="name" value={name}/>
=======
        <input onChange={handleChange} id="name" />
>>>>>>> main
      </form>
      {name ? <strong>Olá {name}</strong> : 'Por favor, informe seu nome'}
    </div>
  )
}
<<<<<<< HEAD
 
function Exercicio01() {
  return Greeting({initialName: "Turíbio"})
}
 
export default Exercicio01
=======

function App() {
  return Greeting({initialName: "Turíbio"})
}

export default App
>>>>>>> main
