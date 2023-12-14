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
	const nickname = await window.localStorage.getItem('nickname');
	console.log('localstorage: ', nickname);
	if (!localStorage.getItem('nickname')) {
		axiosInstance.get('/api/v1/members/' + cookies.get('memberId') + '/profile')
		.then((res) => {
			console.log("profile : ", res);
			const profile = {
				nickname : res.data.result.data.nickname,
				profileImagePath : res.data.result.data.profileImagePath
			};
			setUserProfile(profile);
			setItemWithExpire('nickname', profile.nickname, 3600000);
			setItemWithExpire('profileImagePath', profile.profileImagePath, 3600000);
		})
		.catch((err) => {
			console.log(err);
		})
	} else {
		const nickname = JSON.parse(localStorage.getItem('nickname')).value
		const profileImagePath = JSON.parse(localStorage.getItem('profileImagePath')).value
		setItemWithExpire('nickname', nickname.value, 3600000);
		setItemWithExpire('profileImagePath', profileImagePath.value, 3600000);
		const profile = {
			nickname : JSON.parse(localStorage.getItem('nickname')).value,
			profileImagePath : JSON.parse(localStorage.getItem('profileImagePath')).value
		}
		setUserProfile(profile);
	}	
  })

  const removeExpiredData = (() => {
	const nickname = JSON.parse(localStorage.getItem('nickname'));
	// console.log("nickname = ", nickname);
	if (nickname && Date.now() < nickname.expire) {
		localStorage.removeItem('nickname');
		localStorage.removeItem('profileImagePath');
	}
  })

  useEffect(() => {
	const fetchData = async () => {
		removeExpiredData();
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