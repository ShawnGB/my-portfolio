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
  switchTheme: () => void;
  theme: boolean;
};

export default function NavItems({
  isMobile,
  isMobileMenuOpen,
  switchTheme,
  theme,
}: IProps) {
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
    {
      to: '/login',
      button: 'login',
    },
  ];

  const Menustyles = {
    navLink: !isMobile
      ? 'hidden sm:flex'
      : isMobileMenuOpen
      ? 'absolute top-20 right-0 left-0 bg-background dark:bg-darkMode-background backdrop-filter backdrop-blur-lg bg-opacity-75'
      : 'hidden',

    select: `appearance-none p-2 border border-primary-700 bg-background hover:bg-primary-700 hover:bg-primary-700 hover:border border-primary-700 text-primary-700 hover:text-background text-l rounded-full ${
      theme ? 'dark:bg-darkMode-background' : ''
    } ${theme ? 'dark:text-darkMode-primary-700' : ''}`,
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
                    ? 'block px-4 py-2 text-xl text-center text-primary-600 dark:text-darkMode-primary-600 font-light'
                    : navData.isActive
                    ? 'text-primary-600 dark:text-darkMode-primary-600 m-4 text-xl w-40 leading-8 text-center '
                    : 'm-4 text-xl w-40 leading-8 text-center text-primary-600 dark:text-darkMode-primary-600 font-light'
                }
              >
                {t(link.button)}
              </NavLink>
            ))}
          </div>
          <div className='flex gap-4'>
            <select
              className={Menustyles.select}
              onChange={changeLanguage}
              value={i18n.language}
            >
              <option value='en'>EN</option>
              <option value='de'>DE</option>
            </select>

            <button
              onClick={switchTheme}
              className='appearance-none p-3 border border-primary-700 bg-background dark:bg-darkMode-background hover:bg-primary-700  hover:border-primary-700 dark:hover:border-darkMode-primary-700 rounded-full group'
            >
              {theme ? (
                <svg
                  width='16px'
                  height='16px'
                  viewBox='0 0 16 16'
                  version='1.1'
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                >
                  <g
                    id='Page-1'
                    stroke='none'
                    strokeWidth='1'
                    fill='none'
                    fillRule='evenodd'
                  >
                    <path
                      d='M8.42105263,13.5774316 L8.42105263,15.5789474 C8.42105263,15.8115368 8.23258947,16 8,16 C7.76741053,16 7.57894737,15.8115368 7.57894737,15.5789474 L7.57894737,13.5774316 C7.57894737,13.3448421 7.76741053,13.1563789 8,13.1563789 C8.23258947,13.1563789 8.42105263,13.3448421 8.42105263,13.5774316 Z M8,2.84362105 C8.23258947,2.84362105 8.42105263,2.65515789 8.42105263,2.42256842 L8.42105263,0.421052632 C8.42105263,0.188463158 8.23258947,0 8,0 C7.76741053,0 7.57894737,0.188463158 7.57894737,0.421052632 L7.57894737,2.42256842 C7.57894737,2.65515789 7.76741053,2.84362105 8,2.84362105 Z M2.95949474,10.4230737 L1.22610526,11.424 C1.02467368,11.5402105 0.955789474,11.7977263 1.072,11.9991579 C1.14997895,12.1342316 1.29145263,12.2096842 1.43696842,12.2096842 C1.50837895,12.2096842 1.5808,12.1914947 1.64715789,12.1532632 L3.38054737,11.1525053 C3.58197895,11.0362947 3.65086316,10.7787789 3.53465263,10.5773474 C3.41844211,10.3759158 3.16075789,10.3066947 2.95949474,10.4230737 Z M12.8304842,5.63334737 C12.9018947,5.63334737 12.9743158,5.61515789 13.0406737,5.57692632 L14.7738947,4.576 C14.9753263,4.45978947 15.0442105,4.20227368 14.928,4.00084211 C14.8117895,3.79941053 14.5541053,3.73035789 14.3528421,3.84673684 L12.6194526,4.84749474 C12.4180211,4.96370526 12.3491368,5.22122105 12.4653474,5.42265263 C12.5433263,5.55789474 12.6848,5.63334737 12.8304842,5.63334737 Z M5.42282105,12.4653474 C5.22122105,12.3488 4.96370526,12.4180211 4.84766316,12.6194526 L3.84673684,14.3528421 C3.73052632,14.5542737 3.79941053,14.8117895 4.00084211,14.928 C4.0672,14.9664 4.13962105,14.9844211 4.21103158,14.9844211 C4.35654737,14.9844211 4.49818947,14.9089684 4.576,14.7738947 L5.57675789,13.0405053 C5.69313684,12.8390737 5.62425263,12.5817263 5.42282105,12.4653474 Z M10.5771789,3.53465263 C10.6435368,3.57305263 10.7159579,3.59107368 10.7873684,3.59107368 C10.9328842,3.59107368 11.0745263,3.51562105 11.1523368,3.38054737 L12.1532632,1.64715789 C12.2694737,1.44572632 12.2005895,1.18821053 11.9991579,1.072 C11.7975579,0.955452632 11.5400421,1.02467368 11.424,1.22610526 L10.4232421,2.95949474 C10.3068632,3.16092632 10.3757474,3.41827368 10.5771789,3.53465263 Z M14.7738947,11.424 L13.0405053,10.4232421 C12.8389053,10.3065263 12.5815579,10.3759158 12.4653474,10.5773474 C12.3491368,10.7787789 12.4180211,11.0362947 12.6194526,11.1525053 L14.3528421,12.1532632 C14.4192,12.1916632 14.4916211,12.2096842 14.5630316,12.2096842 C14.7085474,12.2096842 14.8501895,12.1342316 14.928,11.9991579 C15.0443789,11.7977263 14.9753263,11.5402105 14.7738947,11.424 Z M1.22610526,4.576 L2.95949474,5.57675789 C3.02585263,5.61515789 3.09827368,5.63317895 3.16968421,5.63317895 C3.3152,5.63317895 3.45684211,5.55772632 3.53465263,5.42265263 C3.65086316,5.22122105 3.58197895,4.96370526 3.38054737,4.84749474 L1.64715789,3.84673684 C1.44555789,3.73018947 1.18821053,3.79941053 1.072,4.00084211 C0.955621053,4.20227368 1.02467368,4.45978947 1.22610526,4.576 Z M11.1523368,12.6194526 C11.0361263,12.4180211 10.7784421,12.3491368 10.5771789,12.4653474 C10.3757474,12.5815579 10.3068632,12.8390737 10.4230737,13.0405053 L11.424,14.7738947 C11.5019789,14.9089684 11.6434526,14.9844211 11.7889684,14.9844211 C11.8603789,14.9844211 11.9328,14.9662316 11.9991579,14.928 C12.2005895,14.8117895 12.2694737,14.5542737 12.1532632,14.3528421 L11.1523368,12.6194526 Z M4.84766316,3.38054737 C4.92564211,3.51562105 5.06711579,3.59107368 5.21263158,3.59107368 C5.28404211,3.59107368 5.35646316,3.57288421 5.42282105,3.53465263 C5.62425263,3.41844211 5.69313684,3.16092632 5.57692632,2.95949474 L4.576,1.22610526 C4.45978947,1.02467368 4.20227368,0.955789474 4.00084211,1.072 C3.79941053,1.18821053 3.73052632,1.44572632 3.84673684,1.64715789 L4.84766316,3.38054737 Z M15.5789474,7.57894737 L13.5774316,7.57894737 C13.3448421,7.57894737 13.1563789,7.76741053 13.1563789,8 C13.1563789,8.23258947 13.3448421,8.42105263 13.5774316,8.42105263 L15.5789474,8.42105263 C15.8115368,8.42105263 16,8.23258947 16,8 C16,7.76741053 15.8115368,7.57894737 15.5789474,7.57894737 Z M2.84362105,8 C2.84362105,7.76741053 2.65515789,7.57894737 2.42256842,7.57894737 L0.421052632,7.57894737 C0.188463158,7.57894737 0,7.76741053 0,8 C0,8.23258947 0.188463158,8.42105263 0.421052632,8.42105263 L2.42256842,8.42105263 C2.65515789,8.42105263 2.84362105,8.23258947 2.84362105,8 Z M8,3.53229474 C5.53650526,3.53229474 3.53229474,5.53650526 3.53229474,8 C3.53229474,10.4634947 5.53650526,12.4677053 8,12.4677053 C10.4634947,12.4677053 12.4677053,10.4634947 12.4677053,8 C12.4677053,5.53650526 10.4634947,3.53229474 8,3.53229474 Z'
                      id='Shape'
                      className='fill-darkMode-primary-600 group-hover:fill-darkMode-primary-700'
                      fillRule='nonzero'
                    ></path>
                  </g>
                </svg>
              ) : (
                <svg
                  width='13.14px'
                  height='16px'
                  viewBox='0 0 13.14 16'
                  version='1.1'
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                >
                  <g
                    id='Page-1'
                    stroke='none'
                    strokeWidth='1'
                    fill='none'
                    fillRule='evenodd'
                  >
                    <path
                      d='M5.34,6.14 C5.34,3.68 6.46,1.48 8.2,0 C8.14,0 8.08,0 8,0 C3.58,0 0,3.58 0,8 C0,12.42 3.58,16 8,16 C9.96,16 11.74,15.3 13.14,14.14 C8.82,14.02 5.34,10.48 5.34,6.14 Z'
                      id='Path'
                      fill='#4D5A62'
                      fillRule='nonzero'
                      className='group-hover:fill-background'
                    ></path>
                  </g>
                </svg>
              )}
            </button>
          </div>
        </>
      )}
    </>
  );
}
