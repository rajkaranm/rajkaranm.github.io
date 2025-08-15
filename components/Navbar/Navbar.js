'use client'
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link href="/">home</Link>
      <Link href="/blog">blog</Link>
      <Link href="/portfolio">portfolio</Link>
    </nav>
  );
}
