import { useTranslation } from 'react-i18next';

export default function AboutMeComponent() {
  const { t } = useTranslation();

  return (
    <div className='mt-8 text-xl text-primary-700 whitespace-pre w-11/12 md:w-2/3 m-auto whitespace-pre-line text-justify '>
      {t('about.aboutMe')}
    </div>
  );
}
