import { useNavigate } from 'react-router-dom';

type IProps = {
  isMobile: boolean;
};

export default function LogoComponent({ isMobile }: IProps) {
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const logoText =
    isHomePage && !isMobile ? '</Shawn Gordon Becker>' : '</SGB >';

  const subText =
    isHomePage && !isMobile
      ? 'Web && digital product development'
      : `/${location.pathname}`;

  return (
    <div
      className='cursor-pointer flex items-center z-50'
      onClick={() => navigate('/')}
    >
      <div className='flex-column cursor-pointer'>
        <p className='text-xl text-accent-500 font-regular'>{logoText}</p>
        <p
          className={`text-md font-sans text-primary-900 font-medium ${
            isHomePage || isMobile ? 'capitalize' : ''
          }`}
        >
          {subText}
        </p>
      </div>
    </div>
  );
}
