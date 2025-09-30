import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {QueryClient, QueryClientProvider, QueryErrorResetBoundary} from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <QueryClientProvider client={queryClient}>
          <QueryErrorResetBoundary>
              <App />
          </QueryErrorResetBoundary>
      </QueryClientProvider>
  </StrictMode>,
)
