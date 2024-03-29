import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from './App'
import './styles.css'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('app')).render(
    <QueryClientProvider client={queryClient}>
        <Router>
            <App />
        </Router>
    </QueryClientProvider>
)
