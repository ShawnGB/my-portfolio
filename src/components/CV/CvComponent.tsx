import data from '../../assets/cvdata.json';
import { WorkingExperience } from '../../Models';
import CvCardComponent from './CvCardComponent';

export default function CvComponent() {
  return (
    <div className='flex flex-row gap-4 absolut top-2/4 overflow-x-scroll  h-1/4'>
      {data.working &&
        data.working.map((experience: WorkingExperience) => (
          <CvCardComponent experience={experience} />
        ))}
    </div>
  );
}
