import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';


export default function CarsList() {

  const columns = [
  
    {
      field: 'brand_model',
      headerName: 'Marca / Modelo',
      width: 200,
      renderCell: (params) => `${params.row.brand} - ${params.row.model}`
    },

    {
      field: 'color',
      headerName: 'cor',
      width: 200,
    },

    {
      field: 'year_manufacture',
      headerName: 'Ano de fabricação',
      width: 300,
    valueFormatter: value => {
      if(value) {
        const date = new Date(value)
        return date.toLocaleDateString('pt-BR')
      }
      else return ''
    }
    },

    {
      field: 'imported',
      headerName: 'Importado',
      width: 100,
      renderCell: (p) => {
        const importado = p.value
        return importado ? 'Sim' : ''
      },
    },
 
   
    {
      field: 'plates',
      headerName: 'placas',
      width: 250
    },

    {
      field: 'selling_price',
      headerName: 'Preco de venda',
      width: 250,

      valueFormatter: (value) => {
        return `R$ ${Number(value).toFixed(2)}`;
    }
    

    },

    {
      field: 'selling_date',
      headerName: 'Data de venda',
      width: 250,
      valueFormatter: value => {
        if(value) {
          const date = new Date(value)
          return date.toLocaleDateString('pt-BR')
        }
        else return ''
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
     Listagem de Carros
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
