import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient({ defaultOptions: { queries: { staleTime: 5000 } } })

function Providers({ children }: React.PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  )
}

export default Providers
