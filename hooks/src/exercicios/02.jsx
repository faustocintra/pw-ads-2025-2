import * as React from 'react'

function Greeting({initialName = ''}) {
  // 🐨 inicialize o estado como o valor do localStorage
  // window.localStorage.getItem('name') ?? initialName --> VERIFICA SE TEM VALOR NO LOCALSTORAGE, SE TIVER USA ELE, SE NAO USA O INITIALNAME
  const [name, setName] = React.useState(() => window.localStorage.getItem('name') ?? initialName)

  React.useEffect(() => {
    window.localStorage.setItem('name', name)
  }, [name])

  function handleChange(event) {
    setName(event.target.value)
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Nome: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form><br />
      {name ? <strong>Olá, {name}</strong> : 'Por favor, informe seu nome'}!
    </div>
  )
}

function Exercicio02() {
  return <Greeting initialName='Isabel'/>
}

export default Exercicio02