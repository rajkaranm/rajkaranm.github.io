import styles from "./Skills.module.css";
import { PiDevToLogoFill } from "react-icons/pi";
import { FaServer } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";

export default function Skills() {
  return (
    <div className={styles.skills_container}>
      <h1 className="heading">WHAT DO I OFFER</h1>

      <div className={styles.skills}>
        <div data-aos="fade-up" className={styles.skills_card}>
          <PiDevToLogoFill className={styles.skills_card_icon} />
          <h2 className="py-5 w-52 text-center text-3xl font-bold">
            Full Stack Development
          </h2>
          <div className="text-center w-[22rem]">
            <p className={styles.skills_desc}>
              I build high performing and robust application mainly using MERN
              Stack.
            </p>
          </div>
        </div>

        <div data-aos="fade-up" className={styles.skills_card}>
          <FaServer className={styles.skills_card_icon} />
          <h2 className="pb-14 py-5 text-3xl font-bold">DevOps</h2>
          <p className={styles.skills_desc}>
            I improve performance of the application using various tools liks
            Docker, kubernetes, etc.
          </p>
        </div>

        <div data-aos="fade-up" className={styles.skills_card}>
          <MdOutlineSecurity className={styles.skills_card_icon} />
          <h2 className="py-5 w-52 text-center text-3xl font-bold">
            Penetration Testing
          </h2>
          <p className={styles.skills_desc}>
            I find vulnerabilities in the application and provide solutions to
            fix the problem.
          </p>
        </div>
      </div>
    </div>
  );
}
