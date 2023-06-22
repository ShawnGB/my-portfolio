import { WorkingExperience } from '../../Models';
// import TimeSpanIcon from '../../assets/svg/icons/TimeSpanIcon';

type IProps = {
  experience: WorkingExperience;
  index: number;
};

export default function CvCardComponent({ experience, index }: IProps) {
  // const imgURL = new URL(
  //   `/src/assets/images/${experience.icon}`,
  //   import.meta.url
  // ).href;

  return (
    <div
      className={`w-full sm:w-1/2 my-4 flex flex-col gap-y-4 ${
        index % 2 === 0 ? 'sm:mr-auto' : 'sm:ml-auto'
      }`}
    >
      {/* <div className='relative -top-8 -left-8 bg-white h-20 w-full flex align-middle'>
        <img className='m-auto max-h-10 max-w-5/6' src={imgURL} alt='' />
      </div> */}

      <p className='font-light'>{experience.span}</p>
      <h1 className='text-l font-semibold'>{experience.conmpany}</h1>
      <h2 className='text-l font-regular'>{experience.position}</h2>
      <p className='text-base text-justify font-light '>
        {experience.description}
      </p>
    </div>
  );
}
