import { WorkingExperience } from '../../Models';

type IProps = {
  experience: WorkingExperience;
  index: number;
};

export default function CvCardComponent({ experience, index }: IProps) {
  return (
    <div
      className={`w-full sm:w-1/2 md:w-1/3 my-4 flex flex-col gap-y-4 ${
        index % 2 === 0 ? 'sm:mr-auto' : 'sm:ml-auto'
      } shadow-lg p-8`}
    >
      <p className='text-primary-500 font-medium'>{experience.span}</p>
      <h3 className='text-primary-500 font-bold text-lg'>
        {experience.conmpany}
      </h3>
      <h4 className='text-primary-500 font-normal text-base'>
        {experience.position}
      </h4>
      <p className='text-primary-500'>{experience.description}</p>
    </div>
  );
}
