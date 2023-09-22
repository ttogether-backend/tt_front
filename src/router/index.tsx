import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AccompanyCreatePage from 'src/pages/accompany/AccompanyCreatePage';
import AccompanyModifyPage from 'src/pages/accompany/AccompanyModifyPage';
import AccompanyDetailPage from 'src/pages/accompany/AccompanyDetailPage';
import AccompanyListPage from 'src/pages/accompany/AccompanyListPage';
import { Test1 } from 'src/pages/layout/Test1';
import { PrivacyPolicy } from '../pages/policy/PrivacyPolicy.tsx';

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
        <Route path="/test" element={<Test1 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
