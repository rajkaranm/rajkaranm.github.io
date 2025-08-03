import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./Projects.module.css";

const projects = [
  {
    name: "#1 Crypton",
    description: "Crypton is a blockchain application integrated with Meta Mask. Users can transfer ETH on the Ethereum blockchain and view live crypto prices.",
    image: "https://raw.githubusercontent.com/rajkaranm/crypton/main/img/crypton.png",
    github: "https://github.com/Rajkaranm/crypton",
  },
  {
    name: "#2 Scrpyard",
    description: "Scrpyard is a MERN stack E-Commerce website with features to share projects, buy products, a cart, and Razorpay integration.",
    image: "https://raw.githubusercontent.com/rajkaranm/scrpyard/main/img/scrpyard.png",
    github: "https://github.com/rajkaranm/scrpyard",
  },
  {
    name: "#3 Share Source",
    description: "Share Source is a social media forum built with SvelteKit and PostgreSQL, allowing users to join channels and post content.",
    image: "https://raw.githubusercontent.com/rajkaranm/share_source/main/github-assests/share_source.png",
    github: "https://github.com/rajkaranm/share_source",
  },
  {
    name: "#4 Spacehub",
    description: "Spacehub provides space information from various APIs like NASA's picture of the day. It is built with Django.",
    image: "https://raw.githubusercontent.com/Rajkaranm/spacehub/master/img/home.jpg",
    github: "https://github.com/Rajkaranm/spacehub",
  },
];

export default function Projects() {
  return (
    <>
      <h1 className="heading">PROJECTS</h1>
      <div className={styles.project_container}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </>
  );
}
