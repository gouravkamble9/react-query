import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'

const App = () => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}> 
      <div>App</div>
    </QueryClientProvider>
  )
}

export default App