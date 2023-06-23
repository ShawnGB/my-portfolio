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
    <div className='w-full flex flex-col align-middle justify-center items-center p-4'>
      {data.service.map(
        (
          service: { title: string; description: string; icon: string },
          index: number
        ) => (
          <ServiceCard
            title={service.title}
            description={service.description}
            key={index}
            icon={service.icon}
          />
        )
      )}
    </div>
  );
}
