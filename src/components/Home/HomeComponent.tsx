import { useTranslation } from 'react-i18next';
import desktop from '../../assets/images/desptop.jpeg';

export default function HomeComponent() {
  const { t } = useTranslation();

  return (
    <div
      className='flex flex-col items-center justify-center h-5/6 w-full absolute overflow-hidden text-fill'
      style={{ backgroundImage: desktop }}
    >
      <h1 className='whitespace-pre font-bold text-4xl sm:text-6xl md:text-8xl text-center text-right text-transparent bg-clip-text'>
        {t('home.hero')}
      </h1>
    </div>
  );
}
