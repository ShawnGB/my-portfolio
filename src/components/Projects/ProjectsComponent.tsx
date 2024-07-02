//import { useTranslation } from "react-i18next";

import ProjectsCard from "./ProjectsCard";

type Project = {
  title: string;
  description: string;
  link: string;
};

export default function ProjectsComponent(): JSX.Element {
  //const { t } = useTranslation();

  const projects: Project[] = [
    {
      title: "Jesse Becker Artdirection",
      description:
        "Developed from design specifications using vanilla HTML, CSS, and JavaScript, the Jesse Becker website showcases Jesse Becker's creative services in branding, digital design, and consultancy. The site features a clean and structured layout, emphasizing usability and straightforward navigation. This project demonstrates my proficiency in front-end development, translating design concepts into functional and visually appealing websites.",
      link: "http://jessebecker.com",
    },
    {
      title: "Bernd Wolf - Artist",
      description:
        "I customized the Bernd Wolf website using WordPress and PHP to allow administrators to apply a grayscale filter selectively to chosen images. This bespoke feature enhances the website's visual presentation, demonstrating my expertise in PHP development and WordPress customization.",
      link: "https://berndwolf.net",
    },
  ];
  return (
    <div className="w-full flex flex-col align-middle justify-center items-center p-4">
      {projects.map((project, index) => (
        <ProjectsCard key={index} {...project} />
      ))}
    </div>
  );
}
