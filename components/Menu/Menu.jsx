"use client";
import Logo from "./Logo";
import MenuItem from "./MenuItem";
import styles from "./Menu.module.scss";
import Account from "./Account";
import { useState } from "react";
import { Hamburger } from "@/components/Hamburger";

export default function Menu() {
  const [isMenuActive, setMenuActive] = useState(false);
  return (
    <>
      <Hamburger setMenuActive={setMenuActive} />
      <div className={styles["menu--space"]} />
      <div
        className={
          isMenuActive
            ? styles["menu"] + " " + styles["menu-active"]
            : styles["menu"]
        }
      >
        <div className={styles["menu--container"]}>
          <Logo />
          <MenuItem logoSrc="/key_icon.svg" text="Dashboard" url="/dashboard" />
          <MenuItem
            logoSrc="/product_icon.svg"
            text="Product"
            url="/product"
            hasArrow
          />
          <MenuItem
            logoSrc="/customer_icon.svg"
            text="Customers"
            url="/customers"
            hasArrow
          />
          <MenuItem
            logoSrc="/income_icon.svg"
            text="Income"
            url="/income"
            hasArrow
          />
          <MenuItem
            logoSrc="/promote_icon.svg"
            text="Promote"
            url="/promote"
            hasArrow
          />
          <MenuItem logoSrc="/help_icon.svg" text="Help" url="/help" hasArrow />
        </div>
        <Account
          profilePictureUrl="/profile_picture.png"
          name="Evano"
          position="Project Manager"
        />
      </div>
    </>
  );
}
