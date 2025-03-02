import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { getPostBySlug } from "@/lib/blog";
import Link from "next/link";

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

