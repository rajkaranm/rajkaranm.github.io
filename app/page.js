import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Divider from "@/components/Divider/Divider";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.landing}>
        <div data-aos="fade-up" className={styles.about}>
          <div >
            <Image
              className={styles.profile_img}
              src="/profile.jpg"
              width={200}
              height={200}
            />
          </div>
          <h1 className={styles.intro}>Hi, I'm Rajkaran</h1>
          <p className={styles.desc}>
            I build robust full stack application and protect them from getting hacked. Besides from my technical skill I love writing and blogging about technology and self improvement.
          </p>
          <div className={styles.buttons}>
            <Link href="/blog" className={styles.btn}>View Blog</Link>
            <Link href="/portfolio" className={styles.btn}>View Portfolio</Link>
          </div>
          <div className={styles.social_icons}>
            <a href="#" target="_blank"><i className="devicon-youtube-plain"></i></a>
            <a href="#" target="_blank"><i className="devicon-medium-plain"></i></a>
            <a href="#" target="_blank"><i className="devicon-github-original"></i></a>
            <a href="#" target="_blank"><i className="devicon-twitter-original"></i></a>
            <a href="#" target="_blank"><i className="devicon-instagram-plain"></i></a>
          </div>
        </div>
      </div>
      <Divider />
      <Footer />
    </main>
  );
}
