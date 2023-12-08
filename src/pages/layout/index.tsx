import React, {useEffect} from 'react';
import Footer from '../../shared/components/footer';
import Navbar from '../../shared/components/navbar';
import { NonNavbar } from '../../shared/components/navbar';
import { Cookies } from 'react-cookie';

function useLogin() {
  const [login, setLogin] = React.useState<boolean>(false);
  const cookies = new Cookies();

  useEffect(() => {
    if (cookies.get('accessToken')) {
      setLogin(true);
    }
    console.log(login);
  },[]);

  return login;
}

const Page:React.FC<{activeNav ?: string; children: any; }> = ({children, activeNav}) => {
  const login = useLogin();

  return (
    <>
      <Navbar activeNav={activeNav} login={login}/>
      {children}
      <Footer />
    </>
  );
};

export default Page;

export const NonNavbarPage:React.FC<{ children: any}> = ({children}) => {
  const login = useLogin();

  return (
    <>
      <NonNavbar login={login}/>
      {children}
      <Footer />
    </>
  );
}