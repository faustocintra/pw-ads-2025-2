import * as React from 'react'
import VanillaTilt from 'vanilla-tilt' 
//vanilla-tilt causa efeito 3d. Não tem nada haver com React. Usar para aprender como integrar bibliotecas externas com o React.


function Tilt({children}) {
  // 🐨 crie uma ref aqui usando React.useRef()
  const tiltRef = React.useRef()

  // 🐨 adicione uma função `React.useEffect` aqui e use VanillaTilt para
  // fazer sua div parecer fantástica.
  // 💰 assim:
  

  React.useEffect(() => {
    const tiltNode = tiltRef.current
    //A biblioteca Vanilla irá atuar sobre o elemento ao qual associamos o ref. O ref é a ponte. 
    VanillaTilt.init(tiltNode, {
      //os pacotes ficam num local chamado npm registry (pesquisa "npm nomedopacote" para ver explicações do uso do pacote)
      max: 25,
      speed: 400,
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
      Quando um useEffect retorna uma função, como no caso acima, 
      essa função será executada na fase de desmontagem do componente, 
      ou seja, qdo o componente for destruído ao descarregar a página
    */
  }, [])
  
  // 💰 Não se esqueça de especificar seu vetor de dependências! No nosso
  // caso, samemos que o nodo do tilt nunca muda, então ajuste o vetor para `[]`.

  // 🐨 adicione a prop `ref` à div `tilt-root` aqui:
  return (
    //uma div dentro da outra. Na inspeção, "selecionar elemento externo", vai ver que criou outras div para criar o efeito 3d.
    //essas div extras ocupam espaço adicional na memória e estão fora do controle do React porque estão em outra biblioteca.
    //boa prática: desmontar como mostrado acima: return () => tiltNode.vanillaTilt.destroy()
    <div className="tilt-root" ref={tiltRef}> 
      <div className="tilt-child">{children}</div>
    </div>
  )
}

function Exercicio05() {
  return (
    //quando uso o ref posso usar o mesmo elemento mais de uma vez dentro da página
    //se estivesse usando "id" só poderia usar uma vez e as outras seriam ignoradas.
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

export default Exercicio05