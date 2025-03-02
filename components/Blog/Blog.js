import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import styles from "./Blog.module.css"

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className={styles.blog_container}>
      <h1 className="heading">Blogs</h1>
      <ul >
        {posts.map((post) => (
          <li data-aos="fade-up" className={styles.blog_item} key={post.slug}>

            <Link href={`/blog/${post.slug}`}>
              <h2 className={styles.blog_title}>{post.title}</h2>
            </Link>
            <p className={styles.blog_date}>{post.date}</p>
          </li>
        ))}
      </ul>
    </div>

  )
}
