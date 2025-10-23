//hooks é front-end. Agora vamos consumir dados de um back-end... 
//enviar requisição e receber resposta (request - response(sistema tipo cliente-servidor))

import * as React from 'react'
// 🐨 você vai precisar dos seguintes itens de '../pokemon':
// fetchPokemon: a função que retorna as informações do pokémon
// PokemonInfoFallback: o que é exibido enquanto as informações do pokémon
// são carregadas
// PokemonDataView: o componente usado para exibir as informações do pokémon
import {PokemonForm, fetchPokemon, PokemonInfoFallback, PokemonDataView } from '../../pokemon'

function PokemonInfo({pokemonName}) {
  // 🐨 crie o estado para o pokémon (null) -- pokemon é um objeto
  // const [pokemon, setPokemon] = React.useState(null)
  // const [error, setError] = React.useState(null) 
  // const [status, setStatus] = React.useState('IDLE') //INICIA COM ESTADO OCIOSO

  //criar uma única variável de estado (state) e fazer atualizações parciais
  const[state, setState] = React.useState({
    pokemon: null,
    error: null,
    status: 'IDLE'
  })

  //Criando constantes somente-leitura a partir da desestruturação
  //da nova variável de estado para maximizar a compatibilidade com 
  //o código já existente
  const {pokemon, error, status} = state

  //Para não usar um monte de if com os estados das requisições, criamos mais uma variável de estado (const status) e uma switch com as opções

  // 🐨 crie React.useEffect de modo a ser chamado sempre que pokemonName mudar.
  // 💰 NÃO SE ESQUEÇA DO VETOR DE DEPENDÊNCIAS!
  React.useEffect(() => {

    //💰 se pokemonName é falso (ou uma string vazia) não se preocupe em fazer 
    //a requisição (retorne precocemente).
    if(! pokemonName) return

    //🐨 antes de chamar `fetchPokemon`, limpe o estado atual do pokemon
    //ajustando-o para null. 
    //desse jeito a cada atualização de variável vai atualizar a página e não é bom para memória   
      // setPokemon(null)
      // setError(null)
      // setStatus('PENDING') //PENDENTE
      setState({
        pokemon: null,
        error: null,
        status: 'PENDING' //PENDENTE
      })

    // (Isso é para habilitar o estado de carregamento ao alternar entre diferentes
    // pokémon.)
    //💰 Use a função `fetchPokemon` para buscar um pokémon pelo seu nome:
    // fetchPokemon('Pikachu').then(
    // pokemonData => {/* atualize todos os estados aqui */}
    //) 
    
    // a partir daqui a requisição sai do useEffect e não dá pra saber quanto tempo demora pra o servidor retornar (programação assíncrona -> a ordem da lista é aleatória)
    // enquanto isso fica carregando
    fetchPokemon(pokemonName)                      //manda requisição para o servidor remoto (pokemonName é a requisição). O then só é executado quando o servidor retornar
      .then(pokemonData => {
        // setPokemon(pokemonData) /* atualize todos os estados aqui */
        // setStatus('RESOLVED') // Requisição resolvida

        // ...state copia o estado atual antes de alterá-lo
        setState({...state, pokemon: pokemonData, status: 'RESOLVED'})
      })
      .catch(error => {
        // setError(error)
        // setStatus('ERROR') // Requisição com erro
        
        // Em vez de error: error, podemos usar apenas error
        // com efeito da propriedade abreviada 
        setState({...state, error, status: 'ERROR'})
      })
               
  }, [pokemonName])

  //Este useEffect será executado após qualquer alteração,
  //para visualizar a qtde d atualizações
  React.useEffect(() => {
    console.count('ATUALIZOU')
  })

    //🐨 retorne o seguinte baseado nos estados `pokemon` e `pokemonName`:
    //  1. não há pokemonName: 'Informe um pokémon'
    //  2. tem pokemonName mas não pokemon: <PokemonInfoFallback name={pokemonName} /> como uma mensagem de carregando
    //  3. tem pokemon: <PokemonDataView pokemon={pokemon} /> dados com a ficha completa

    switch(status){
      case 'IDLE':
        return 'Informe um pokemon'
      case 'PENDING':
        return <PokemonInfoFallback name={pokemonName} />  
        default:    // 'ERROR'
        return <div role="alert">
          Ocorreu um erro: <pre style={{whiteSpace: 'normal'}}> {error.message} </pre>
        </div>
    }

    // if foi substituído pelo switch
    // if (error) return <div role="alert">
    //   Ocorreu um erro: <pre style={{whiteSpace: 'normal'}}> {error.message}</pre>
    // </div>
    // if(! pokemonName) return 'Informe um pokemon'
    // if(pokemonName && !pokemon) return <PokemonInfoFallback name={pokemonName} />
    // else return <PokemonDataView pokemon={pokemon} />

  // 💣 remova isso
  // return 'TODO'
}

function Exercicio06() {
  const [pokemonName, setPokemonName] = React.useState('')

  function handleSubmit(newPokemonName) {  //chama o setPokemonName, se não tiver nome não faz nada
    setPokemonName(newPokemonName)
  }

  return (
    <div className="pokemon-info-app">
      <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
      <hr />
      <div className="pokemon-info">
        <PokemonInfo pokemonName={pokemonName} />
      </div>
    </div>
  )
}

export default Exercicio06