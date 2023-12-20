import { useState } from "react";
import homeIcon from "../assets/images/icon.png";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import BasketSVG from "src/assets/svgs/BasketSVG";

export default function Header() {
  const [menuState, setMenuState] = useState(false);
  const [showSignIn, setShowSignIn] = useState(true);

  function handleMenu() {
    setMenuState(!menuState);
    setShowSignIn(!showSignIn);
  }

  return (
    <div className={styles.header}>
      <div className={styles.signInBurgerContainer}>
        <div className={styles.box} onClick={handleMenu}>
          <div
            className={`${styles.navBtn} ${
              menuState ? styles.active : styles["not-active"]
            }`}
          >
            <span className={styles["menu-burguer"]}></span>
            <span className={styles["menu-burguer"]}></span>
            <span className={styles["menu-burguer"]}></span>
          </div>
        </div>
        <Link
          to={"/auth"}
          className={`text-[#58423A] text-lg z-[1] absolute right-20 top-[-18px] ${
            showSignIn ? "" : "hidden"
          }`}
        >
          ورود
        </Link>
        <Link
          to={"/store/cart"}
          className={`text-[#58423A] text-lg z-[1] absolute right-32 top-[-12px] ${
            showSignIn ? "" : "hidden"
          }`}
        >
          <BasketSVG />
        </Link>
      </div>
      <div className={styles["home-link"]}>
        <Link to={"/home"} onClick={handleMenu}>
          <img src={homeIcon} alt="home" className={styles["img-link"]} />
        </Link>
      </div>
      <div
        className={`${styles.sidenav} 
        ${menuState ? styles.activeNav : styles["not-activeNav"]}`}
      >
        <Link
          to={"/home"}
          className={`${styles["nav-links"]}  ${
            menuState ? styles.activeNavLinks : ``
          }`}
          onClick={handleMenu}
        >
          خانه
        </Link>
        <Link
          to={"/auth"}
          className={`${styles["nav-links"]}  ${
            menuState ? styles.activeNavLinks : ``
          }`}
          onClick={handleMenu}
        >
          ثبت نام / ورود
        </Link>
        <Link
          to={"/about"}
          className={`${styles["nav-links"]}  ${
            menuState ? styles.activeNavLinks : ``
          }`}
          onClick={handleMenu}
        >
          یوگا با محدثه
        </Link>
        <Link
          to={"/store"}
          className={`${styles["nav-links"]}  ${
            menuState ? styles.activeNavLinks : ``
          }`}
          onClick={handleMenu}
        >
          فروشگاه
        </Link>
        <Link
          to={"/ticket"}
          className={`${styles["nav-links"]}  ${
            menuState ? styles.activeNavLinks : ``
          }`}
          onClick={handleMenu}
        >
          ثبت درخواست
        </Link>
        <Link
          to={"/terms"}
          className={`${styles["nav-links"]}  ${
            menuState ? styles.activeNavLinks : ``
          }`}
          onClick={handleMenu}
        >
          قوانین
        </Link>
        <Link
          to={"/contact"}
          className={`${styles["nav-links"]}  ${
            menuState ? styles.activeNavLinks : ``
          }`}
          onClick={handleMenu}
        >
          ارتباط با ما
        </Link>
      </div>
    </div>
  );
}
