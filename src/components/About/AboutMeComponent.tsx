import data from '../../assets/cvdata.json';

export default function AboutMeComponent() {
  return (
    <div className='mt-8 text-xl text-primary-700 whitespace-pre w-2/3 m-auto whitespace-pre-line text-justify '>
      {data.aboutMe && data.aboutMe}
    </div>
  );
}
