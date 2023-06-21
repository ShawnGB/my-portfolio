import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

type navLink = {
  to: string;
  button: string;
};

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks: navLink[] = [
    {
      to: '/cv',
      button: 'navigation.navLink.cv',
    },
    {
      to: '/about',
      button: 'navigation.navLink.about',
    },
    {
      to: '/services',
      button: 'navigation.navLink.service',
    },
    {
      to: '/services',
      button: 'navigation.navLink.contact',
    },
  ];

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    handleResize(); // Check initial screen size
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setIsMobile]);

  return (
    <div className='sticky top-0 left-0 w-screen flex justify-between items-center z-50 backdrop-filter backdrop-blur-lg bg-opacity-75'>
      {/* Logo */}
      <div
        className='cursor-pointer ml-8 my-4 flex items-center z-50'
        onClick={() => navigate('/')}
      >
        <h1 className='text-6xl text-bold text-accent-500 opacity-50 '>
          {'</'}
        </h1>
        <div className='flex-column cursor-pointer ml-2'>
          <h1 className='text-3xl text-accent-500 font-regular'>
            {location.pathname !== '/' || isMobile
              ? 'SGB'
              : 'Shawn Gordon Becker'}
          </h1>

          <h2 className='text-l font-sans text-primary-900 font-medium '>
            {location.pathname !== '/' || isMobile
              ? location.pathname
              : 'Web && digital product development'}
          </h2>
        </div>
        <h1 className='text-6xl text-bold text-accent-500 opacity-50 m'>
          {'>'}
        </h1>
      </div>

      {/* Mobile Menu Icon */}
      <div className='mr-8 block sm:hidden'>
        <button
          className='text-3xl text-accent-500 focus:outline-none'
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className='w-6 h-6 fill-current'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
          >
            <path fillRule='evenodd' d='M3 5h18v2H3zm0 6h18v2H3zm0 6h18v2H3z' />
          </svg>
        </button>
      </div>

      {/* Desktop Menu */}
      {!isMobile && (
        <div className='hidden sm:flex'>
          {navLinks.map((link: navLink, index) => (
            <NavLink
              to={link.to}
              key={index}
              className={(navData) =>
                navData.isActive
                  ? 'text-accent-900 m-4 text-xl w-40 leading-8 text-center'
                  : 'm-4 text-xl w-40 leading-8 text-center text-accent-500'
              }
            >
              {t(link.button)}
            </NavLink>
          ))}
        </div>
      )}

      {/* Select (Language Dropdown) */}
      {!isMobile && (
        <select
          className='appearance-none px-8 py-2 border border-accent-500 bg-background text-accent-500 text-xl mr-8'
          onChange={changeLanguage}
        >
          <option value='en'>EN</option>
          <option value='de'>DE</option>
        </select>
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='absolute top-20 right-0 left-0 bg-background backdrop-filter backdrop-blur-lg bg-opacity-75'>
          {navLinks.map((link: navLink, index) => (
            <NavLink
              to={link.to}
              key={index}
              className='block px-4 py-2 text-xl text-center text-accent-500'
            >
              {t(link.button)}
            </NavLink>
          ))}
          {!isMobile && (
            <select
              className='block px-8 py-2 mt-4 mb-8 mx-auto border border-accent-500 bg-background text-accent-500 text-xl'
              onChange={changeLanguage}
            >
              <option value='en'>EN</option>
              <option value='de'>DE</option>
            </select>
          )}
        </div>
      )}
    </div>
  );
}
