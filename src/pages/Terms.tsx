import Header from "../components/Header";
import styles from "./styles/Terms.module.css";
export default function Terms() {
  return (
    <div className={styles.body}>
      <Header />
      <div className={styles.terms}>
        <h1 className="text-2xl">قوانین و شرایط استفاده</h1>
        <ul>
          <li className="text-lg mt-6">
            پرتوجویانی که از خدمات کلاس آنلاین (لینک به صحفه کلاس ها)استفاده
            می‌کننده اخلاقی و عرفی مجاز به ضبط٬ دانلود٬ پخش کلاس‌ها و تحویل
            نام‌کاربری و رمز عبور خود به دیگران نیستند.
          </li>
          <li className="text-lg mt-6">
            در هر دوره ماهانه پرتوجویان می‌توانند هر جلسه کلاس را ۴ مرتبه کامل
            تماشا کنند. این محدودیت به منظور جلوگیری از سو استفاده‌های احتمالی
            اعمال شده است.
          </li>
          <li className="text-lg mt-6">
            پرتو جویان پس از ثبت‌نام در سایت می‌توانند نام کاربری خود را به
            ادمین تحویل دهند تا دسترسی‌شان به کلاس مورد نظر بازگردد. در نظر
            داشته باشید که هر دوره از ثبت نام شامل یک ماه دسترسی به کلاس‌ها
            خواهد بود و پس از اتمام ماه دسترسی به کلاس‌ها به صورت خودکار قطع
            می‌شود.
          </li>
          <li className="text-lg mt-6">لایسنس فونت سایت : ایران‌گرد</li>
          <li className="text-lg mt-6">لایسنس طراحی سایت : R.</li>
          <li className="text-lg mt-6">
            سایت و تمامی محتویات آن مشمول قانون کپی رایت است و هرگونه استفاده از
            محتوای آن بدون اطلاع به صاحب اثر مجاز نخواهد بود.
          </li>
        </ul>
      </div>
    </div>
  );
}