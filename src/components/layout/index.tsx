import React from 'react';
import Footer from './footer';
import Navbar from './navbar';

type Props = {
  children?: React.ReactNode;
  className?: string;
}

const Layout = (props: Props) => {
  const { 
    children,
    className,
  } = props;

  return (
    <div className='p-0 sm:p-6 bg-[#fffdf9]'>
      <Navbar />
      <main className={`${className || ''}`}>
        { children }
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
