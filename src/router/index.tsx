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


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />} /> */}
        <Route path="/accompany/create" element={<AccompanyCreatePage />} />
        <Route path="/accompany/modify" element={<AccompanyModifyPage />} />
        <Route path="/accompany/:id" element={<AccompanyDetailPage />} />
        <Route path="/accompany/" element={<AccompanyListPage />} />
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
