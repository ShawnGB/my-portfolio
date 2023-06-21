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

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div className='sticky top-0 left-0 w-screen flex justify-between items-center z-50 backdrop-filter backdrop-blur-lg bg-opacity-75'>
      <div
        className='cursor-pointer ml-8 my-4 flex items-center'
        onClick={() => navigate('/')}
      >
        <p className='text-6xl text-bold text-accent-500 opacity-50 '>{'</'}</p>
        <div className='flex-column cursor-pointer ml-2'>
          <p className='text-3xl  text-accent-500  font-regular'>
            {location.pathname === '/' ? 'Shawn Gordon Becker' : 'SGB'}
          </p>

          <h2 className='text-l font-sans text-primary-900 font-medium '>
            {location.pathname === '/'
              ? 'Web && digital product development'
              : location.pathname}
          </h2>
        </div>
        <p className='text-6xl text-bold text-accent-500 opacity-50 mx-4'>
          {'>'}
        </p>
      </div>

      {navLinks &&
        navLinks.map((link: navLink, index) => (
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

      <select
        className='appearance-none px-8 py-2 border border-accent-500 bg-background text-accent-500 text-xl mr-8'
        onChange={changeLanguage}
      >
        <option value='en'>EN</option>
        <option value='de'>DE</option>
      </select>
    </div>
  );
}
