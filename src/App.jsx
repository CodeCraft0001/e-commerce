// import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route,Routes } from 'react-router'
import ProductDetails from './pages/ProductDetails'
import ShoppingCart from './pages/ShoppingCart'
import { Toaster } from 'react-hot-toast'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='d-flex flex-column min-vh-100'>
      <Header/>
    <div className='flex-grow-1'>
<Routes>
  <Route path='/' element={<Home/> }/>
  <Route path='/view/:id' element={<ProductDetails/> }/>
  <Route path='/cart' element={<ShoppingCart/> }/>
</Routes>   
<Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 2000,
          },
          error: {
            duration: 2000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 25px",
            backgroundColor: "#FF0000",
            color: "#FFF",
          },
        }}
      /> 
</div>     
   <Footer/>
    </div>
  )
}

export default App
