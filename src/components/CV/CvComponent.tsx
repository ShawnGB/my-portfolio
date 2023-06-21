import { useTranslation } from 'react-i18next';

import { WorkingExperience } from '../../Models';
import CvCardComponent from './CvCardComponent';
import { useEffect, useState } from 'react';

export default function CvComponent() {
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
    <div className='h-2/4'>
      <div className='flex flex-row gap-20 align-middle h-5/6 overflow-x-scroll '>
        {data &&
          data.about.cv.map((experience: WorkingExperience, index: number) => (
            <CvCardComponent experience={experience} key={index} />
          ))}
      </div>
    </div>
  );
}
