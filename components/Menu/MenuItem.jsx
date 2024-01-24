"use client";

import styles from "./MenuItem.module.scss";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MenuItem({ logoSrc, text, url, hasArrow }) {
  const pathname = usePathname();
  const isActive = pathname === url;
  return (
    <Link href={url} className={styles["menu--link"]}>
      <div
        className={
          isActive ? styles["menu--button-active"] : styles["menu--button"]
        }
      >
        <div className={styles["menu--button-section"]}>
          <Image
            src={logoSrc}
            className={
              isActive
                ? styles["menu--button-icon-active"]
                : styles["menu--button-icon"]
            }
            alt="Logo"
            width={24}
            height={24}
          />
          <p
            className={
              isActive
                ? styles["menu--button-text-active"]
                : styles["menu--button-text"]
            }
          >
            {text}
          </p>
        </div>
        {hasArrow && (
          <Image
            src={isActive ? "/active_arrow.svg" : "/not_active_arrow.svg"}
            alt="arrow"
            width={16}
            height={16}
          />
        )}
      </div>
    </Link>
  );
}
