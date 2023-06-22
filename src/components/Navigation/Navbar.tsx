import { useState, useEffect } from 'react';
import LogoComponent from './Items/LogoComponent';
import BurgerMenu from './Items/BurgerMenu';
import NavItems from './Items/NavItems';

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    handleResize(); // Check initial screen size
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='sticky top-0 left-0 w-screen h-20 flex justify-around items-center z-50 backdrop-filter backdrop-blur-lg bg-opacity-75'>
      <LogoComponent isMobile={isMobile} />
      <NavItems isMobile={isMobile} isMobileMenuOpen={isMobileMenuOpen} />
      <BurgerMenu
        setMobileMenuOpen={() => setMobileMenuOpen(!isMobileMenuOpen)}
      />
    </div>
  );
}
