import Image from "next/image";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project }) {
  return (
    <div className={styles.card}>
      <Image
        src={project.image}
        alt={project.name}
        width="450"
        height="290"
      />
      <div className={styles.card_info}>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <a href={project.github} target="_blank" className={styles.btn}>
          <i className="devicon-github-original"></i> Github
        </a>
      </div>
    </div>
  );
}
