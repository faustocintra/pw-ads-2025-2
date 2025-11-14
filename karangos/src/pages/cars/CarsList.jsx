import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

export default function CustomersList() {

  const columns = [
  {
    field: 'marca_modelo',
    headerName: 'Marca e Modelo ',
    width: 250,
    renderCell: (params) => (
      <>
        {params.row.brand} {params.row.model}
      </>
    )
  },
  {
    field: 'color',
    headerName: 'Cor',
    width: 100
  },
  {
    field: 'year_manufacture',
    headerName: 'Ano de fabricação',
    width: 200
  },
  {
    field: 'imported',
    headerName: 'Importado',
    width: 150,
    renderCell: (params) => {
      return params.value === 1 ? 'Sim' : ''  
    }
  },
  {
    field: 'plates',
    headerName: 'Placa',
    width: 150
  },
  {
    field: 'selling_price',
    headerName: 'Preço de venda',
    width: 200,
    valueFormatter: value => {
      return value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
        });
    }
  },
  {
    field: 'selling_date',
    headerName: 'Data de venda',
    width: 200,
    valueFormatter: value => {
      if(value) {
        const date = new Date(value)
        return date.toLocaleDateString('pt-BR')
      }
      else return ''
    }
  }
];

  const [customers, setCustomers] = React.useState([])


  async function loadData() {
    try {
      // Conectamos ao servidor remoto e esperamos uma resposta
      const response = await fetch('https://api.faustocintra.com.br/v2/cars')
      // Extraímos da resposta os dados em formato JSON
      const data = await response.json()
      // Armazenamos os dados na variável de estado
      setCustomers(data)
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
      Listagem de clientes
    </Typography>
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={customers}
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
