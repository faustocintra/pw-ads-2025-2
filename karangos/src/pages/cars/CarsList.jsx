import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

export default function CarsList() {

  const columns = [
    {
      field: 'id',
      headerName: 'Cód.',
      width: 90
    },
    { 
      field: 'brand', 
      headerName: 'Marca - Modelo', 
      width: 200,
      // renderCell permite customizar como o conteúdo da célula é exibido.
      // params contém informações da linha (params.row).
      renderCell: (params) => (
        <span>
          {params.row.brand} - {params.row.model}
        </span>
      ) 
    },    
    {
      field: 'color',
      headerName: 'cor',
      width: 150
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
      // exibe "Sim" se o valor for 'true', ou nada "" se for 'false'
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
      // renderCell formata o número como moeda local (BRL)
      renderCell: (params) => {
        if(params.row.selling_price) {
          // toLocaleString formata o número para o padrão pt-BR como BRL (R$)
          return params.row.selling_price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })
        }
        return '' // retorna vazio se não houver preço
      }
    },
    {
      field: 'selling_date',
      headerName: 'Data de Venda',
      width: 150,
      // value é o valor bruto vindo do 'field' (ex: "2023-10-27T10:00:00Z").
      valueFormatter: (value) => {
        // verifica se o valor não é nulo ou indefinido.
        if(value) {
          const date = new Date(value)
          // formata a data para o padrão local brasileiro (pt-BR), resultando em algo como "dd/mm/aaaa"
          return date.toLocaleDateString('pt-BR')
        }
        return '' // retorna valor vazio se for null
      }
    }
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