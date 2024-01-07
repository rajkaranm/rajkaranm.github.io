import styles from "./Divider.module.css"

export default function Divider() {
  return (
    <div className={styles.divider_box}>
      <hr className={styles.divider} />
    </div>
  );
}
