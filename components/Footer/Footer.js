import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <>
    <div className={styles.footer}>
      <div className={styles.footer_about}>
        <div>
          <h1 className="">Rajkaran Mishra</h1>
          <p className="">
            I have build many Full Stack Application from Blockchain to
            E-commerce, I Also have a lot interest Cyber Security.
          </p>
        </div>
        <hr className={styles.footer_hr} />
        <div className={styles.footer_links}>
          <Link href="https://medium.com/@imrajkaran" target="_blank">
            BLOG
          </Link>
          <Link href="/newsletter" target="_blank">
            NEWSLETTER
          </Link>
          <Link href="">PROJECTS</Link>
          <Link href="">ABOUT</Link>
          <Link href="">CONTACT</Link>
        </div>
      </div>
      <div>
        <iframe
          src="https://rajkaran.substack.com/embed"
          width="480"
          height="320"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
    </div>
      <p style={{"textAlign": "center", "padding": "1rem"}}>&#169; Rajkara Mishra</p>
    </>
  );
}
