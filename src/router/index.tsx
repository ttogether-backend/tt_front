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
import NotFound from 'src/shared/components/NotFound/NotFound.tsx';
import { Cookies } from 'react-cookie';
import PrivateRoute from './PrivateRoute.tsx';
import ChatListPage from 'src/components/chatlist/ChatListPage.tsx';
import ChatRoomPage from 'src/components/chatlist/ChatRoom.tsx';
import Feed from 'src/pages/Myfeed/pages/Feed.tsx';
import SendRequestList from 'src/pages/Myfeed/pages/SendRequestList.tsx';
import ReceiveRequestList from 'src/pages/Myfeed/pages/ReceiveRequestList.tsx';
import MyAccompanyList from 'src/pages/Myfeed/pages/MyAccompanyList.tsx';
import UserAccompanyList from 'src/pages/Myfeed/pages/UserAccompanyList.tsx';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />} /> */}
        <Route path="/" element={<Home />} />
        <Route
          path="/accompany/create"
          element={<PrivateRoute component={<AccompanyCreatePage />} />}
        />
        <Route
          path="/accompany/:id/modify"
          element={<PrivateRoute component={<AccompanyModifyPage />} />}
        />
        <Route path="/accompany/:id" element={<AccompanyDetailPage />} />
        <Route path="/accompany/" element={<AccompanyListPage />} />
        <Route
          path="/users/personal/verificareUser/password"
          element={<PrivateRoute component={<AuthPassword />} />}
        />
        <Route
          path="/users/personal/verificareUser"
          element={<PrivateRoute component={<Verificare />} />}
        />
        <Route path="/users/personal" element={<PrivateRoute component={<UserPersonal />} />} />
        <Route path="/users/:userid" element={<MypageMain />} />
        <Route path="/auth/sns" element={<VerificareUser />} />
        <Route path="/auth/password" element={<AuthPassword />} />
        <Route path="/users/withdrawal" element={<Withdrawal />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/test" element={<Test1 />} />

        <Route
          path="/feed/my/send-accompany-request"
          element={<PrivateRoute component={<SendRequestList />} />}
        />
        <Route
          path="/feed/my/receive-accompany-request"
          element={<PrivateRoute component={<ReceiveRequestList />} />}
        />
        <Route
          path="/feed/my/accompany"
          element={<PrivateRoute component={<MyAccompanyList />} />}
        />
        <Route
          path="/feed/my/accompany/:type"
          element={<PrivateRoute component={<MyAccompanyList />} />}
        />
        <Route path="/feed/my" element={<PrivateRoute component={<Feed />} />} />
        <Route path="/feed/:id" element={<PrivateRoute component={<Feed />} />} />
        <Route
          path="/feed/:id/accompany/:type"
          element={<PrivateRoute component={<UserAccompanyList />} />}
        />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/chat" element={<PrivateRoute component={<ChatListPage />} />} />
		<Route path="/chat/:memberId" element={<PrivateRoute component={<ChatListPage />} />} />

        {/* <Route path="/chat/:chatid" element={<PrivateRoute component={<ChatRoomPage />} authenticated={token} />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
