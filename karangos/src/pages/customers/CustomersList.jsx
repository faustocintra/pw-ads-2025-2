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
     field: 'name',
     headerName: 'Nome',
     width: 250
   },
   {
     field: 'birth_date',
     headerName: 'Data nasc.',
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
     field: 'municipality',
     headerName: 'Município/UF',
     width: 250,
     valueGetter: (value, row) => row.municipality + '/' + row.state
   },
   {
     field: 'phone',
     headerName: 'Celular',
     width: 150
   },
   {
     field: 'email',
     headerName: 'E-mail',
     width: 250
   }
 ];


 const rows = [
   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
 ];


  const [customers, setCustomers] = React.useState([])

  async function loadData() {
   try {
     // Conectamos ao servidor remoto e esperamos uma resposta
     const response = await fetch('https://api.faustocintra.com.br/v2/customers')
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

    <div>
     { JSON.stringify(customers) }
    </div>
  </>
}
