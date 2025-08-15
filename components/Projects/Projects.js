import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./Projects.module.css";

const projects = [
  {
    name: "Crypton",
    description: "A blockchain application to transfer ETH and view live crypto prices.",
    image: "https://raw.githubusercontent.com/rajkaranm/crypton/main/img/crypton.png",
    github: "https://github.com/Rajkaranm/crypton",
    tags: ["Blockchain", "React", "MetaMask"]
  },
  {
    name: "Scrpyard",
    description: "A MERN stack E-Commerce website with project sharing and Razorpay.",
    image: "https://raw.githubusercontent.com/rajkaranm/scrpyard/main/img/scrpyard.png",
    github: "https://github.com/rajkaranm/scrpyard",
    tags: ["MERN", "E-Commerce", "Node.js"]
  },
  {
    name: "Share Source",
    description: "A social media forum built with SvelteKit and PostgreSQL.",
    image: "https://raw.githubusercontent.com/rajkaranm/share_source/main/github-assests/share_source.png",
    github: "https://github.com/rajkaranm/share_source",
    tags: ["SvelteKit", "PostgreSQL", "Social Media"]
  },
  {
    name: "Spacehub",
    description: "A Django app providing space information from various NASA APIs.",
    image: "https://raw.githubusercontent.com/Rajkaranm/spacehub/master/img/home.jpg",
    github: "https://github.com/Rajkaranm/spacehub",
    tags: ["Django", "Python", "API"]
  },
];

export default function Projects() {
  return (
    <div>
      <h1 className="heading">Projects</h1>
      <div className={styles.project_grid}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
