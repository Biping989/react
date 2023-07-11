import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layouts from './Components/Layouts'
import Homepage from './Pages/Homepage'
import Login from './Pages/Login'
import IncrementDecrement from './Hooks/IncrementDecrement'
import Effect from './Hooks/Effect'
import Datafetch from './Hooks/Datafetch'
import Products from './Pages/Products'
import ProductDetails from './Pages/ProductDetails'
import Cart from './Pages/Cart'
import Register from './Pages/Register'
import Show from './Context/Show'
import TestNav from './Redux/TestNav'

const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layouts/>}>
        <Route index element={<Homepage/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='products' element={<Products/>}/>
        <Route path='productdetails/:productId' element={<ProductDetails/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='signup' element={<Register/>}/>
        </Route>

        <Route path='/Hooks/first' element={<IncrementDecrement/>}/>
        <Route path='/Hooks/second' element={<Effect/>}/>
        <Route path='/Hooks/data' element={<Datafetch/>}/>
        <Route path='Context/show' element={<Show/>}/>
        <Route path='Redux/cart' element={<TestNav/>}/>
      </Routes>
    </Router>
  )
}

export default MyRoutes;