import { useTranslation } from 'react-i18next';

export default function HomeComponent() {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col items-center justify-center h-5/6 w-full absolute overflow-hidden'>
      <div>
        <h1 className='tracking-tight leading-tight border border-primary-50 text-primary-700 shadow-lg'>
          <div className='font-bold text-4xl sm:text-6xl md:text-8xl text-right whitespace-pre p-8'>
            {t('home.hero')}
          </div>
        </h1>

        <h2 className='tracking-tight leading-tight mt-4 ml-8 text-accent-500 font-sans font-light text-xl sm:text-2xl md:text-3xl'>
          web &amp; product development
        </h2>
      </div>
    </div>
  );
}
