import { getAllPosts } from "@/lib/blog";
import Link from "next/link";
import styles from "./Blog.module.css";
import Container from "@/components/Container/Container";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <Container>
      <h1 className="heading">Blog</h1>
      <p className={styles.description}>
        I write about technology, programming, and whatever else is on my mind.
      </p>
      <div className={styles.post_list}>
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.post_link}>
            <div className={styles.post_item}>
              <span className={styles.post_date}>{post.date}</span>
              <h2 className={styles.post_title}>{post.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
}
