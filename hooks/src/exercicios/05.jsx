import * as React from 'react'
import VanillaTilt from 'vanilla-tilt'
<<<<<<< HEAD
 
function Tilt({children}) {
  // 🐨 crie uma ref aqui usando React.useRef()
  const tiltRef = React.useRef()
 
=======

function Tilt({children}) {
  // 🐨 crie uma ref aqui usando React.useRef()

>>>>>>> main
  // 🐨 adicione uma função `React.useEffect` aqui e use VanillaTilt para
  // fazer sua div parecer fantástica.
  // 💰 assim:
  // const tiltNode = tiltRef.current
  // VanillaTilt.init(tiltNode, {
  //   max: 25,
  //   speed: 400,
  //   glare: true,
  //   'max-glare': 0.5,
  // })
<<<<<<< HEAD
  React.useEffect(() => {
    const tiltNode = tiltRef.current
    // A biblioteca vanilla-tilt irá atuar sobre o elemento
    // ao qual associamos o ref
    VanillaTilt.init(tiltNode, {
      max: 75,
      speed: 800,
      glare: true,
      'max-glare': 0.5,
    })
 
    // 💰 Não se esqueça de retornar uma função de limpeza. VanillaTilt.init
    // vai adicionar um objeto ao seu DOM, precisando ser eliminado:
    return () => {
      tiltNode.vanillaTilt.destroy()
      alert('Desmontado!')
    }
    /*
     Quando o useEffect retorna uma função, como no caso acima, essa função será executada
     na fase de DESMONTAGEM do componente, ou seja, quando o componente for destruido ao
     descarregar a página.
    */
 
  }, [])
 
 
  // 💰 Não se esqueça de especificar seu vetor de dependências! No nosso
  // caso, samemos que o nodo do tilt nunca muda, então ajuste o vetor para `[]`.
 
  // 🐨 adicione a prop `ref` à div `tilt-root` aqui:
  return (
    <div className="tilt-root" ref={tiltRef}>
=======
  
  // 💰 Não se esqueça de retornar uma função de limpeza. VanillaTilt.init 
  // vai adicionar um objeto ao seu DOM, precisando ser eliminado:
  // `return () => tiltNode.vanillaTilt.destroy()`
  
  // 💰 Não se esqueça de especificar seu vetor de dependências! No nosso
  // caso, samemos que o nodo do tilt nunca muda, então ajuste o vetor para `[]`.

  // 🐨 adicione a prop `ref` à div `tilt-root` aqui:
  return (
    <div className="tilt-root">
>>>>>>> main
      <div className="tilt-child">{children}</div>
    </div>
  )
}
<<<<<<< HEAD
 
=======

>>>>>>> main
function Exercicio05() {
  return (
    <>
      <Tilt>
        <div className="totally-centered">vanilla-tilt.js</div>
      </Tilt>
      <Tilt>
        <div className="totally-centered">vanilla-tilt.js</div>
      </Tilt>
    </>
  )
}
<<<<<<< HEAD
 
=======

>>>>>>> main
export default Exercicio05