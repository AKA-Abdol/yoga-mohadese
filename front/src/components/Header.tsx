import { useState } from "react";
import homeIcon from "../assets/images/icon.png";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function Header() {
  const [menuState, setMenuState] = useState(false);
  const [showVorood, setShowVorood] = useState(true);
  const { t } = useTranslation();

  function handleMenu() {
    setMenuState(!menuState);
    setShowVorood(!showVorood);
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
          {t(["header-signIn"])}
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
          {t(["header-home"])}
        </Link>
        <Link
          to={"/auth"}
          className={`${styles["nav-links"]}  ${
            menuState ? styles.activeNavLinks : ``
          }`}
          onClick={handleMenu}
        >
          {t(["header-signUpOrLogIn"])}
        </Link>
        <Link
          to={"/about"}
          className={`${styles["nav-links"]}  ${
            menuState ? styles.activeNavLinks : ``
          }`}
          onClick={handleMenu}
        >
          {t(["header-yogaWithMohadese"])}
        </Link>
        <Link
          to={"/ticket"}
          className={`${styles["nav-links"]}  ${
            menuState ? styles.activeNavLinks : ``
          }`}
          onClick={handleMenu}
        >
          {t(["header-submitRequest"])}
        </Link>
        <Link
          to={"/terms"}
          className={`${styles["nav-links"]}  ${
            menuState ? styles.activeNavLinks : ``
          }`}
          onClick={handleMenu}
        >
          {t(["header-terms"])}
        </Link>
        <Link
          to={"/contact"}
          className={`${styles["nav-links"]}  ${
            menuState ? styles.activeNavLinks : ``
          }`}
          onClick={handleMenu}
        >
          {t(["header-contactUs"])}
        </Link>
      </div>
    </div>
  );
}
