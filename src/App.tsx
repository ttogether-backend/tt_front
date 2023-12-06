import { Global } from '@emotion/react';
import GlobalStyle from './GlobalStyle';
import Router from './router';
import { useEffect } from 'react';
import { onSilentRefresh } from './components/login/Utils/LoginUtils';

function App() {

  useEffect(() => {
	console.log('get access Token');
	onSilentRefresh();
  })

  return (
    <>
      <Global styles={GlobalStyle} />
      <Router />
    </>
  );
}

export default App;
