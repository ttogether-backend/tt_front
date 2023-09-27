import React from 'react';
import Footer from '../../shared/components/footer';
import Navbar from '../../shared/components/navbar';
import { NonNavbar } from '../../shared/components/navbar';

const Page:React.FC<{activeNav ?: string; children: any;}> = ({children, activeNav}) => {

  return (
    <>
      <Navbar activeNav={activeNav}/>
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