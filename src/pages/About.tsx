import { useState } from "react";
import Header from "../components/Header";
import styles from "./styles/About.module.css";
import MultiBtn, { MultiBtnContentPair } from "../components/MultiBtn";
import img1 from "../assets/images/about-img.png";

export default function About() {
  const sampleList: MultiBtnContentPair[] = [
    {
      content:
        "محتوای متنی هر کلاس بهصورت جداگانه اینجا قرار خواهد گرفات انتظار میرود هر کلاس تقریبا ۵ خ محتوا داشته با خواهد گرفات انتظار میرود هر کلاس تقریبا ۵ خ محتوا داشته باشد محتوای متنی هر کلاس بهصورت جداگانه اینجا قرار خواهد گرفات انتظار میرود هر کلاس تقریبا ۵ خ محتوا داشته باشد",
      data: "مبتدی",
    },
    {
      content:
        "محتوای متنی هر کلاس بهصورت جداگانه اینجا قرار خواهد گرفات انتظار میرود هر کلاس تقریبا ۵ خ محتوا داشته با خواهد گرفات انتظار میرود هر کلاس تقریبا ۵ خ محتوا داشته باشد محتوای متنی هر کلاس بهصورت جداگانه اینجا قرار خواهد گرفات انتظار میرود هر کلاس تقریبا ۵ خ محتوا داشته باشد",
      data: "متوسط",
    },
    {
      content:
        "محتوای متنی هر کلاس بهصورت جداگانه اینجا قرار خواهد گرفات انتظار میرود هر کلاس تقریبا ۵ خ محتوا داشته با خواهد گرفات انتظار میرود هر کلاس تقریبا ۵ خ محتوا داشته باشد محتوای متنی هر کلاس بهصورت جداگانه اینجا قرار خواهد گرفات انتظار میرود هر کلاس تقریبا ۵ خ محتوا داشته باشد",
      data: "پیشرفته",
    },
  ];

  return (
    <div className={styles.bodyStyle}>
      <Header />
      <div className={styles.content}>
        <h1>درباره محدثه</h1>
        <div className={styles["img1-container"]}>
          <img src={img1} alt="" className={styles.img1} />
        </div>
        <div className={styles["text-container"]}>
          <p className={styles.justifier}>
            محدثه تلاش می‌کند آموزش‌های یوگا را برای همه کسانی که به دنبال یک
            پاسخ کامل برای ذهن و بدنشان هستند فراهم کند. پاسخی که خود محدثه بعد
            از یک تصادف سنگین دریافت کرد. او ورزشکار سابق در رشته شنا بود تا
            اینکه حادثه‌ای مسیر زندگی‌اش را عوض کرد. بعد از این تصادف تا ۱۲ ماه
            مجبور به استراحت مطلق شد. در این مدت توانایی‌های فیزیکی خود را
            تقریبا به طور کامل از دست داد و به صورت معجزه آسایی از قطع نخاع در
            امان ماند. بعد از این ماجرا با یوگا آشنا شد. رشته‌ای که به گفته خودش
            کامل‌ترین پاسخ برای نیازهای روح و جسمش بود. بعد از دریافت این پرتو
            از نور و انرژی تصمیم گرفت آن را با دیگر کسانی که روح خود را تشنه این
            پرتو میبینند به اشتراک بگذارد.
          </p>
        </div>
        <div className={styles["line-container"]}>
          <div className={styles["vertical-line"]}></div>
        </div>
      </div>
      <div className={styles.titleText}>
        <div className={styles.parallax}>
          <h2>یوگا را با محدثه شروع کنید</h2>
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
      <div
        className={`${styles.container3} bg-gradient-to-r from-lime-900 via-green-900 to-lime-900`}
      >
        <a href="">رزرو کلاس های حضوری</a>
      </div>
      {/* FAQ */}
      <div className="join join-vertical w-full">
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" checked={true} />
          <div className="collapse-title text-xl font-medium">
            کلاس‌ها به صورت آنلاین برگزار می‌شوند یا حضوری ؟
          </div>
          <div className="collapse-content">
            <p>
              هر دو صورت برای اطلاع از شرایط کلاس(لینک به کلاس ها) های آنلاین یا
              کلاس‌های (لینک به رزرو) کلیک کنید
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            کلاس‌ها به صورت زنده پخش می‌شوند ؟
          </div>
          <div className="collapse-content">
            <p>
              خیر به علت محدودیت های و مشکلات اینترنت برای استریم کلاس‌ها و
              زندگی پر مشغله کنونی برای شما پرتوجویان فرصتی فراهم شده است تا
              بتوانید در هر زمان که مایل هستید کلاس‌ها را تماشا کنید. البته
              ویدیو ها کلاس ها به صورت ماهانه ضبط و بارگذاری می‌شوند و همگی به
              روز و حاوی آخرین نکات استاد هستند.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            مدت زمان کلاس ها و تعداد جلسات هر دوره چقدر است ؟
          </div>
          <div className="collapse-content">
            <p>
              هر جلسه کلاس ۱ ساعت می‌باشد و هر دوره شامل ۸ جلسه در ماه می‌باشد.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
