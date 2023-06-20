import { WorkingExperience } from '../../Models';
import TimeSpanIcon from '../../assets/svg/icons/TimeSpanIcon';

type IProps = {
  experience: WorkingExperience;
};

export default function CvCardComponent({ experience }: IProps) {
  const imgURL = new URL(
    `/src/assets/images/${experience.icon}`,
    import.meta.url
  ).href;

  return (
    <div className='bg-primary-200 w-1/3 h-3/4  mt-10 bg-opacity-30 shadow-lg rounded-lg flex flex-shrink-0 gap-4 align-middle'>
      <div className='relative -top-8 -left-8 bg-white h-20 w-full flex align-middle rounded-lg shadow-md'>
        <img className='m-auto max-h-10 max-w-5/6' src={imgURL} alt='' />
      </div>
      <div className=' flex flex-col justify-between leading-normal py-8'>
        <div className='mb-8'>
          <p className='text-sm text-gray-600 flex items-center gap-x-2 text-accent-400 font-medium'>
            <TimeSpanIcon />
            {experience.span}
          </p>
          <div className='flex flex-col justify-items-start  my-3 w-3/4 '>
            <div className='font-regular text-xl text-primary-700'>
              {experience.conmpany}
            </div>
            <div className='text-l font-regular text-primary-500'>
              {experience.position}
            </div>
          </div>

          <p className='text-gray-500 w-3/4 text-base text-justify  text-primary-500 '>
            {experience.description}
          </p>
        </div>
      </div>
    </div>
  );
}
