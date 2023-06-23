type IProps = {
  title: string;
  description: string;
  icon: string;
};

export default function ServiceCard({ title, description, icon }: IProps) {
  const svgURL = new URL(
    `../../assets/svg/icons/${icon}.svg`,

    import.meta.url
  ).href;
  return (
    <div className={`w-full sm:w-1/2 md:w-1/2 my-4 flex flex-col mt-8`}>
      <p className='text-xl  mb-3 ml-20 text-accent-500 font-light '>{title}</p>
      <div className='shadow-lg flex'>
        <img className='realtive h-1/8 m-8' src={svgURL} alt={icon} />
        <p className='text-gray-700 p-8 '>{description}</p>
      </div>
    </div>
  );
}
