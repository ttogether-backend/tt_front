import Footer from '../../shared/components/footer';
import Navbar from '../../shared/components/navbar';
import { NonNavbar } from '../../shared/components/navbar';

const Page = (props: any) => {
  const { children } = props;
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Page;

export const NonNavbarPage = (props: any) => {
  const { children } = props;
  return (
    <>
      <NonNavbar />
      {children}
      <Footer />
    </>
  );
}