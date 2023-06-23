import { WorkingExperience } from '../../Models';

type IProps = {
  experience: WorkingExperience;
  index: number;
};

export default function CvCardComponent({ experience }: IProps) {
  return (
    <div className={`w-full sm:w-1/2 md:w-1/2 my-4 flex flex-col mt-8`}>
      <p className='text-xl  mb-3 ml-20 text-accent-500 font-light '>
        {experience.position}
      </p>

      <div className='shadow-lg flex flex-col md:flex-row border border-primary-50 md:max-w-2/4'>
        {/* <img
          className='realtive h-1/8 w-10 m-auto mt-8 md:w-none md:ml-8 md:mt-10'
          src={svgURL}
          alt={icon}
        /> */}
        <div className='p-8 w-full'>
          <div className='my-2 w-full flex flex-row center justify-between'>
            <h3 className='text-lg font-semibold  '>{experience.conmpany}</h3>
            <p className='text-gray-700  font-light'> {experience.span} </p>
          </div>

          <p className='text-gray-700'>{experience.description} </p>
        </div>
      </div>
    </div>
  );
}
