import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Product from './Product'
import Home from './Home'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Products from './Paginated'
import Parallel from './Parallel'


const App = () => {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 10000
      }
    }
  })
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products/:id' element={<Product />} />
          <Route path='/products' element={<Products />} />
          <Route path='/parallel' element={<Parallel/>}/>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App