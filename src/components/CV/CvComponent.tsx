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
    <div>
      {experiences.map((experience: WorkingExperience) => (
        <CvCardComponent experience={experience} />
      ))}
    </div>
  );
}
