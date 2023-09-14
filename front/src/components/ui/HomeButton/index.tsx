import { FC } from "react";
import { Link } from "react-router-dom";
import homeIcon from "src/assets/images/icon.png";
import styles from "./index.module.css";

const HomeButton: FC = () => {
  return (
    <div className={styles["home-link"]}>
      <Link to={"/home"}>
        <img src={homeIcon} alt="home" className={styles["img-link"]} />
      </Link>
    </div>
  );
};

export default HomeButton;
