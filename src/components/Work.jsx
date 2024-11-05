/**
 * @copyright 2024 ashan-subawickrama
 * @license Apache-2.0
 */

/**
 * Components
 */
import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/project-1.png",
    title: "Employee M. System",
    tags: ["Java", "Spring Boot", "MySQL"],
    projectLink:
      "https://github.com/ashansube/Spring-Boot-Employee-Management-System",
  },
  {
    imgSrc: "/images/project-2.png",
    title: "Library M. System",
    tags: ["Laravel", "MySQL", "Livewire"],
    projectLink: "https://github.com/ashansube/library-system",
  },
  {
    imgSrc: "/images/project-3.png",
    title: "Online Medicine Store",
    tags: ["MERN", "AWS", "ML"],
    projectLink: "https://github.com/ashansube/medicine-store",
  },
  {
    imgSrc: "/images/project-4.png",
    title: "Clothing Store Frontend",
    tags: ["React", "CSS"],
    projectLink: "https://github.com/ashansube/blooms-clothing-store",
  },
  {
    imgSrc: "/images/project-5.jpg",
    title: "Node Clean Architecture",
    tags: ["Node JS", "MongoDB"],
    projectLink: "https://github.com/codewithsadee/anon-ecommerce-website",
  },
  {
    imgSrc: "/images/project-6.jpg",
    title: "vCard Personal portfolio",
    tags: ["Web-design", "Development"],
    projectLink: "https://github.com/codewithsadee/vcard-personal-portfolio",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">Latest Work</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
