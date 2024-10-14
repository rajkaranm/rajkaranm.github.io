import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Divider from "@/components/Divider/Divider";
import Skills from "@/components/Skills/Skills";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.landing}>
        <div className={styles.about}>
          <h1>Hi, I'm Rajkaran</h1>
          <p className={styles.desc}>
            I build robust full stack application and protect them from getting hacked. Besides from my technical skill I love writing and blogging about technology and self improvement.
          </p>
          <div className={styles.btn_box}>
            <button className={styles.btn}><Link target="_blank" href="https://rajkaranm.github.io/blog/">Check Blog</Link></button>
            <button className={styles.btn}><Link href="/portfolio">Check Projects</Link></button>
          </div>
        </div>
        <div>
          <Image
            className={styles.profile_img}
            src="/profile.jpg"
            width={400}
            height={400}
          />
        </div>
      </div>
      <Divider />
      <Skills />
      <Divider />
      <Footer />

    </main>
  );
}
