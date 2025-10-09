import * as React from 'react'

function Greeting({initialName = ''}) {
  // 🐨 inicialize o estado como o valor do localStorage
  // 💰 window.localStorage.getItem('name') ?? initialName
  const [name, setName] = React.useState(
      // Verifica se exista algo salvo no local storage com 
      // a chave "name". Caso exista, usa esa esse valor. Se não
      // existir, uso o valor de initialName 
      //(Operador de coalescência de nulos)
      //window.localStorage.getItem('name') ?? initialName

      // Lazy initializer => quando o valor inicial de uma variável 
      // de estado é FORNECIDO POR UMA FUNÇÃO, garantimos que esse
      // valor inicial seja atribuído apenas uma vez, na fase de
      // montagem do componente 
      () => window.localStorage.getItem('name') ?? initialName
    )
  
  // function inicializarVar(){
  //   console.count('InicializarVar "name"!')
  //   return window.localStorage.getItem('name') ?? initialName
  // }

  const [count, setCount] = React.useState(0)
  // 🐨 Aqui é onde usamos `React.useEffect`.
  // A função deve armazenar `name` no localStorage.
  // 💰 window.localStorage.setItem('name', name)

  React.useEffect(() => {
    window.localStorage.setItem('name', name)
    console.count('Componente foi atualizado!')
  }, [name]) // ~> Vetor de dependências, atualiza apenas quando as variáveis do vetor são atualizadas
  // Sem o vetor de dependências, será executado em toda
  // e qualquer atualização da página

  function handleChange(event) {
    setName(event.target.value)
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Olá {name}</strong> : 'Por favor, informe seu nome'}
      <br /> <button onClick={() => setCount(count + 1)}>
        Contagem: {count}
      </button>
    </div>
  )
}

function Exercicio02() {
  return <Greeting initialName="Orozimbo"/>
}

export default Exercicio02