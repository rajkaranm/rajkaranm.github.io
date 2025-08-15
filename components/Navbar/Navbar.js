'use client'
import Link from "next/link";
import styles from "./Navbar.module.css";
import { useContext } from "react";
import ThemeContext from "@/context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <nav className={styles.nav}>
      <Link href="/">home</Link>
      <Link href="/blog">blog</Link>
      <Link href="/portfolio">portfolio</Link>
      <button onClick={toggleTheme} className={styles.theme_toggle}>
        {theme === 'light' ? '[dark]' : '[light]'}
      </button>
    </nav>
  );
}
