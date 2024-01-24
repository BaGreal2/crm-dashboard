import Image from "next/image";
import styles from "./Logo.module.scss";

export default function Logo() {
  return (
    <div className={styles.container}>
      <Image
        src={"/dashboard_logo.svg"}
        alt="Logo Icon"
        width={37}
        height={37}
        className={styles.logoIcon}
      />
      <h1 className={styles.logoText}>Dashboard</h1>
      <p className={styles.logoVersion}>v.01</p>
    </div>
  );
}
