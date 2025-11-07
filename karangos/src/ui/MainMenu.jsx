import * as React from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom' //importado para mudar de página pelo menu

 
 
export default function MainMenu() {
 const [anchorEl, setAnchorEl] = React.useState(null);
 const open = Boolean(anchorEl);
 const handleClick = (event) => {
   setAnchorEl(event.currentTarget);
 };
 const handleClose = () => {
   setAnchorEl(null);
 };
 
 
 return (
   <div>
     <IconButton
       id="basic-button"
       aria-controls={open ? 'basic-menu' : undefined}
       aria-haspopup="true"
       aria-expanded={open ? 'true' : undefined}
       onClick={handleClick}
       edge="start"
       color="inherit"
       aria-label="menu" sx={{ mr: 2 }}
     >
       <MenuIcon />
     </IconButton>
 
     <Menu
       id="basic-menu"
       anchorEl={anchorEl}
       open={open}
       onClose={handleClose}
       slotProps={{
         list: {
           'aria-labelledby': 'basic-button',
         },
       }}
     >
       <MenuItem                  /*Trecho incluído para mudar de página através de um menu */
         onClick={handleClose}
         component={Link}
         to="/"
         divider
       >
         Página inicial
       </MenuItem>
      
       <MenuItem
         onClick={handleClose}
         component={Link}
         to="/cars"
       >
         Listagem de veículos
       </MenuItem>


       <MenuItem
         onClick={handleClose}
         component={Link}
         to="/customers"
       >
         Listagem de clientes
       </MenuItem>

       
     </Menu>
   </div>
 );
}
/* Quando passamos de uma página a outra, somente o conteúdo da área central 
é substituído - repare que as barras de cabeçalho e de rodapé permanecem inalteradas. 
A bem da verdade, não mudamos realmente de página, somente alteramos uma parte dela, 
e é por isso que o navegador não "pisca". Toda a nossa aplicação roda em apenas uma 
página. Aplicações que fazem uso dessa técnica são chamados 
SPA (Single Page Applications). A técnica SPA não é exclusiva do React ou 
da biblioteca MUI. O aplicativo SPA mais famoso talvez seja o Gmail, 
que é desenvolvido em Angular, o principal concorrente do React.
*/