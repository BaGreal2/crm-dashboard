import Image from "next/image";
import styles from "./Account.module.scss";

export default function Account({ profilePictureUrl, name, position }) {
  return (
    <div className={styles["account--container"]}>
      <Image
        src={profilePictureUrl}
        alt="Profile picture url"
        width={42}
        height={42}
        className={styles["account--image"]}
      />
      <div className={styles["account--info-container"]}>
        <p className={styles["account--info-name"]}>{name}</p>
        <p className={styles["account--info-position"]}>{position}</p>
      </div>
    </div>
  );
}
