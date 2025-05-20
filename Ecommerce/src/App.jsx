
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router';
import Header from './components/Header'
import ProductsList from './pages/ProductsList'
import NotFound from './pages/NotFound'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
function App() {

  return (
    <>
      <div className='Application'>
        <div className='m-3'>
          <BrowserRouter>
            <Header />

            <Routes>
              <Route path="/" element={<ProductsList />}/>
              <Route path="product-details/:id" element={<ProductDetails/>} />
                <Route path="/cart" element={<Cart />} />


              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>

      </div>
    </>
  )
}

export default App
