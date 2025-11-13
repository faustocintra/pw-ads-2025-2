
import React from 'react'
import Typography from '@mui/material/Typography'

import Box from '@mui/material/Box' //importadas para visualização dos dados mais agradável ao usuário
import { DataGrid } from '@mui/x-data-grid'

export default function CustomersList() {

  const columns = [
    { field: 'id', //Na propriedade field, o valor informado deve coincidir com o nome de um campo existente nos dados.
    headerName: 'Cód.', //headerName é o rótulo que será exibido no cabeçalho da coluna.
    width: 90 }, //width é a largura da coluna
                                                    
    {
      field: 'name',
      headerName: 'Nome',  

      width: 250,
    },
    {
      field: 'birth_date',
      headerName: 'Data nasc.',
      width: 150,
      valueFormatter: value => {  //valueFormatter permite formatar os dados obtidos e exibi-los de uma outra maneira. 
        //foi usado na coluna birth_date para colocar a data no formato dia/mês/ano
        if(value){
          const date = new Date(value)
          return date.toLocaleDateString('pt-BR')
        }
        else return ''
      }
    },
    {
      field: 'municipality',
      headerName: 'Município/UF',
      width: 250,
      valueGetter: (value, row) => row.municipality + '/' + row.state
      //valueGetter permite personalizar ainda mais o conteúdo exibido na grid. 
      //Aqui, foi utilizado para exibir o município e a UF na mesma coluna, ganhando espaço.
    },
    {
      field: 'phone',
      headerName: 'Celular',
      width: 150,
    },
    {
      fiel: 'email',
      headerName: 'E-mail',
      width: 250
    }
  ];
 
  const [customers, setCustomers] = React.useState([])
    //Toda vez que o corpo de uma função usa a palavra-reservada await, 
    //a função precisa ser marcada como async, indicando que as instruções 
    //dentro dela não podem ser executadas sequencialmente sem pausa, como é o normal.
   async function loadData() {
   try {
     // Conectamos ao servidor remoto e esperamos uma resposta(await)
     const response = await fetch('https://api.faustocintra.com.br/v2/customers') //responsável por se conectar ao servidor remoto informado na URL e solicitar os dados.
     // Extraímos da resposta os dados em formato JSON
     const data = await response.json() //(await porque a extração pode demorar um pouco)
     // Armazenamos os dados na variável de estado usando a função set correspondente
     setCustomers(data)
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
   <Typography variant="h1" gutterBottom> {/*título da página não fique tão encostado no Data Grid*/}
     Listagem de clientes
   </Typography>
   
   {/* parte que exibe o Data Grid */}
   <Box sx={{ height: 400, width: '100%' }}>
     <DataGrid
       rows={customers} //consumir os dados da variável customers
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

