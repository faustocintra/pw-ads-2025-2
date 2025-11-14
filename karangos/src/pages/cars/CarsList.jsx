// http://localhost:5173/cars

import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

export default function CarList() {

const columns = [
   {
     field: 'brand',
     headerName: 'Marca',
     width: 150
   },
   {
     field: 'model',
     headerName: 'Modelo',
     width: 250
   },
   {
     field: 'color',
     headerName: 'Cor',
     width: 250
   },
   {
     field: 'year_manufacture',
     headerName: 'Ano de Fabricação',
     width: 250
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