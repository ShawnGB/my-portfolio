import { useTranslation } from 'react-i18next';
import desktop from '../../assets/images/desptop.jpeg';

export default function HomeComponent() {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col items-center justify-center h-5/6 w-full absolute overflow-hidden'>
      <h1
        className='whitespace-pre font-bold text-4xl sm:text-6xl md:text-8xl text-center text-right text-transparent bg-clip-text text-fill bg-cover'
        style={{ backgroundImage: `url(${desktop})` }}
      >
        {t('home.hero')}
      </h1>

      <h2
        className='text-accent-500  font-sans font-light text-2xl md:text-3xl lg:text-4xl'
        style={{ marginRight: '25%', textAlign: 'center' }}
      >
        web &amp; product development
      </h2>
    </div>
  );
}
