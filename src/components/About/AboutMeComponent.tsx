import data from '../../assets/cvdata.json';

export default function AboutMeComponent() {
  return (
    <div className='text-lg leading-relaxed whitespace-pre max-w-lg overflow-scroll bg-primary-300 '>
      {data.aboutMe &&
        data.aboutMe.split('</br>').map((paragraph, index) => (
          <p
            key={index}
            className='mb-4 max-w-full break-normal overflow-scroll'
          >
            {paragraph}
          </p>
        ))}
    </div>
  );
}
