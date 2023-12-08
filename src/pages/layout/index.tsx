import React, {useEffect} from 'react';
import Footer from '../../shared/components/footer';
import Navbar from '../../shared/components/navbar';
import { NonNavbar } from '../../shared/components/navbar';
import { Cookies } from 'react-cookie';
import axiosInstance from 'src/Utils/axiosInstance';
import { onAuthStatus } from 'src/components/login/Utils/LoginUtils';

// interface User {
// 	profile : 
// }

function useLogin() {
  const [login, setLogin] = React.useState<boolean>(false);
//   const [user, setUser] = React.useState
  const cookies = new Cookies();

  useEffect(() => {
	const fetchData = async () => {
		if (cookies.get('accessToken')) {
			const isLogin = await onAuthStatus();
			console.log("isLogin = ", isLogin);
			setLogin(isLogin);
			if (isLogin) {
				axiosInstance.get('/api/v1/members/' + cookies.get('memberId') + '/profile')
				.then((res) => {
					console.log(res);
				})
				.catch((err) => {
					console.log(err);
				})
			}
		}
		console.log(login);
	}
	fetchData();
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