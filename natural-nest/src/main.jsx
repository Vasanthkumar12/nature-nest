import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { productStore } from './redux/store.js'

createRoot(document.getElementById('root')).render(
        <Provider store={productStore} >
            <BrowserRouter>
                    <App />
            </BrowserRouter>
        </Provider>
)
