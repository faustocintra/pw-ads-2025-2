import * as React from 'react'

//como fazer a comunicação de componentes que por padrão um não sabe o conteúdo do outro?
//cada função é um componente autocontido
//precisa fazer a elevação de estado para solucionar isso

function Name({name, onNameChange}) { //não tem variável de estado dentro dela. 
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input id="name" value={name} onChange={onNameChange} />
    </div>
  )
}

// 🐨 aceite as props `animal` e `onAnimalChange` neste componente
function FavoriteAnimal({animal, onAnimalChange}) {
  // 💣 delete this, it's now managed by the App
  //const [animal, setAnimal] = React.useState('') passa essa variável de estado para dentro do pai (Exercicio03)
  return (
    <div>
      <label htmlFor="animal">Favorite Animal: </label>
      <input
        id="animal" value={animal} 
        //onChange={event => setAnimal(event.target.value)} //modifica para onAnimalChange
        onChange={(onAnimalChange)}
      />
    </div>
  )
}

// 🐨 descomente isso
function Display({name, animal}) {
return <div>{`Olá ${name}, seu animal favorito é: ${animal}!`}</div>
}


// 💣 exclua esse componente que só mostra o name e use o novo que mostra animal também
// function Display({name}) {
//    return <div>{`Hey ${name}, you are great!`}</div>
// }

function Exercicio03() {
  // 🐨 adicione um useState para o animal
  const [name, setName] = React.useState('') //aqui a variável de estado está dentro do pai
  const [animal, setAnimal] = React.useState('')//Elevação de estado: o pai subiu para o estado do pai
  return (
    <form>
      <Name name={name} onNameChange={event => setName(event.target.value)} /> {/*onNameChange chama o setName do pai. 
      Depois o pai consegue repassar essa informação para outros filhos */}
      {/* 🐨 passe o animal e a prop onAnimalChange aqui (similar ao componente Name acima) */}
      <FavoriteAnimal animal={animal} onAnimalChange={event => setAnimal(event.target.value)}/>
      {/* 🐨 passe a prop do animal aqui */}
      <Display name={name} animal={animal}/>
    </form>
  )
}

export default Exercicio03