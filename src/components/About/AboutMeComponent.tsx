import { useTranslation } from 'react-i18next';

export default function AboutMeComponent() {
  const { t } = useTranslation();

  return (
    <div className='mt-8 text-lg text-primary-500 leading-relaxed w-11/12 md:w-2/3 mx-auto text-justify whitespace-pre-line shadow-lg p-8'>
      {t('about.aboutMe')}
    </div>
  );
}
