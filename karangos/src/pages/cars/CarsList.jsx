import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

export default function CustomersList() {

  const columns = [
    {
      field: 'id',
      headerName: 'Cód.',
      width: 90
    },
    {
      field: 'brandModel',
      headerName: 'Marca e Modelo',
      width: 250,
      renderCell: params => {
        return params.row.brand + " " + params.row.model
      }
    },
    {
      field: 'color',
      headerName: 'Cor',
      width: 150
    },
    {
      field: 'year_manufacture',
      headerName: 'Ano de Fabr.',
      width: 150
    },
    {
      field: 'imported',
      headerName: 'Importado',
      width: 150,
      renderCell: params => {
        return params.value === 1 ? "SIM" : ""
      }
    },
    {
      field: 'plates',
      headerName: 'Placa',
      width: 150
    },
    {
      field: 'selling_price',
      headerName: 'Preço de Venda',
      width: 150,
      valueFormatter: value => {
        return value.toLocaleString("pt-BR", {style:"currency", currency:"BRL"})
      }
    },
    {
      field: 'selling_date',
      headerName: 'Data de Venda',
      width: 150,
      valueFormatter: value => {
        return value ? new Date(value).toLocaleString("pt-BR") : null
      }
    },
  ]; 

  const [cars, setcars] = React.useState([])

  async function loadData() {
    try {
      // Conectamos ao servidor remoto e esperamos uma resposta
      const response = await fetch('https://api.faustocintra.com.br/v2/cars')
      // Extraímos da resposta os dados em formato JSON
      const data = await response.json()
      // Armazenamos os dados na variável de estado
      setcars(data)
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
      Listagem de veículos
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
