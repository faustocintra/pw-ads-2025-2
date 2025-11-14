import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

export default function CarsList() {

  const columns = [
    {
      field: 'id', //nome do campo
      headerName: 'Cód.', //titulo da coluna
      width: 90 //largura da coluna
    },
    { 
      field: 'brand', 
      headerName: 'Marca - Modelo', 
      width: 200,
      renderCell: (params) => (
        <span>
          {params.row.brand} - {params.row.model}
        </span>
      ) 
    },    
    {
      field: 'color',
      headerName: 'Cor',
      width: 150
    },
    {
      field: 'year_manufacture',
      headerName: 'Ano de Fabricação',
      width: 150
    },
    {
      field: 'imported',
      headerName: 'Importado',
      width: 150,
      //renderiza "Sim" se o valor for verdadeiro, caso contrário retorna uma string vazia
      renderCell: (params) => params.row.imported ? "Sim" : ""
    }, 
    {
      field: 'plates',
      headerName: 'Placas',
      width: 150
    },
    {
      field: 'selling_price',
      headerName: 'Preço de Venda',
      width: 150,
      //função para formatar o preço para a moeda brasileira
      renderCell: (params) => {
        if(params.row.selling_price) {
          return params.row.selling_price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })
        }
        return '' //retorna vazio se não houver preço no campo
      }
    },
    {
      field: 'selling_date',
      headerName: 'Data de Venda',
      width: 150,
      //função para formatar a data para o padrão pt-BR
      valueFormatter: (value) => {
        if(value) {
          const date = new Date (value)
          return date.toLocaleDateString('pt-BR')
        }
        return '' //retorna vazio se não houver data no campo 
      }      
    },    
  ];

  const [cars, setCars] = React.useState([])

  async function loadData() {
    try {
      // Conectamos ao servidor remoto e esperamos uma resposta
      const response = await fetch('https://api.faustocintra.com.br/v2/cars')
      // Extraímos da resposta os dados em formato JSON
      const data = await response.json()
      // Armazenamos os dados na variável de estado
      setCars(data)
    }
    catch(error) {
      // Exibimos o erro no console, para efeitos de depuração
      console.error(error)
      // Informamos o erro ao usuário
      alert('ERRO: ' + error.message)
    }
  }

  React.useEffect(() => {
    loadData()
  }, [])

  return <>
    <Typography variant="h1" gutterBottom>
      Listagem de carros
    </Typography>
     <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={cars}
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