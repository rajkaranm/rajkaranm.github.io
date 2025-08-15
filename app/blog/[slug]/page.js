import { getPostBySlug, getAllPosts } from "@/lib/blog";
import Link from "next/link";
import styles from "./Slug.module.css";
import Container from "@/components/Container/Container";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: `${post.slug}.html`,
  }));
}

export default async function BlogPost({ params }) {
  const post = await getPostBySlug(params.slug);

  return (
    <Container>
        <article className={styles.article}>
        <header className={styles.header}>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.date}>{post.date}</p>
        </header>
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        <div className={styles.back_link_container}>
            <Link href="/blog" className={styles.back_link}>← Back to Blog</Link>
        </div>
        </article>
    </Container>
  );
}
