import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import App from './App.tsx';
import { CookiesProvider } from 'react-cookie';
import axios from 'axios';

const queryClient = new QueryClient();

axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true

ReactDOM.createRoot(document.getElementById('root')!).render(
<CookiesProvider defaultSetOptions={{path: '/'}}>
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
    <RecoilRoot>
		<App />
    </RecoilRoot>
  </QueryClientProvider>
</CookiesProvider>
);
