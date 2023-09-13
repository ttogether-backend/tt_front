import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../pages/layout';
import AccompanyCreatePage from 'src/pages/accompany/AccompanyCreatePage';
import AccompanyModifyPage from 'src/pages/accompany/AccompanyModifyPage';
import AccompanyDetailPage from 'src/pages/accompany/AccompanyDetailPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/accompany/create" element={<AccompanyCreatePage />} />
        <Route path="/accompany/modify" element={<AccompanyModifyPage />} />
        <Route path="/accompany/:id" element={<AccompanyDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
