import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  //entra na página, carrega, descarrega. Usado só para desenvolvimento. POde remover ou comentar
  //<StrictMode>
    <App />
  //</StrictMode>,
)
