"use client";
import styles from "./Hamburger.module.scss";
import Image from "next/image";

export default function Hamburger({ setMenuActive }) {
  return (
    <button
      onClick={() => setMenuActive((prev) => !prev)}
      className={styles["burger"]}
    >
      <Image
        src={"/burger_icon.svg"}
        alt="Burger Icon"
        width={36}
        height={36}
      />
    </button>
  );
}
