import Header from "../components/Header";
import styles from "../pages/styles/Home.module.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="w-screen h-screen overflow-hidden flex justify-center items-center flex-col">
      <div className={styles.bg}></div>
      <Header />
      <h2 className={`${styles.centerWords} `}>
        <span className={styles["three-words1"]}>برخیز</span>
        <span className={styles["three-words2"]}>و</span>
        <span className={styles["three-words3"]}>بدرخش</span>
      </h2>
      <Link to={"/about"} className={styles.centerBtn}>
        شروع کنید
      </Link>
      <footer className="z-10">
        <a
          className="w-20 h-20 fixed bottom-2 left-2 border-2 border-[#ffffff80] rounded-sm bg-[#ffffff50]"
          referrerPolicy="origin"
          target="_blank"
          href="https://trustseal.enamad.ir/?id=434829&Code=6tNi2vHC0VJSc5EjQb1Nwskrjs45M2jD"
        >
          <img
            referrerPolicy="origin"
            src="https://trustseal.enamad.ir/logo.aspx?id=434829&Code=6tNi2vHC0VJSc5EjQb1Nwskrjs45M2jD"
            alt=""
            className="w-20 h-20 cursor-pointer rounded-sm"
          />
        </a>
      </footer>
    </main>
  );
}
