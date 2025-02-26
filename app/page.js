import Image from "next/image";
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
        <div data-aos="fade-up" className={styles.about}>
          <div >
            <Image
              className={styles.profile_img}
              src="/profile.jpg"
              width={200}
              height={200}
            />
          </div>
          <h1>Hi, I'm Rajkaran</h1>
          <p className={styles.desc}>
            I build robust full stack application and protect them from getting hacked. Besides from my technical skill I love writing and blogging about technology and self improvement.
          </p>
        </div>
      </div>
      <Divider />
      <Skills />
      <Divider />
      <Footer />

    </main>
  );
}
