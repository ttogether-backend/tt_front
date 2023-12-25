import React, {useEffect} from 'react';
import Footer from '../../shared/components/footer';
import Navbar from '../../shared/components/navbar';
import { NonNavbar } from '../../shared/components/navbar';
import { Cookies } from 'react-cookie';
import createAxios from 'src/Utils/axiosInstance';
import { onSilentRefresh, setItemWithExpire } from 'src/components/login/Utils/LoginUtils';

interface UserProfile {
	nickname : string,
	profileImagePath : string
}

function useLogin() {
  const [login, setLogin] = React.useState<boolean>(false);
  const [userProfile, setUserProfile] = React.useState<UserProfile>();
  const cookies = new Cookies();

  const setProfile = (async () => {
	const axiosInstance = createAxios();
	const nickname = cookies.get('nickname');
	if (!nickname) {
		axiosInstance.get('/api/v1/members/' + cookies.get('memberId') + '/profile')
		.then((res) => {
			console.log("profile : ", res);
			const profile = {
				nickname : res.data.result.data.nickname,
				profileImagePath : res.data.result.data.profileImagePath
			};
			setUserProfile(profile);
			const JWT_EXPRIY_TIME = new Date(new Date().getTime() + 1 * 60 * 60 * 1000);
			const config = {path: '/', expires: JWT_EXPRIY_TIME} 

			cookies.set('nickname', profile.nickname, config);
			cookies.set('profileImagePath', profile.profileImagePath, config);
		})
		.catch((err) => {
			console.log(err);
		})
	} else {
		const nickname = cookies.get('nickname');
		const profileImagePath = cookies.get('profileImagePath');
		const JWT_EXPRIY_TIME = new Date(new Date().getTime() + 1 * 60 * 60 * 1000);
		const config = {path: '/', expires: JWT_EXPRIY_TIME} 

		cookies.set('nickname', nickname, config);
		cookies.set('profileImagePath', profileImagePath, config);
		const profile = {
			nickname : nickname,
			profileImagePath : profileImagePath
		}
		setUserProfile(profile);
	}	
  })

  useEffect(() => {
	const fetchData = async () => {
		if (cookies.get('accessToken')) {
			setLogin(true);
			await onSilentRefresh();
			setProfile();
		}
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