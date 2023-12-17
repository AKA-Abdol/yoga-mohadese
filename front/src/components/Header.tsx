import { useState } from "react";
import homeIcon from "../assets/images/icon.png";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuState, setMenuState] = useState(false);
  const [showVorood, setShowVorood] = useState(true);

  function handleMenu() {
    setMenuState(!menuState);
    setShowVorood(!showVorood);
  }

  return (
    <div className={styles.header}>
      <div className={styles.voroodBurgerContainer}>
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
            showVorood ? "" : "hidden"
          }`}
        >
          ورود
        </Link>
        <Link
          to={"/store/cart"}
          className={`text-[#58423A] text-lg z-[1] absolute right-32 top-[-12px] ${
            showVorood ? "" : "hidden"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M14.3331 9.99993C14.3317 9.59973 14.2102 9.20919 13.9843 8.87879C13.7585 8.54839 13.4388 8.29333 13.0665 8.14659L14.3131 3.47992C14.3392 3.38054 14.3419 3.27648 14.3211 3.17587C14.3003 3.07526 14.2565 2.98082 14.1931 2.89992C14.1284 2.82413 14.0474 2.76382 13.9563 2.72344C13.8652 2.68306 13.7661 2.66363 13.6665 2.66659H4.53313L4.31313 1.82659C4.27488 1.68453 4.19071 1.55911 4.07375 1.46988C3.95678 1.38065 3.81358 1.33261 3.66646 1.33326H2.33313V2.66659H3.15313L4.80646 8.83993C4.84553 8.98537 4.93269 9.1133 5.05375 9.20288C5.1748 9.29246 5.32262 9.33841 5.47313 9.33326H12.3331C12.5099 9.33326 12.6795 9.4035 12.8045 9.52852C12.9296 9.65355 12.9998 9.82311 12.9998 9.99993C12.9998 10.1767 12.9296 10.3463 12.8045 10.4713C12.6795 10.5964 12.5099 10.6666 12.3331 10.6666H3.66646C3.48965 10.6666 3.32008 10.7368 3.19506 10.8619C3.07003 10.9869 2.9998 11.1564 2.9998 11.3333C2.9998 11.5101 3.07003 11.6796 3.19506 11.8047C3.32008 11.9297 3.48965 11.9999 3.66646 11.9999H4.45313C4.34349 12.302 4.30825 12.6261 4.35042 12.9447C4.39258 13.2633 4.51089 13.567 4.69534 13.8302C4.87979 14.0933 5.12494 14.3082 5.41003 14.4565C5.69512 14.6048 6.01176 14.6823 6.33313 14.6823C6.6545 14.6823 6.97114 14.6048 7.25623 14.4565C7.54132 14.3082 7.78647 14.0933 7.97092 13.8302C8.15537 13.567 8.27368 13.2633 8.31584 12.9447C8.358 12.6261 8.32277 12.302 8.21313 11.9999H9.78646C9.68665 12.275 9.64842 12.5686 9.67446 12.8601C9.70049 13.1515 9.79017 13.4337 9.93716 13.6867C10.0841 13.9398 10.2849 14.1575 10.5252 14.3244C10.7654 14.4914 11.0395 14.6037 11.3278 14.6532C11.6162 14.7028 11.912 14.6884 12.1942 14.6112C12.4765 14.534 12.7384 14.3958 12.9614 14.2064C13.1844 14.0169 13.3631 13.7808 13.4849 13.5148C13.6068 13.2487 13.6687 12.9592 13.6665 12.6666C13.6652 12.3222 13.5732 11.9842 13.3998 11.6866C13.6849 11.5069 13.9199 11.258 14.0831 10.9631C14.2463 10.6683 14.3323 10.3369 14.3331 9.99993ZM11.7265 7.99993H5.9998L4.89313 3.99993H12.7998L11.7265 7.99993ZM6.33313 13.3333C6.20128 13.3333 6.07238 13.2942 5.96275 13.2209C5.85312 13.1477 5.76767 13.0435 5.71721 12.9217C5.66675 12.7999 5.65355 12.6659 5.67927 12.5365C5.705 12.4072 5.76849 12.2884 5.86173 12.1952C5.95496 12.102 6.07375 12.0385 6.20307 12.0127C6.33239 11.987 6.46643 12.0002 6.58825 12.0507C6.71007 12.1011 6.81419 12.1866 6.88744 12.2962C6.9607 12.4058 6.9998 12.5347 6.9998 12.6666C6.9998 12.8434 6.92956 13.013 6.80453 13.138C6.67951 13.263 6.50994 13.3333 6.33313 13.3333ZM11.6665 13.3333C11.5346 13.3333 11.4057 13.2942 11.2961 13.2209C11.1864 13.1477 11.101 13.0435 11.0505 12.9217C11.0001 12.7999 10.9869 12.6659 11.0126 12.5365C11.0383 12.4072 11.1018 12.2884 11.1951 12.1952C11.2883 12.102 11.4071 12.0385 11.5364 12.0127C11.6657 11.987 11.7998 12.0002 11.9216 12.0507C12.0434 12.1011 12.1475 12.1866 12.2208 12.2962C12.294 12.4058 12.3331 12.5347 12.3331 12.6666C12.3331 12.8434 12.2629 13.013 12.1379 13.138C12.0128 13.263 11.8433 13.3333 11.6665 13.3333Z"
              fill="#58423A"
            />
          </svg>
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
