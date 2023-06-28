import Header from "../components/Header";
import styles from "./styles/Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.body}>
      <Header />
      <div className={styles.container}>
        <h1 className="text-6xl">با ما در ارتباط باشید</h1>
        <ul>
          <li className={styles["link-styling"]}>اینستاگرام</li>
          <li className={styles["link-styling"]}>تلگرام</li>
          <li className={styles["link-styling"]}>تلفن</li>
        </ul>
      </div>
    </div>
  );
}
