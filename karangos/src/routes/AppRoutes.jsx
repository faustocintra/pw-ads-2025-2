import { Routes, Route } from 'react-router-dom'
import Homepage from '../pages/Homepage.jsx'
import CarsList from '../pages/cars/CarsList'
import CustomersList from '../pages/costumers/CostumersList'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/cars" element={<CarsList />} />
      <Route path="/customers" element={<CustomersList />} />
    </Routes>
  )
}