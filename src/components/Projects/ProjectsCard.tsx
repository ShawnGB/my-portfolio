type IProps = {
  title: string;
  description: string;
  link: string;
};

export default function ProjectsCard({ title, description, link }: IProps) {
  // const svgURL = new URL(
  //   `../../assets/svg/icons/${icon}.svg`,
  //   import.meta.url,
  // ).href;
  return (
    <div className={`w-full sm:w-1/2 md:w-1/2 my-4 flex flex-col mt-8`}>
      <p className="text-xl  mb-3 ml-20 text-accent-500 dark:text-darkMode-accent-500 font-light ">
        <a href={link} target="_blank">
          {title}
        </a>
      </p>
      <div className="shadow-lg flex flex-col md:flex-row border border-primary-50 dark:border-darkMode-primary-50 md:max-w-2/4">
        {/* <img */}
        {/*   className="realtive h-1/8 w-10 m-auto mt-8 md:w-none md:ml-8 md:mt-10" */}
        {/*   src={svgURL} */}
        {/*   alt={icon} */}
        {/* /> */}
        <p className="text-gray-700 p-8 ">{description}</p>
      </div>
    </div>
  );
}
