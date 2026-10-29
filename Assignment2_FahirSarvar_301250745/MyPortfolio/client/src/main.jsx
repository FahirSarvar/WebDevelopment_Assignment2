import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// This finds the <div id="root"> from index.html and renders our App inside it.
// BrowserRouter wraps everything so we can use page routing (react-router-dom).
ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
)