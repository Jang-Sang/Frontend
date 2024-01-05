import Example from '@components/example'
import Test from '@components/test'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RecoilRoot } from 'recoil'
import Todo from './components/todo';

function App() {
  // recoil -> <RecoilRoot/>
  const queryClient = new QueryClient({
    defaultOptions: {
      // queries: {
      //   staleTime: 0,
      //   cacheTime: 1000 * 60 * 5
      // }
    }
  }); // config

  return (
    <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <Example/>
      <hr/>
      <Test/>
      <hr/>
      <Todo/>
    </RecoilRoot>
    </QueryClientProvider>
  )
}

export default App
