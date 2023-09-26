import Footer from '../../shared/components/footer';
import Navbar from '../../shared/components/navbar';

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
