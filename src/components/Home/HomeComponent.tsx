import { useTranslation } from 'react-i18next';
import DecorativeBackground from '../../assets/svg/icons/DecorativeBackground';

export default function HomeComponent() {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col items-center justify-center h-screen relative overflow-hidden'>
      <div className='absolute top-1/4 left-1/2 opacity-80'>
        <DecorativeBackground />
      </div>
      <div className='relative mx-auto max-w-2xl max-w-screen-sm'>
        <h1 className='text-primary-900 font-bold text-4xl sm:text-5xl md:text-6xl text-center text-right'>
          Elevating <br /> Digital Experiences
          <br />
          with <br /> Sustainable Solutions
        </h1>
      </div>
    </div>
  );
}
