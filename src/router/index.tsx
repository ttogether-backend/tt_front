import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AccompanyCreatePage from 'src/pages/accompany/AccompanyCreatePage';
import AccompanyModifyPage from 'src/pages/accompany/AccompanyModifyPage';
import AccompanyDetailPage from 'src/pages/accompany/AccompanyDetailPage';
import AccompanyListPage from 'src/pages/accompany/AccompanyListPage';
import { Test1 } from 'src/pages/layout/Test1';
import { PrivacyPolicy } from '../pages/policy/PrivacyPolicy.tsx';
import { TermsOfService } from '../pages/policy/TermsOfService.tsx';
import MyfeedPage from 'src/pages/Myfeed';
import UserRecord from 'src/pages/Myfeed/UserRecord';

import MypageMain from 'src/pages/users';
import UserPersonal from 'src/pages/users/personal';
import VerificareUser from 'src/pages/auth/sns/authSns';
import AuthPassword from 'src/pages/auth/password/authPassword';
import Withdrawal from 'src/pages/users/withdrawal/withdrawal';
import Home from 'src/pages/home/home.tsx';

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
        {/* 본인이 들어갈 때 */}
        <Route path="/myfeed" element={<MyfeedPage />} /> 
        {/* 남의거 볼 때 */}
        <Route path="/myfeed/:id" element={<MyfeedPage />} />
        {/* 계정기록 */}
        <Route path="/myfeed/user/record" element={<UserRecord />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
