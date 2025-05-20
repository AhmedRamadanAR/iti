import { StrictMode } from 'react'
import { Provider } from 'react-redux';

import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import store from './store/index.js';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App/>
    </Provider>
  </StrictMode>,
)
