import Link from 'next/link';
import styles from './page.module.css';
import Container from '@/components/Container/Container';

export default function Home() {
  return (
    <Container>
      <div className={styles.hero}>
        <h1 className={styles.title}>
          Rajkaran Mishra
        </h1>
        <p className={styles.subtitle}>
          Programmer, Hacker, and Writer.
        </p>
        <p className={styles.description}>
          I build robust full-stack applications and protect them from getting hacked. I love writing about technology and self-improvement.
        </p>
        <div className={styles.buttons}>
          <Link href="/portfolio" className={styles.cta_button}>
            View My Work
          </Link>
          <Link href="/blog" className={`${styles.cta_button} ${styles.secondary}`}>
            Read My Blog
          </Link>
        </div>
      </div>
    </Container>
  );
}
