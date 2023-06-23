import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
//import GlobeIcon from '../../../assets/svg/icons/GlobeIcon';

type NavLinkType = {
  to: string;
  button: string;
};

type IProps = {
  isMobile: boolean;
  isMobileMenuOpen: boolean;
};

export default function NavItems({ isMobile, isMobileMenuOpen }: IProps) {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  const navLinks: NavLinkType[] = [
    {
      to: '/services',
      button: 'navigation.navLink.service',
    },
    {
      to: '/cv',
      button: 'navigation.navLink.cv',
    },
    {
      to: '/about',
      button: 'navigation.navLink.about',
    },

    {
      to: '/contact',
      button: 'navigation.navLink.contact',
    },
  ];

  const Menustyles = {
    navLink: !isMobile
      ? 'hidden sm:flex'
      : isMobileMenuOpen
      ? 'absolute top-20 right-0 left-0 bg-background backdrop-filter backdrop-blur-lg bg-opacity-75'
      : 'hidden',

    select:
      'appearance-none p-2 border border-primary-700 bg-background hover:bg-primary-700 hover:bg-primary-700 hover:border border-primary-700 text-primary-700 hover:text-background text-l rounded-full',
  };

  return (
    <>
      {isMobile && !isMobileMenuOpen ? null : (
        <>
          <div className={Menustyles.navLink}>
            {navLinks.map((link: NavLinkType, index) => (
              <NavLink
                to={link.to}
                key={index}
                className={(navData) =>
                  isMobile
                    ? 'block px-4 py-2 text-xl text-center text-primary-600'
                    : navData.isActive
                    ? 'text-primary-900 m-4 text-xl w-40 leading-8 text-center'
                    : 'm-4 text-xl w-40 leading-8 text-center text-primary-600'
                }
              >
                {t(link.button)}
              </NavLink>
            ))}
          </div>

          <select
            className={Menustyles.select}
            onChange={changeLanguage}
            value={i18n.language}
          >
            <option value='en'>EN</option>
            <option value='de'>DE</option>
          </select>
        </>
      )}
    </>
  );
}
