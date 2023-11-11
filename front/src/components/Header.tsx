import { useState } from "react";
import homeIcon from "../assets/images/icon.png";
import styles from "./Header.module.css";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import iranFlag from "../assets/svgs/iranFlag.svg";
import ukFlag from "../assets/svgs/ukFlag.svg";
export default function Header() {
  const [menuState, setMenuState] = useState(false);
  const [showVorood, setShowVorood] = useState(true);
  const { t } = useTranslation();
  const location = useLocation();

  function handleMenu() {
    setMenuState(!menuState);
    setShowVorood(!showVorood);
  }

  const { i18n } = useTranslation();

  function changeLanguage(e: any) {
    i18n.changeLanguage(e.target.id);
    console.log(e.target.id);
  }

  return (
    <div className={styles.header}>
      <div className="z-[500] flex relative gap-6">
        <div className="bg-transparent z-[500]" onClick={handleMenu}>
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
          className={`${styles.vorood}  ${showVorood ? "" : styles.disNon}`}
        >
          {t("header-signIn")}
        </Link>
        <div
          className={`${location.pathname === "/home" ? "" : "hidden"} ${
            showVorood ? "" : "hidden"
          }  flex justify-center items-center`}
        >
          <button onClick={(e) => changeLanguage(e)} id="en" value="en">
            <img src={ukFlag} id="en" className="w-8 h-4" />
          </button>
          <button onClick={(e) => changeLanguage(e)} id="fa" value="fa">
            <img src={iranFlag} id="fa" className="w-8 h-4" />
          </button>
        </div>
      </div>

      <div className={styles["home-link"]}>
        <Link to={"/home"} onClick={handleMenu}>
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
          onClick={handleMenu}
        >
          {t("header-home")}
        </Link>
        <Link
          to={"/auth"}
          className={`${styles["nav-links"]} ${styles.item2} ${
            menuState ? styles.activeNavLinks : ``
          }`}
          onClick={handleMenu}
        >
          {t("header-signUpOrLogIn")}
        </Link>
        <Link
          to={"/about"}
          className={`${styles["nav-links"]} ${styles.item3} ${
            menuState ? styles.activeNavLinks : ``
          }`}
          onClick={handleMenu}
        >
          {t("header-yogaWithMohadese")}
        </Link>
        <Link
          to={"/ticket"}
          className={`${styles["nav-links"]} ${styles.item4} ${
            menuState ? styles.activeNavLinks : ``
          }`}
          onClick={handleMenu}
        >
          {t("header-submitRequest")}
        </Link>
        <Link
          to={"/terms"}
          className={`${styles["nav-links"]} ${styles.item5} ${
            menuState ? styles.activeNavLinks : ``
          }`}
          onClick={handleMenu}
        >
          {t("header-terms")}
        </Link>
        <Link
          to={"/contact"}
          className={`${styles["nav-links"]} ${styles.item6} ${
            menuState ? styles.activeNavLinks : ``
          }`}
          onClick={handleMenu}
        >
          {t("header-contactUs")}
        </Link>
      </div>
    </div>
  );
}
