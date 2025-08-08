import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import { Provider } from 'react-redux'
import App from './App.tsx'
import { store } from './app/store.ts'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)
