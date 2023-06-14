import { WorkingExperience } from '../../Models';
import TimeSpanIcon from '../../assets/svg/icons/TimeSpanIcon';

type IProps = {
  experience: WorkingExperience;
};

export default function CvCardComponent({ experience }: IProps) {
  return (
    <div className='bg-white w-1/3 mb-4 font-sans drop-shadow-md flex rounded-sm flex-shrink-0 '>
      <div className='w-full h-full flex'>
        <img className='m-auto' src='/assets/images/freihet-icon.png' alt='' />
      </div>

      <div className='p-4 flex flex-col justify-between leading-normal'>
        <div className='mb-8'>
          <p className='text-sm text-gray-600 flex items-center gap-x-2'>
            <TimeSpanIcon />
            {experience.span}
          </p>
          <div className='flex flex-col justify-items-start  my-3 w-3/4 '>
            <div className='text-gray-900  text-xl '>{experience.conmpany}</div>
            <div className='ml-4 text-l'>{experience.position}</div>
          </div>

          <p className='text-gray-700 w-3/4 text-base text-justify '>
            {experience.description}
          </p>
        </div>
      </div>
    </div>
  );
}
