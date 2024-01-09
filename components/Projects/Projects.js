import Image from "next/image";
import styles from "./Projects.module.css"

export default function Projects() {
  return (
    <>
      <h1 className="heading">PORTFOLIO</h1>
      <div className={styles.project_container}>
        <div
          className={styles.project_card}
          data-aos="fade-up"
        >
          <Image
            src="https://raw.githubusercontent.com/rajkaranm/crypton/main/img/crypton.png"
            alt=""
            width="450"
            height="290"
          />
          <div className={styles.project_card_info}>
            <h3>#1 Crypton</h3>
            <p className="opacity-50">
              Crypton is <b>blockchacin</b> application. It is integrated with <b>Meta Mask</b>. User can transfer ETH on to
              another user's Wallet on <b>Etherium</b> blockchain. User is provided
              with Tools page where user can view live price and live graph of
              the price of the coin.
            </p>
            <button className={styles.btn}>
              <a href="https://github.com/Rajkaranm/spacehub" target="_blank">
                Github
              </a>
            </button>
          </div>
        </div>

        <div
          className={styles.project_card}
          data-aos="fade-up"
        >
          <Image
            src="https://raw.githubusercontent.com/rajkaranm/scrpyard/main/img/scrpyard.png"
            alt=""
            width="450"
            height="290"
          />
          <div className={styles.project_card_info}>
            <h3 className="text-[2rem] font-bold">#2 Scrpyard</h3>
            <p className="opacity-50">
              Scrpyard is E-Commerce website, It has feature to <b>share</b>{" "}
              your project and <b>buy</b> products of other users, It has{" "}
              <b>Cart feature</b>, It is also integrated with <b>Razorpay's</b>{" "}
              payment gateway. Scrpyard was build with <b>MERN Stack</b>.
            </p>
            <button className={styles.btn}>
              <a href="https://github.com/rajkaranm/scrpyard" target="_blank">
                Github
              </a>
            </button>
          </div>
        </div>

        <div
          className={styles.project_card}
          data-aos="fade-up"
        >
          <Image
            src="https://raw.githubusercontent.com/rajkaranm/share_source/main/github-assests/share_source.png"
            alt=""
            width="450"
            height="290"
          />
          <div className={styles.project_card_info}>
            <h3 className="text-[2rem] font-bold">#3 Share Source</h3>
            <p className="opacity-50">
              Share Source is <b>Social Media</b> Forum were people can join various
              channels and post interesting thing, It is build using power of <b>SvelteKit</b> and <b>PostgreSQL</b>.
               
            </p>
            <button className={styles.btn}>
              <a
                href="https://github.com/rajkaranm/share_source"
                target="_blank"
              >
                Github
              </a>
            </button>
          </div>
        </div>

        <div
          className={styles.project_card}
          data-aos="fade-up"
        >
          <Image
            src="https://raw.githubusercontent.com/Rajkaranm/spacehub/master/img/home.jpg"
            alt=""
            width="450"
            height="290"
          />
          <div className={styles.project_card_info}>
            <h3 className="text-[2rem] font-bold">#4 Spacehub</h3>
            <p className="opacity-50">
              It provide various information about space through <b>APIs</b>{" "}
              like NASA's Astronomy picture of the day and Various Other APIs.
              It is purely build with <b>Django</b>
            </p>
            <button className={styles.btn}>
              <a href="https://github.com/Rajkaranm/spacehub" target="_blank">
                Github
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
