import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

export default function Carlist() {

 const columns = [
   {
     field: 'id',
     headerName: 'Cód.',
     width: 90
   },
   {
      field: 'brand_model',
      headerName: 'Marca - Modelo',
      width: 200,
      renderCell: (value) => {
        const brand = value.row.brand;
        const model = value.row.model;
        return <>{`${brand} - ${model}`}</>; 
      }
   },
   {
     field: 'color',
     headerName: 'Cor',
     width: 145,
   },

   {
     field: 'year_manufacture',
     headerName: 'Ano de Fabricação',
     width: 150,
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
      renderCell: (params) => {
        // params.value é 1 (true) ou 0 (false)
        const imported = params.value
        return imported ? 'Sim' : ''
      },
    },
   {
     field: 'plates',
     headerName: 'Placas',
     width: 145,
   },
   {
     field: 'selling_price',
     headerName: 'Preço de Venda',
     width: 230,
      valueFormatter: value => {
         return value.toLocaleString('pt-BR',
          {
            style: 'currency',
            currency: 'BRL',
          });
      }
   },
   {
     field: 'selling_date',
     headerName: 'Data de Venda',
     width: 138,
     valueFormatter: value => {
       if(value) {
         const date = new Date(value)
         return date.toLocaleDateString('pt-BR')
       }
       else return ''
     }
   },
 ];


 const [car, setcar] = React.useState([])


 async function loadData() {
   try {
     // Conectamos ao servidor remoto e esperamos uma resposta
     const response = await fetch('https://api.faustocintra.com.br/v2/cars')
     // Extraímos da resposta os dados em formato JSON
     const data = await response.json()
     // Armazenamos os dados na variável de estado
     setcar(data)
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
     Listagem de Veículos
   </Typography>
    <Box sx={{ height: 400, width: '100%' }}>
     <DataGrid
       rows={car}
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
