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
    {
      title: "Arina Shanzev - Kundalini Bodywork WIP",
      description:
        "Currently under development, the Arina Shanzev - Kundalini Bodywork website focuses on promoting holistic healing and bodywork services. Built using WordPress, this work-in-progress project will feature a minimalist design, incorporating soothing color schemes and intuitive navigation. The website is being designed to align with the peaceful and therapeutic nature of the services provided, ensuring a calming user experience.",
      link: "https://arinashanzev.com",
    },
    {
<<<<<<< HEAD
      title: "evolve Festival = WIP",
      description:
        "I recently redesigned the website for evolve Festival, a transformative event near Berlin that combines yoga, personal growth, and holistic ceremonies with music and dance. The new site, built on Wix, enhances user experience with intuitive navigation, a comprehensive program overview, and seamless ticket purchasing. This project underscores my commitment to creating engaging digital platforms for unique events.",
=======
      title: "evolve festival - WIP",
      description:
        "Currently under development, rewoking the website of the holistic health and yoga festival, this website is build using Wix. The goal is to establish consistency and a clear structure that highlights the intentions of the festival using the existing branding. Furthermore it should integrate features like ticketing and booking",
>>>>>>> 5e9c3646328922fa198d7830f1a602fc25dd5a90
      link: "https://www.evolve-festival.com",
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
