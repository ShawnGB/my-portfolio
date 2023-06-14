import { useEffect, useState } from 'react';
import data from '../../assets/cvdata.json';
import { WorkingExperience } from '../../Models';
import CvCardComponent from './CvCardComponent';

export default function CvComponent() {
  const [experiences, setExperiences] = useState<WorkingExperience[]>([]);

  useEffect(() => {
    if (data.working) {
      setExperiences(data.working);
    }
  }, []);

  return (
    <div className='flex flex-row gap-4 overflow-x-scroll fixed top-2/4'>
      {experiences.map((experience: WorkingExperience) => (
        <CvCardComponent experience={experience} />
      ))}
    </div>
  );
}
