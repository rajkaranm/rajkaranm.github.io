import Link from 'next/link';
import styles from './Sidebar.module.css';
import ThemeContext from "@/context/ThemeContext";
import { useContext } from 'react';


export default function Sidebar() {
    const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <Link href="/">
          <h1 className={styles.logo_name}>Rajkaran.</h1>
        </Link>
      </div>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/portfolio">Portfolio</Link>
      </nav>
      <div className={styles.footer}>
        <button onClick={toggleTheme} className={styles.theme_toggle}>
            {theme === 'light' ? <i className="fa-solid fa-moon"></i> : <i className="fa-solid fa-sun"></i>}
        </button>
        <div className={styles.social_icons}>
            <a href="#" target="_blank"><i className="devicon-youtube-plain"></i></a>
            <a href="#" target="_blank"><i className="devicon-medium-plain"></i></a>
            <a href="#" target="_blank"><i className="devicon-github-original"></i></a>
            <a href="#" target="_blank"><i className="devicon-twitter-original"></i></a>
            <a href="#" target="_blank"><i className="devicon-instagram-plain"></i></a>
        </div>
        <p>© 2025 Rajkaran Mishra</p>
      </div>
    </aside>
  );
}
