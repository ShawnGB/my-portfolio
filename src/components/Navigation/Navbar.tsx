import { NavLink } from 'react-router-dom';

type navLink = {
  to: string;
  button: string;
};

export default function Navbar() {
  const navLinks: navLink[] = [
    {
      to: '/cv',
      button: 'CV',
    },
    {
      to: '/about',
      button: 'About',
    },
  ];

  return (
    <div className='sticky top-0 left-0 w-screen flex justify-start al'>
      <div className='flex-column w-screen text-white'>
        <div className='mx-8 my-4'>
          <h1 className='text-4xl  text-accent-500  font-regular'>
            {'Shawn Gordon Becker'}
          </h1>
          <h2 className='text-2xl font-sans text-primary-900 font-medium'>
            {'//Web & digital product development'}
          </h2>
        </div>
      </div>

      {navLinks &&
        navLinks.map((link: navLink, index) => (
          <NavLink
            to={link.to}
            key={index}
            className='m-4 text-xl h-16 w-40 leading-8 text-center text-accent-500'
          >
            {link.button}
          </NavLink>
        ))}
    </div>
  );
}
