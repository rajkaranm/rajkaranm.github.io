import { getAllPosts } from "@/lib/blog";
import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Container from "@/components/Container/Container";
import styles from "./Blog.module.css";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <Container>
          <header className={styles.header}>
            <h1>Blog</h1>
            <p>Thoughts on technology, design, and self-improvement.</p>
          </header>
          <ul className={styles.post_list}>
            {posts.map((post) => (
              <li key={post.slug} className={styles.post_item}>
                <Link href={`/blog/${post.slug}`}>
                  <h2 className={styles.post_title}>{post.title}</h2>
                  <p className={styles.post_date}>{post.date}</p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </main>
      <Footer />
    </>
  );
}
