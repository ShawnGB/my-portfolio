import { NavLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

type navLink = {
  to: string;
  button: string;
};

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const navLinks: navLink[] = [
    {
      to: '/cv',
      button: 'navLink.cv',
    },
    {
      to: '/about',
      button: 'navLink.about',
    },
  ];

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div className='sticky top-0 left-0 w-screen flex justify-between items-center '>
      <div
        className='cursor-pointer ml-8 my-4 flex items-center '
        onClick={() => navigate('/')}
      >
        <h1 className='text-6xl text-bold text-accent-500 opacity-50'>
          {'</'}
        </h1>
        <div className='flex-column cursor-pointer ml-2'>
          <h1 className='text-3xl  text-accent-500  font-regular'>
            {'Shawn Gordon Becker'}
          </h1>
          <h2 className='text-l font-sans text-primary-900 font-medium'>
            {'Web && digital product development'}
          </h2>
        </div>
        <h1 className='text-6xl text-bold text-accent-500 opacity-50'>{'>'}</h1>
      </div>

      {navLinks &&
        navLinks.map((link: navLink, index) => (
          <NavLink
            to={link.to}
            key={index}
            className='m-4 text-xl w-40 leading-8 text-center text-accent-500'
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
