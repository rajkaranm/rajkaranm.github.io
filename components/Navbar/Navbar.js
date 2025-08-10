'use client'
import Link from "next/link";
import styles from "./Navbar.module.css";
import { useContext } from "react";
import ThemeContext from "@/context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h1 className={styles.logo_name}>Rajkaran.</h1>
        </div>
        <div className={styles.nav_links}>
          <Link href="/">
            HOME
          </Link>
          <Link href="/blog">
            BLOG
          </Link>
          <Link href="/portfolio">
            PORTFOLIO
          </Link>
          <button onClick={toggleTheme} className={styles.theme_toggle}>
            {theme === 'light' ? <i className="fa-solid fa-moon"></i> : <i className="fa-solid fa-sun"></i>}
          </button>
        </div>
      </div>
    </nav>
  );
}
