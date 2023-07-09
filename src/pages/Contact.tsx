import Header from "../components/Header";
import styles from "./styles/Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.body}>
      <Header />
      <div className={styles.container}>
        <h1 className="text-5xl">با ما در ارتباط باشید</h1>
        <ul className={styles.contactUL}>
          <li className={styles["link-styling"]}><a href="https://www.instagram.com/yoga.mohadese/">اینستاگرام</a></li>
          <li className={styles["link-styling"]}><a href="https://t.me/yogamohadeseh">تلگرام</a></li>
          <li className={styles["link-styling"]}>تلفن : ۰۹۲۰۶۴۹۰۵۴۹</li>
        </ul>
      </div>
    </div>
  );
}
