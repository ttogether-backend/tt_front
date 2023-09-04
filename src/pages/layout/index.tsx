import Footer from '../../shared/components/footer';
import Navbar from '../../shared/components/navbar';
import { Body } from './Body.tsx';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Body />
      <Footer />
    </>
  );
};

export default Layout;
