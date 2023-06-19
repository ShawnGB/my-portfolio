import data from '../../assets/cvdata.json';
import { WorkingExperience } from '../../Models';
import CvCardComponent from './CvCardComponent';

export default function CvComponent() {
  return (
    <div className='fixed top-2/4 h-2/4'>
      <h2 className='my-4 mx-8 text-primary-500 font-regular text-xl'>
        Working expoerince &&
      </h2>
      <div className='flex flex-row gap-8 align-middle h-5/6 overflow-x-scroll '>
        {data.working &&
          data.working.map((experience: WorkingExperience, index) => (
            <CvCardComponent experience={experience} key={index} />
          ))}
      </div>
    </div>
  );
}
