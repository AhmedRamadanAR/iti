import { useEffect, useState ,lazy, Suspense} from 'react';
import LanguageContext from "./context/language";
import { BrowserRouter, Route, Routes} from 'react-router';  
import Header from './components/Header';

const ProductsList=lazy(()=>import("./pages/ProductsList"));
const Cart=lazy(()=>import("./pages/Cart"));
const ProductDetails=lazy(()=>import("./pages/ProductDetails"))
const NotFound=lazy(()=>import("./pages/NotFound"))

function App() {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
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
            <Suspense fallback={<h2>Loading...</h2>}>
            <Routes>
              <Route path="/" element={<ProductsList />} />
              <Route path="product-details/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            </Suspense>
          </BrowserRouter>
        </div>
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
