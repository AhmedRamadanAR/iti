import { useEffect, useState } from 'react';
import LanguageContext from "./context/language";
import { BrowserRouter, Route, Routes } from 'react-router';  // نصيحة: استبدل 'react-router' بـ 'react-router-dom'
import Header from './components/Header';
import ProductsList from './pages/ProductsList';
import NotFound from './pages/NotFound';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';

function App() {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    // تغيير اتجاه الصفحة بناءً على اللغة
    if (language === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div className='Application'>
        <div className='m-3'>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<ProductsList />} />
              <Route path="product-details/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
