import Header from "../components/Header";
import styles from "../pages/styles/Home.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className=" bg-[#b5dda4] w-full h-full overflow-hidden flex jus items-center flex-col">
      <div className={styles.bg}></div>
      <Header />
      <h2
        className={`my-auto z-10 flex justify-center items-center flex-col text-[#034732] ${styles.openingAnimation}`}
      >
        <span className={styles["three-words1"]}>{t("pagesHome1")}</span>
        <span className={styles["three-words2"]}>{t("pagesHome2")}</span>
        <span className={styles["three-words3"]}>{t("pagesHome3")}</span>
      </h2>
      <div className={styles.centerBtn}>
        <Link to={"/about"} className={styles.ywm}>
          {t("pagesHome4")}
        </Link>
      </div>
    </div>
  );
}
