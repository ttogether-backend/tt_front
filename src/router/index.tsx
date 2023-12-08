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
import VerificareUser from 'src/pages/auth/sns/authSns';
import AuthPassword from 'src/pages/auth/password/authPassword';
import Withdrawal from 'src/pages/users/withdrawal/withdrawal';
import Home from 'src/pages/home/home.tsx';
import SignUpPage from 'src/components/login/SignUpPage.tsx';
import LoginForm from 'src/components/login/Form/LoginForm.tsx';
import LoginPage from 'src/components/login/LoginPage.tsx';
import Logout from 'src/components/login/Logout.tsx';
import Myfeed from 'src/pages/myfeed/index.tsx';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/accompany/create" element={<AccompanyCreatePage />} />
        <Route path="/accompany/modify" element={<AccompanyModifyPage />} />
        <Route path="/accompany/:id" element={<AccompanyDetailPage />} />
        <Route path="/accompany/" element={<AccompanyListPage />} />
        <Route path="/users/:userid" element={<MypageMain />} />
        <Route path="/users/personal" element={<UserPersonal />} />
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
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
