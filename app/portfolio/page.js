import Link from "next/link";
import styles from "./Portfolio.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Container from "@/components/Container/Container";

const projects = [
    {
      name: "Crypton",
      description: "A blockchain application to transfer ETH and view live crypto prices.",
      github: "https://github.com/Rajkaranm/crypton",
    },
    {
      name: "Scrpyard",
      description: "A MERN stack E-Commerce website with project sharing and Razorpay.",
      github: "https://github.com/rajkaranm/scrpyard",
    },
    {
      name: "Share Source",
      description: "A social media forum built with SvelteKit and PostgreSQL.",
      github: "https://github.com/rajkaranm/share_source",
    },
    {
      name: "Spacehub",
      description: "A Django app providing space information from various NASA APIs.",
      github: "https://github.com/Rajkaranm/spacehub",
    },
  ];

export default function Portfolio() {
  return (
    <Container>
        <Navbar />
        <h1 className="heading">[ portfolio ]</h1>
        <div className={styles.project_list}>
            {projects.map((project, index) => (
                <div key={index} className={styles.project_item}>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.project_link}>
                        <h2 className={styles.project_title}>{project.name}</h2>
                        <p className={styles.project_description}>{project.description}</p>
                    </a>
                </div>
            ))}
        </div>
    </Container>
  );
}
