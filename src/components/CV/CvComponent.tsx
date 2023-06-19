import data from '../../assets/cvdata.json';
import { WorkingExperience } from '../../Models';
import CvCardComponent from './CvCardComponent';

export default function CvComponent() {
  return (
    <div className='flex flex-row gap-8 align-middle fixed top-2/4 h-2/4 overflow-x-scroll '>
      {data.working &&
        data.working.map((experience: WorkingExperience, index) => (
          <CvCardComponent experience={experience} key={index} />
        ))}
    </div>
  );
}
