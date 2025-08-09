import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import Link from "next/link";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }) {
  const post = await getPostBySlug(params.slug);

  return (
    <div>
      <Navbar />
      <article className="blog_reader">
        <h1>{post.title}</h1>
        <p>{post.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        <div style={{ "marginTop": "3rem" }}>
          <Link href="/blog">← Back to blog</Link>
        </div>
      </article>
      <Footer />
    </div>
  );
}

