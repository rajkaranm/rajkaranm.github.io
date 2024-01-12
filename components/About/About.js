import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.about_container}>
      <div className={styles.about}>
        <h1 className={styles.about_heading}>About.</h1>
        <Image src="/profile2.jpg" width={500} height={500} />
        <p className={styles.about_para}>
          I'm Rajkaran Mishra, a programmer, hacker and writer. I have been
          working on a lot of projects from e-commerce to blockchain web
          applications.
          <br />
          <br />
          I love writing. I have been reading a lot about self-improvement. I
          share technical programming and hacking concepts at <a href="https://medium.com/@imrajkaran">Medium</a> , and all
          the self-improvement articles are shared through my newsletter <a href="https://rajkaran.substack.com">Becoming Master</a><br />
          <br />I 'm working on my first book "Master of Note-Taking". Why
          Note-Taking? because I have observe that my note-taking process have
          helped me alot, Also not just me, while researching for the book, I
          have found that many successful people like Thomas Edison were a great
          note-takers.<br /><br /> I'm also working on my <a href="https://www.youtube.com/@ItsRkEver">YouTube</a> channel, though I get
          very less time. But I'm trying my best to create quality content.
        </p>
      </div>
    </div>
  );
}
