import { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import { useTranslation } from 'react-i18next';

export default function ServiceComponent() {
  const [data, setData] = useState<any>();
  const { i18n } = useTranslation();

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
    <div className='flex justify-center'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {data.service.map(
          (service: { title: string; description: string }, index: number) => (
            <ServiceCard
              title={service.title}
              description={service.description}
              key={index}
            />
          )
        )}
      </div>
    </div>
  );
}
