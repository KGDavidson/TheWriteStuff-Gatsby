import React, { useEffect, useState } from 'react';
import { BiMenu, BiMenuAltRight } from 'react-icons/bi';

type Props = {

}

const Navbar = (props: Props) => {
  const {} = props;
  const [menuOpen, setMenuOpen ] = useState(false)
  const [scrolled, setScrolled ] = useState(false)

  const MenuIcon = menuOpen ? BiMenuAltRight : BiMenu;

  useEffect(() => {
    const unsubscribe = window.addEventListener('scroll', () => {
      if (window.scrollY >= 1) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    })

    return unsubscribe
  })

  return (
    <nav className={`fixed w-full sm:static text-medium drop-shadow-md sm:drop-shadow-none text-white sm:text-[#444153] h-auto sm:h-navbar px-6 z-10 py-8 sm:py-0 flex items-center sm:items-start justify-between sm:justify-start gap-16 sm:bg-transparent transition-all ${scrolled ? 'bg-black' : 'bg-transparent'}`}>
      <a href="/">
        <h1 className='font-bold text-3xl italic'>
          The
          <span className='px-[0.05rem]'/>
          Write
          <span className='px-[0.05rem]'/>
          Stuff.
        </h1>
      </a>
      <MenuIcon 
        className='block sm:hidden text-3xl'
        onClick={() => setMenuOpen((prev) => !prev)}
      />
      <div className={`absolute sm:static gap-0 sm:gap-8 mt-2 text-right leading-7 text-base font-medium transition-all flex flex-col sm:flex-row sm:h-auto right-7 top-full overflow-hidden ${menuOpen ? 'h-32' : 'h-0'}`}>
        <a className='drop-shadow-md sm:drop-shadow-none sm:hover:text-[#000000] sm:hover:drop-shadow-md transition-all' href='/'>Home</a>
        <a className='drop-shadow-md sm:drop-shadow-none sm:hover:text-[#000000] sm:hover:drop-shadow-md transition-all' href='/products'>Products</a>
        <a className='drop-shadow-md sm:drop-shadow-none sm:hover:text-[#000000] sm:hover:drop-shadow-md transition-all' href='/blog'>Blog</a>
        <a className='drop-shadow-md sm:drop-shadow-none sm:hover:text-[#000000] sm:hover:drop-shadow-md transition-all' href='/about-us'>About Us</a>
      </div>

      {/* <a href='/'>Log In</a>
      <a href='/'>Sign Up</a> */}
    </nav>
  );
};

export default Navbar;
