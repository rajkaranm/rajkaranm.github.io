import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.about_container}>
      <div className={styles.about}>
        <h1 className="heading">About</h1>
        <p data-aos="fade-up" className={styles.about_para}>
          I'm Rajkaran Mishra, a programmer, hacker and writer. I have been
          working on a lot of projects from e-commerce to blockchain web
          applications.
          <br />
          <br />
          I love writing and I share technical and hacking concepts at <a href="https://medium.com/@imrajkaran">medium</a> blog, and all random shit goes to my <a href="https://rajkaran.substack.com">newsletter.</a><br />
          <br /> I'm also working on my <a href="https://www.youtube.com/@ItsRkEver">YouTube</a> channel, though I get very less time. But I'm trying my best to produce quality content.
        </p>
      </div>
    </div>
  );
}
