import styles from "./Search.module.scss";
import Image from "next/image";

export default function Search() {
  return (
    <form className={styles["search--form"]}>
      <input
        id="search"
        type="text"
        className={styles["search--field"]}
      ></input>
      <label htmlFor="search" className={styles["search--label"]}>
        Search
      </label>
      <Image
        src={"/search_icon.svg"}
        className={styles["search--icon"]}
        alt="search"
        width={24}
        height={24}
      />
    </form>
  );
}
