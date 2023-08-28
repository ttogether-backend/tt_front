import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import App from './App.tsx';
import './global.scss';
import './styles.scss';

const queryClient = new QueryClient();

//개발 모드일때만 사용하겠다
if (process.env.NODE_ENV === 'development') {
  // const { worker } = require('./mocks/browser')
  // worker.start()
}


ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </QueryClientProvider>
);
