import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AccompanyCreatePage from 'src/pages/accompany/AccompanyCreatePage';
import AccompanyModifyPage from 'src/pages/accompany/AccompanyModifyPage';
import AccompanyDetailPage from 'src/pages/accompany/AccompanyDetailPage';
import AccompanyListPage from 'src/pages/accompany/AccompanyListPage';
import { Test1 } from 'src/pages/layout/Test1';
import { PrivacyPolicy } from '../pages/policy/PrivacyPolicy.tsx';
import { TermsOfService } from '../pages/policy/TermsOfService.tsx';

import MypageMain from 'src/pages/users';
import UserPersonal from 'src/pages/users/personal';
import Verificare from 'src/pages/users/verificareUser/verificareUser.tsx';
import VerificareUser from 'src/pages/auth/sns/authSns';
import AuthPassword from 'src/pages/auth/password/authPassword';
import Withdrawal from 'src/pages/users/withdrawal/withdrawal';
import Home from 'src/pages/home/home.tsx';
import SignUpPage from 'src/components/login/SignUpPage.tsx';
import LoginPage from 'src/components/login/LoginPage.tsx';
import Logout from 'src/components/login/Logout.tsx';
import Myfeed from 'src/pages/myfeed/index.tsx';
import NotFound from 'src/shared/components/NotFound/NotFound.tsx';
import { Cookies } from 'react-cookie';
import PrivateRoute from './PrivateRoute.tsx';
import ChatListPage from 'src/components/chatlist/ChatListPage.tsx';
import ChatRoomPage from 'src/components/chatlist/ChatRoomPage.tsx';

const Router = () => {
	const cookies = new Cookies();
	const token = cookies.get('accessToken');
	return (
		<BrowserRouter>
			<Routes>
				{/* <Route path="/" element={<Layout />} /> */}
				<Route path="/" element={<Home />} />
				<Route path="/accompany/create" element={<PrivateRoute component={<AccompanyCreatePage />} authenticated={token} />} />
				<Route path="/accompany/modify" element={<PrivateRoute component={<AccompanyModifyPage />}  authenticated={token} />} />
				<Route path="/accompany/:id" element={<AccompanyDetailPage />} />
				<Route path="/accompany/" element={<AccompanyListPage />} />
				{/* <Route path="/users/personal/verificareUser/password" element={<AuthPassword />} /> */}
				{/* <Route path="/users/personal/verificareUser" element={<Verificare />} /> */}
				<Route path="/users/personal" element={<UserPersonal />} />
				<Route path="/users/:userid" element={<MypageMain />} />
				<Route path="/auth/sns" element={<VerificareUser />} />
				<Route path="/auth/password" element={<AuthPassword />} />
				<Route path="/users/withdrawal" element={<Withdrawal />} />
				<Route path="/privacy-policy" element={<PrivacyPolicy />} />
				<Route path="/terms-of-service" element={<TermsOfService />} />
				<Route path="/test" element={<Test1 />} />
				<Route path="/myfeed" element={<Myfeed />} />
				<Route path="/myfeed/:id" element={<Myfeed />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/signup" element={<SignUpPage />} />
				<Route path="/logout" element={<Logout />} />
				<Route path="/chat" element={<PrivateRoute component={<ChatListPage />} authenticated={token} />} />
				<Route path="/chat/:chatid" element={<PrivateRoute component={<ChatRoomPage />} authenticated={token} />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
