import styles from "./styles/Reserve.module.css";
import Header from "../components/Header";

export default function Reserve() {
  return (
    <div className={styles.body}>
    <Header />
      <div className={styles.bg}></div>
      <div className={`${styles.bg} ${styles.bg2}`}></div>
      <div className={`${styles.bg} ${styles.bg3}`}></div>
      <div className={styles.content}>
        <div className={styles.title}>
          <h1>فرم تماس</h1>
          <h2>
            جهت رزرو برای کلاس های حضوری و کسب اطلاعات بیشتر می‌توانید فرم زیر
            را برای ما ارسال کنید تا با شما تماس بگیریم.
          </h2>
        </div>

        <form action="">
          <label>نام</label>
          <input type="text" name="" id="" />
          <label>شماره تماس</label>
          <input type="text" name="" id="" />
          <label>ایمیل</label>
          <input type="text" name="" id="" />
          <label>توضیحات</label>
          <textarea name="" id="" cols={20} rows={10}></textarea>
          <button type="submit">ارسال</button>
        </form>
      </div>
    </div>
  );
}
