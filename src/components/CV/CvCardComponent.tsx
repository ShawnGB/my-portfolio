import { WorkingExperience } from '../../Models';

type IProps = {
  experience: WorkingExperience;
  index: number;
};

//clean up the code and make it more readable and reusable

export default function CvCardComponent({ experience }: IProps) {
  return (
    <div className='w-full my-4 flex flex-col mt-8 ml-4 md:ml-20'>
      <div className='relative top-4 -ml-4 md:-left-16 h-2 w-2 -translate-x-2/4 bg-accent-600 dark:bg-darkMode-accent-600 rounded-full '></div>
      <p className='text-md md:text-xl mb-3 text-accent-500 dark:text-darkMode-accent-500 font-light '>
        {experience.position}
      </p>

      <div className='shadow-lg flex flex-col md:flex-row border border-primary-50 dark:border-darkMode-primary-50 dark:shadow-darkMode-primary-200 md:max-w-2/4 mr-4 '>
        {/* <img
          className='realtive h-1/8 w-10 m-auto mt-8 md:w-none md:ml-8 md:mt-10'
          src={svgURL}
          alt={icon}
        /> */}
        <div className='p-8 w-full'>
          <div className='my-2 w-full flex flex-row center justify-between'>
            <h3 className='text-sm md:text-lg font-semibold'>
              {experience.conmpany}
            </h3>
            <p className='text-sm md:text-lg font-light'>{experience.span}</p>
          </div>

          <p className='text-sm md:text-lg whitespace-pre-line'>
            {experience.description}
          </p>
        </div>
      </div>
    </div>
  );
}
