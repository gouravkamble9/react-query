import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Product from './Product'
import Home from './Home'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Products from './Paginated'
import Parallel from './Parallel'
import Optimistic from './Optimistic'
import Dependant from './Dependant'

  export const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 10000
      }
    }
  })


const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products/:id' element={<Product />} />
          <Route path='/products' element={<Products />} />
          <Route path='/parallel' element={<Parallel/>}/>
          <Route path='/optimistic' element={<Optimistic/>}/>
          <Route path='/dependent' element={<Dependant/>}/>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App