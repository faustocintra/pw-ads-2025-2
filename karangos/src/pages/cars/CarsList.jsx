
import React from 'react'
import Typography from '@mui/material/Typography'

import Box from '@mui/material/Box' //importadas para visualização dos dados mais agradável ao usuário
import { DataGrid } from '@mui/x-data-grid'

export default function CarsList() {

  const columns = [  
    {
      field: 'brand/model',
      headerName: 'marca/modelo',
      width: 250,
      renderCell: (params) => {
        // params.row contém todos os dados da linha (brand, modelo)
        const brand = params.row.brand
        const modelo = params.row.modelo
        
        return `${brand} / ${modelo}`
      }
      },
    {
      field: 'color', //headerName é o rótulo que será exibido no cabeçalho da coluna.
      headerName: 'cor', //Na propriedade field, o valor informado deve coincidir com o nome de um campo existente nos dados.
      width: 150  //width é a largura da coluna
      
    },
    {
      field: 'year_manufacture',
      headerName: 'ano de fabricação',
      width: 150
    },
     
    {
      field: 'imported',
      headerName: 'importado',
      width: 150,
      renderCell: (params) => {
        // params.value é o valor da propriedade 'imported' (1 ou 0)
        const imported = params.value 
        return imported === 1 ? 'SIM' : ''
      },
    },
    {
      field: 'plates',
      headerName: 'placas',
      width: 150
    },

    {
      field: 'selling_price',
      headerName: 'preço de venda',
      width: 150,
      valueFormatter: value => {  //valueFormatter permite formatar os dados obtidos e exibi-los de uma outra maneira. 
        if(value){
          return value.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })
        }
      
      }
    }, 
    {
      field: 'selling_date',
      headerName: 'data de venda',
      width: 150,
      valueFormatter: value => {  //valueFormatter permite formatar os dados obtidos e exibi-los de uma outra maneira. 
        // para colocar a data no formato dia/mês/ano
        if(value){
          const date = new Date(value)
          return date.toLocaleDateString('pt-BR')
        }
        else return ''
      }
    },
  ];
 
  const [cars, setCars] = React.useState([])
    //Toda vez que o corpo de uma função usa a palavra-reservada await, 
    //a função precisa ser marcada como async, indicando que as instruções 
    //dentro dela não podem ser executadas sequencialmente sem pausa, como é o normal.
   async function loadData() {
   try {
     // Conectamos ao servidor remoto e esperamos uma resposta(await)
     const response = await fetch('https://api.faustocintra.com.br/v2/cars') //responsável por se conectar ao servidor remoto informado na URL e solicitar os dados.
     // Extraímos da resposta os dados em formato JSON
     const data = await response.json() //(await porque a extração pode demorar um pouco)
     // Armazenamos os dados na variável de estado usando a função set correspondente
     setCars(data)
   }
   //Caso alguma etapa do processo de busca e extração dos dados falhe, 
   //a execução será desviada para a seção catch
   catch(error) {
     // Exibimos o erro no console para posterior análise de depuração
     console.error(error)
     // Informamos o erro ao usuário mas com mensagem menos detalhada do erro
     alert('ERRO: ' + error.message)
   }
 }
 //O melhor momento para executar a função loadData é durante o carregamento do 
 //componente CustomersList, por isso o useEffect com vetor de dependências vazio 
 //e chamada da função
  React.useEffect(()=> {
    loadData()
  }, [])

 return <>
   <Typography variant="h1" gutterBottom> {/*p/ que o título da página não fique tão encostado no Data Grid*/}
     Listagem de veículos
   </Typography>
   
   {/* parte que exibe o Data Grid */}
   <Box sx={{ height: 400, width: '100%' }}>
     <DataGrid
       rows={cars} //consumir os dados da variável cars
       columns={columns}
       initialState={{
         pagination: {
           paginationModel: {
             pageSize: 5,
           },
         },
       }}
       pageSizeOptions={[5]}
       checkboxSelection
       disableRowSelectionOnClick
     />
   </Box>
 </>
}



