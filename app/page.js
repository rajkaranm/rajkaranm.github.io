import Link from 'next/link';
import styles from './page.module.css';
import { getAllPosts } from '@/lib/blog';
import Navbar from '@/components/Navbar/Navbar';
import Container from '@/components/Container/Container';

export default function Home() {
    const posts = getAllPosts();
  return (
    <Container>
        <Navbar />
        <pre className={styles.ascii_art}>
{`
        _       _   _            _
       | |     | | | |          | |
  __ _ | | __ _| |_| | ___ _ __ | | __
 / _\` || |/ _\` | __| |/ _ \\ '_ \\| |/ /
| (_| || | (_| | |_| |  __/ | | |   <
 \\__,_||_|\\__,_|\\__|_|\\___|_| |_|_|\\_\\
`}
        </pre>
        <div className={styles.intro}>
            <h1 className={styles.name}>Rajkaran Mishra</h1>
            <p className={styles.description}>
                I build robust full stack application and protect them from getting hacked. Besides from my technical skill I love writing and blogging about technology and self improvement.
            </p>
        </div>
        <div className={styles.post_list}>
            <h2 className="heading">[ recent posts ]</h2>
            {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.post_link}>
                <div className={styles.post_item}>
                <span className={styles.post_date}>{post.date}</span>
                <h3 className={styles.post_title}>{post.title}</h3>
                </div>
            </Link>
            ))}
        </div>
    </Container>
  );
}
