import { useEffect, useState } from "react";
import Header from "../components/Header";
import styles from "../pages/styles/Home.module.css";
import homeIcon from "../assets/images/icon.png";
import { Link } from "react-router-dom";

export default function Home() {
  const [loadState, setLoadState] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadState(true);
    }, 2000);
  }, []);

  if (!loadState) {
    return (
      <div className={styles.load}>
        <img src={homeIcon} alt="" className={styles["loading-img"]} />
        <p className={styles.loading}>یه نفس عمیق بکش</p>
      </div>
    );
  } else {
    return (
      <div className={loadState ? `${styles.homeBody}` : `${styles.disable}`}>
        <Header />
        <div className={styles.ball}></div>
        <h2 className={styles.centerWords}>
          <span className={styles["three-words1"]}>برخیز</span>
          <span className={styles["three-words2"]}>و</span>
          <span className={styles["three-words3"]}>بدرخش</span>
        </h2>
        <div className={styles.centerBtn}>
          <Link to={"/about"} className={styles.ywm}>
            یوگا با محدثه
          </Link>
        </div>
      </div>
    );
  }
}
