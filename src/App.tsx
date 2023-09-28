import { Global } from '@emotion/react';
import GlobalStyle from './GlobalStyle';
import Router from './router';

function App() {
  return (
    <>
      <Global styles={GlobalStyle} />
      <Router />
    </>
  );
}

export default App;
