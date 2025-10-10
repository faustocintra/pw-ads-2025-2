import * as React from 'react'

function Name({name, onNameChange}) {
  return (
    <div>
      <label htmlFor="name">Nome: </label>
      <input id="name" value={name} onChange={onNameChange} />
    </div>
  )
}

// 🐨 aceite as props `animal` e `onAnimalChange` neste componente
function FavoriteAnimal({animal, onAnimalChange}) {
  return (
    <div><br />
      <label htmlFor="animal">Animal Favorito: </label>
      <input
        id="animal"
        value={animal}
        onChange={onAnimalChange}
      />
    </div>
  )
}

function Display({name, animal}) {
  return <div><hr />{`Olá ${name}, seu animal favorito é: ${animal}!`}</div>
}


function Exercicio03() {
  // 🐨 adicione um useState para o animal
  const [name, setName] = React.useState('')
  const [animal, setAnimal] = React.useState('')
  return (
    <form>
      <Name name={name} onNameChange={event => setName(event.target.value)} />
      <FavoriteAnimal animal={animal} onAnimalChange={event => setAnimal(event.target.value)} />
      <Display name={name} animal={animal} />
    </form>
  )
}

export default Exercicio03