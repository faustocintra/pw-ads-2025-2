import * as React from 'react'
 
function Greeting({initialName = ''}) {
  // 🐨 inicialize o estado como o valor do localStorage
  // 💰 window.localStorage.getItem('name') ?? initialName
  const [name, setName] = React.useState(
    //verifica se existe algo salvo no loca storage com 
    //a chave "name". Caso não exista, usa ese valor. Se não 
    //existir, usa o valo rde initialName.
    window.localStorage.getItem('name') ?? initialName

    // lazy initializer => quando o valor inicial de uma variável 
    //de estado é FORNECIDO POR UMA FUNÇÃO, garantimos que esse
    //valor inicial seja atribuído apenas uma vez na faze de 
    //montagem do componente
    //() => inicializarVar()
  )
 
    //function inicializarVar(){
      //console.count('inicializou "name" !')
      //return window.localStorage.getItem('name') ?? initialName
    //}

    const [count, seCount] = React.useState(0)

  // 🐨 Aqui é onde usamos `React.useEffect`.
  // A função deve armazenar `name` no localStorage.
  // 💰 window.localStorage.setItem('name', name)
 
  React.useEffect(() => {
    window.localStorage.setItem('name', name)
    console.log("Componente foi atualizado!")
  }, [name]) //~> vetor de dependências
  // este useEffect será executado apaenas quando o valor da 
  // variável de estado "name" for alterado
 
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
      <br /> <button onClick={() => seCount(count+1)}> 
      Contagem: {count}
      </button>
    </div>
  )
}
 
function Exercicio02() {
  return <Greeting initialName ="Orozimbo" />
}
 
export default Exercicio02