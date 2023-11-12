import { useState } from "react";
import Header from "../components/Header";
import styles from "./styles/About.module.css";
import MultiBtn, { MultiBtnContentPair } from "../components/MultiBtn";
import img1 from "../assets/images/about-img.jpg";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  const [isFirstQOpen, setIsFirstQOpen] = useState(false);
  let location = useLocation();
  const sampleList: MultiBtnContentPair[] = [
    {
      content: `${t(["pagesAbout1"])}`,
      data: `${t(["pagesAbout2"])}`,
    },
    {
      content: `${t(["pagesAbout3"])}`,
      data: `${t(["pagesAbout4"])}`,
    },
    {
      content: `${t(["pagesAbout5"])}`,
      data: `${t(["pagesAbout6"])}`,
    },
  ];

  const handleFaqClick = () => {
    setIsFirstQOpen(true);
  };

  return (
    <div className={styles.bodyStyle}>
      <Header />
      <div className={styles.content}>
        <h1 className={styles.h1styles}>{t(["pagesAbout0"])}</h1>
        <div className={styles["img1-container"]}>
          <img src={img1} alt="" className={styles.img1} />
        </div>
        <div className={styles["text-container"]}>
          <p className={styles.justifier}>{t(["pagesAbout7"])}</p>
        </div>
        <div className={styles["line-container"]}>
          <div className={styles["vertical-line"]}></div>
        </div>
      </div>
      <div className={styles.titleText}>
        <div className={styles.parallax}>
          <h2 className={styles.h2Styles}>{t(["pagesAbout8"])}</h2>
        </div>
      </div>

      <div className={styles.classContent}>
        <div className={styles.container1}>
          <div className={styles["arrow-container"]}>
            <div className={`${styles.arrow} ${styles["arrow-first"]}`}></div>
            <div className={`${styles.arrow} ${styles["arrow-second"]}`}></div>
          </div>
        </div>

        <hr className={styles.divider} />

        <MultiBtn contents={sampleList} />
      </div>
      <div className={`${styles.container3}`}>
        <Link
          state={{ data: location.pathname }}
          to={"/ticket"}
          preventScrollReset={false}
        >
          {t(["pagesAbout01"])}
        </Link>{" "}
      </div>
      {/* FAQ */}
      <div className={`w-full ${styles.customBG}`}>
        <div
          onClick={handleFaqClick}
          className="join join-vertical m-8 bg-none"
        >
          <div
            id="firstQ"
            className={`collapse collapse-arrow join-item ${
              isFirstQOpen ? "" : styles.customFlashing
            }`}
          >
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              {t(["pagesAbout91"])}
            </div>
            <div className="collapse-content">
              <p>
                {t(["pagesAbout92"])}{" "}
                <Link style={{ textDecoration: "underline" }} to={"/contact"}>
                  {t(["pagesAbout93"])}
                </Link>{" "}
                {t(["pagesAbout94"])}
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item ">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              {t(["pagesAbout10"])}
            </div>
            <div className="collapse-content">
              <p>
                {t(["pagesAbout11"])}{" "}
                <Link
                  style={{ textDecoration: "underline" }}
                  state={{ data: location.pathname }}
                  to={"/ticket"}
                >
                  {t(["pagesAbout12"])}
                </Link>{" "}
                {t(["pagesAbout13"])}
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              {t(["pagesAbout14"])}
            </div>
            <div className="collapse-content">
              <p>{t(["pagesAbout15"])}</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              {t(["pagesAbout16"])}
            </div>
            <div className="collapse-content">
              <p>{t(["pagesAbout17"])}</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              {t(["pagesAbout18"])}
            </div>
            <div className="collapse-content">
              <p>{t(["pagesAbout19"])}</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              {t(["pagesAbout20"])}
            </div>
            <div className="collapse-content">
              <p>{t(["pagesAbout21"])}</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              {t(["pagesAbout22"])}
            </div>
            <div className="collapse-content">
              <p>{t(["pagesAbout23"])}</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              {t(["pagesAbout24"])}
            </div>
            <div className="collapse-content">
              <p>{t(["pagesAbout25"])}</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              {t(["pagesAbout260"])}
            </div>
            <div className="collapse-content">
              <p>{t(["pagesAbout26"])}</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              {t(["pagesAbout27"])}
            </div>
            <div className="collapse-content">
              <p>{t(["pagesAbout28"])}</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              {t(["pagesAbout29"])}
            </div>
            <div className="collapse-content">
              <p>{t(["pagesAbout30"])}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
