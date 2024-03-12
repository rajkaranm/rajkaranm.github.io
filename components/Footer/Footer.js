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
      </div>
      <div className={styles.newsletter}>
        <iframe
          src="https://rajkaran.substack.com/embed"
          width="380"
          height="320"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
    </div>
      <p style={{"textAlign": "center", "padding": "1rem"}}>&#169; Rajkaran Mishra</p>
    </>
  );
}
