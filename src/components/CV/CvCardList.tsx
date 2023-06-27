import { useTranslation } from 'react-i18next';
import { WorkingExperience } from '../../Models';
import CvCardComponent from './CvCardComponent';
import { useEffect, useState } from 'react';

export default function CvCardList() {
  const { i18n } = useTranslation();

  const [data, setData] = useState<any>();

  const language = i18n.language;

  useEffect(() => {
    // Dynamically import the language file based on the selected language
    import(`../../locales/${language}.json`)
      .then((module) => {
        setData(module.default);
      })
      .catch((error) => {
        console.error(`Error while importing language file: ${error}`);
      });
  }, [language]);

  if (!data) {
    return null;
  }

  return (
    <div className='w-full flex flex-col align-middle justify-center items-center p-4'>
      <div className='w-full md:w-2/3 border-l border-accent-300'>
        {data.about.cv.map((experience: WorkingExperience, index: number) => (
          <CvCardComponent experience={experience} key={index} index={index} />
        ))}
      </div>
    </div>
  );
}
