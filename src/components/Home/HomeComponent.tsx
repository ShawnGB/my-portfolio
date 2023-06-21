import { useTranslation } from 'react-i18next';

export default function HomeComponent() {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>{t('greeting', { name: 'John' })}</p>
    </div>
  );
}
