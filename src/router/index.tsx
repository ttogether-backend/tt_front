import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AccompanyCreatePage from 'src/pages/accompany/AccompanyCreatePage';
import AccompanyModifyPage from 'src/pages/accompany/AccompanyModifyPage';
import AccompanyDetailPage from 'src/pages/accompany/AccompanyDetailPage';
import AccompanyListPage from 'src/pages/accompany/AccompanyListPage';
import MypageMain from 'src/pages/users';
import UserPersonal from 'src/pages/users/personal';
import VerificareUser from 'src/pages/auth/sns/authSns';
import AuthPassword from 'src/pages/auth/password/authPassword';
import Withdrawal from 'src/pages/users/withdrawal/withdrawal';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />} /> */}
        <Route path="/accompany/create" element={<AccompanyCreatePage />} />
        <Route path="/accompany/modify" element={<AccompanyModifyPage />} />
        <Route path="/accompany/:id" element={<AccompanyDetailPage />} />
        <Route path="/accompany/" element={<AccompanyListPage />} />
        <Route path="/users/:userid" element={<MypageMain />} />
        <Route path="/users/personal" element={<UserPersonal />} />
        <Route path="/auth/sns" element={<VerificareUser />} />
        <Route path="/auth/password" element={<AuthPassword />} />
        <Route path="/users/withdrawal" element={<Withdrawal />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
