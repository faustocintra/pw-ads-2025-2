import * as React from 'react'

function Greeting({initialName}) {
  // 🐨 inicialize o estado como o valor do localStorage
  // 💰 window.localStorage.getItem('name') ?? initialName
  const [name, setName] = React.useState(
    // Lazy initializer => quando o valor inicial de uma variável de estado
    // é FORNECIDO POR UMA FUNÇÃO, garantimos que esse valor valor inicial
    // seja atribuído apenas uma vez, na fase de montagem do componente
    () => window.localStorage.getItem('name') ?? initialName
  )
  // ?? é o operador de coalescência de nulo

  // function inicializarVar(){
  //   console.count('Inicializou "name"')
  //   window.localStorage.getItem('name') ?? initialName
  // }

  const [count, setCount] = React.useState(0)

  // 🐨 Aqui é onde usamos `React.useEffect`.
  // A função deve armazenar `name` no localStorage.
  // 💰 window.localStorage.setItem('name', name)
  React.useEffect(() => {
    window.localStorage.setItem('name', name)
    console.count('Componente foi atualizado')
  }, [name]) // - > vetor de dependências
  // Este useEffect será executado apenas quando o valor da variável de estado `name` mudar

  function handleChange(event) {
    setName(event.target.value)
  }
  return (
    <div>
      <form>
        <label htmlFor='name'>Name: </label>
        <input value={name} onChange={handleChange} id='name' />
      </form>
      {name ? <strong>Olá {name}</strong> : 'Por favor, informe seu nome'}
      <br /> <button onClick={() => setCount(count + 1)}>
        Contador: {count}
      </button>
    </div>
  )
}

function Exercicio02() {
  return Greeting({initialName: 'Mendes'})
}

export default Exercicio02