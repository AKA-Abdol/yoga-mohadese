import { useState } from "react";
import homeIcon from "../assets/images/icon.png";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuState, setMenuState] = useState(false);
  function handleMenu() {
    setMenuState(!menuState);
  }
  return (
    <div className={styles.header}>
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
      <div className={styles["home-link"]}>
        <Link to={"/home"}>
          <img src={homeIcon} alt="home" className={styles["img-link"]} />
        </Link>
      </div>
      <div
        className={`${styles.sidenav} ${styles["grid-container"]} ${
          menuState ? styles.activeNav : styles["not-activeNav"]
        }`}
      >
        <Link
          to={"/home"}
          className={`${styles["nav-links"]} ${styles.item1} ${
            menuState ? styles.activeNavLinks : ``
          }`}
        >
          خانه
        </Link>
        <Link
          to={"/auth"}
          className={`${styles["nav-links"]} ${styles.item2} ${
            menuState ? styles.activeNavLinks : ``
          }`}
        >
          ثبت نام / ورود
        </Link>
        <Link
          to={"/about"}
          className={`${styles["nav-links"]} ${styles.item3} ${
            menuState ? styles.activeNavLinks : ``
          }`}
        >
          یوگا با محدثه
        </Link>
        <Link
          to={"/reserve"}
          className={`${styles["nav-links"]} ${styles.item4} ${
            menuState ? styles.activeNavLinks : ``
          }`}
        >
          رزرو کلاس حضوری
        </Link>
        <Link
          to={"/terms"}
          className={`${styles["nav-links"]} ${styles.item5} ${
            menuState ? styles.activeNavLinks : ``
          }`}
        >
          قوانین
        </Link>
        <Link
          to={"/contact"}
          className={`${styles["nav-links"]} ${styles.item6} ${
            menuState ? styles.activeNavLinks : ``
          }`}
        >
          ارتباط با ما
        </Link>
      </div>
    </div>
  );
}
