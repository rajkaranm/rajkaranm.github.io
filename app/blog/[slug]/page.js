import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import Link from "next/link";
import Container from "@/components/Container/Container";
import styles from "./Slug.module.css";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }) {
  const post = await getPostBySlug(params.slug);

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <Container>
          <article className={styles.article}>
            <header className={styles.header}>
              <h1 className={styles.title}>{post.title}</h1>
              <p className={styles.date}>{post.date}</p>
            </header>
            <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
            <div className={styles.back_link_container}>
              <Link href="/blog" className={styles.back_link}>← Back to blog</Link>
            </div>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  );
}
