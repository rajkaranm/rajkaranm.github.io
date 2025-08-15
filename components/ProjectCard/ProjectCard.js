import Image from "next/image";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project }) {
  return (
    <div className={styles.card}>
      <a href={project.github} target="_blank" rel="noopener noreferrer">
        <Image
          src={project.image}
          alt={project.name}
          width={400}
          height={250}
          className={styles.image}
        />
      </a>
      <div className={styles.content}>
        <h3 className={styles.title}>{project.name}</h3>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
