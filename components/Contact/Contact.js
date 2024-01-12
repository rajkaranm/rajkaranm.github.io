import Image from "next/image";
import styles from "./Contact.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.about_info}>
        <div>
          <h1 className={styles.about_heading}>Contact.</h1>
          <p>Get in touch via social media or email.</p>
        </div>
        <div className={styles.about_icons}>
          <a href="mailto:rajkaranvir456@gmail.com" target="_blank">
            <i className={`fa-solid fa-envelope ${styles.about_icon}`}></i>
          </a>
          <a href="https://twitter.com/imrajkaran_" target="_blank">
            <i className={`fa-brands fa-x-twitter ${styles.about_icon}`}></i>
          </a>
          <a href="https://www.linkedin.com/in/raj-karan/" target="_blank">
            <i className={`fa-brands fa-linkedin-in ${styles.about_icon}`}></i>
          </a>
          <a href="https://www.instagram.com/imrajkaran_/" target="_blank">
            <i className={`fa-brands fa-instagram ${styles.about_icon}`}></i>
          </a>
        </div>
      </div>
      <div>
        <Image
          className={styles.profile_img}
          src="/profile.jpg"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
}
