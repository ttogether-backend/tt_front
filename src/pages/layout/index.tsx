import React, {useEffect} from 'react';
import Footer from '../../shared/components/footer';
import Navbar from '../../shared/components/navbar';
import { NonNavbar } from '../../shared/components/navbar';
import { Cookies } from 'react-cookie';
import createAxios from 'src/Utils/axiosInstance';
import { onAuthStatus } from 'src/components/login/Utils/LoginUtils';

interface UserProfile {
	nickname : string,
	profileImagePath : string
}

function useLogin() {
  const [login, setLogin] = React.useState<boolean>(false);
  const [userProfile, setUserProfile] = React.useState<UserProfile>();
  const cookies = new Cookies();

  const setProfile = (() => {
	const axiosInstance = createAxios();
	if (!localStorage.getItem('nickname')) {
		axiosInstance.get('/api/v1/members/' + cookies.get('memberId') + '/profile')
		.then((res) => {
			console.log("profile : ", res);
			const profile = {
				nickname : res.data.result.data.nickname,
				profileImagePath : res.data.result.data.profileImagePath
			};
			setUserProfile(profile);
			localStorage.setItem('nickname', profile.nickname);
			localStorage.setItem('profileImagePath', profile.profileImagePath);
			console.log(profile);
		})
		.catch((err) => {
			console.log(err);
		})
	} else {
		const profile = {
			nickname : localStorage.getItem('nickname'),
			profileImagePath : localStorage.getItem('profileImagePath')
		}
		setUserProfile(profile);
	}	
  })

  useEffect(() => {
	const fetchData = async () => {
		if (cookies.get('accessToken')) {
			const isLogin = await onAuthStatus();
			console.log("isLogin = ", isLogin);
			setLogin(isLogin);
			if (isLogin) {
				setProfile();
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