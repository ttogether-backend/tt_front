import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../pages/layout';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
