import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/styles.css'
import App from './App.jsx'
import { UserProvider } from "/src/functions/UserContext.jsx";

createRoot(document.getElementById('root')).render(
    <UserProvider>
        <StrictMode>
            <App />
        </StrictMode>
    </UserProvider>
)
