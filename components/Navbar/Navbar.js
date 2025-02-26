import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav>
      <div className={styles.nav}>
        <Link href="/" className={styles.logo}>
          <h1 className={styles.logo_name}>Rajkaran.</h1>
        </Link>
        <div className={styles.nav_links}>
          <Link target="_blank" href="https://rajkaranm.github.io/blog/">
            BLOG
          </Link>
          <Link href="/newsletter" target="_blank">
            NEWSLETTER
          </Link>
          <Link href="/portfolio">PORTFOLIO</Link>
          <Link href="/about">ABOUT</Link>
          <Link href="/contact">CONTACT</Link>
        </div>

        {/* <div className={styles.nav_icons}> */}
        {/*   <a href="https://www.youtube.com/@imrajkaran/" target="_blank"> */}
        {/*     <i className={`fa-brands fa-youtube ${styles.nav_icon}`}></i> */}
        {/*   </a> */}
        {/*   <a href="https://twitter.com/imrajkaran_" target="_blank"> */}
        {/*     <i className={`fa-brands fa-x-twitter ${styles.nav_icon}`}></i> */}
        {/*   </a> */}
        {/*   <a href="https://www.linkedin.com/in/raj-karan/" target="_blank"> */}
        {/*     <i className={`fa-brands fa-linkedin-in ${styles.nav_icon}`}></i> */}
        {/*   </a> */}
        {/*   <a href="https://github.com/rajkaranm" target="_blank"> */}
        {/*     <i className={`fa-brands fa-github ${styles.nav_icon}`}></i> */}
        {/*   </a> */}
        {/*   <a href="https://www.instagram.com/imrajkaran_" target="_blank"> */}
        {/*     <i className={`fa-brands fa-instagram ${styles.nav_icon}`}></i> */}
        {/*   </a> */}
        {/*   <a href="https://medium.com/@imrajkaran" target="_blank"> */}
        {/*     <i className={`fa-brands fa-medium ${styles.nav_icon}`}></i> */}
        {/*   </a> */}
        {/* </div> */}
      </div>
    </nav>
  );
}
