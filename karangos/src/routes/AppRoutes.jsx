import { Routes, Route } from 'react-router-dom'


import Homepage from '../pages/Homepage'


import CarsList from '../pages/car/CarsList'
import CustomersList from '../pages/customers/CustomersList'


export default function AppRoutes() {
 return <Routes>
   <Route path="/" element={ <Homepage /> } />


   <Route path="/cars" element={ <CarsList /> } />
   <Route path="/customers" element={ <CustomersList /> } />
  
 </Routes>
}
