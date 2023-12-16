import { BgCloudOne, BgCloudTwo } from "src/components/ui/BgClouds";
import Header from "../components/Header";
import styles from "./styles/Terms.module.css";
export default function Terms() {
  return (
    <main className="w-screen min-h-screen bg-[#FEFAF7] text-[#58423A]">
      <Header />
      <BgCloudOne />
      <BgCloudTwo />
      <div className="pt-24 px-10">
        <h1 className="text-xl mb-6 z-10">قوانین و شرایط استفاده</h1>
        <ul className="flex flex-col gap-4 list-disc pr-4 z-10">
          <li className="text-sm z-10">
            پرتوجویانی که از خدمات کلاس آنلاین استفاده می‌کنند، اخلاقی و عرفی
            مجاز به ضبط، ‌دانلود، پخش کلاس‌ها و تحویل نام‌کاربری و رمز عبور خود
            به دیگران نیستند.
          </li>
          <li className="text-sm z-10">
            در هر دوره ماهانه پرتوجویان می‌توانند هر جلسه کلاس را حداکثر ۴ مرتبه
            کامل تماشا کنند. این محدودیت به منظور جلوگیری از سو استفاده‌های
            احتمالی اعمال شده است.
          </li>
          <li className="text-sm z-10">
            پرتوجویان پس از ثبت‌نام در سایت می‌توانند نام کاربری خود را به ادمین
            تحویل دهند تا دسترسی‌شان به کلاس مورد نظر بازگردد. در نظر داشته
            باشید که هر دوره از ثبت نام شامل یک ماه دسترسی به کلاس‌ها خواهد بود
            و پس از اتمام ماه دسترسی به کلاس‌ها به صورت خودکار قطع می‌شود.
          </li>
          <li className="text-sm z-10">لایسنس فونت سایت : ایران‌گرد</li>
          <li className="text-sm z-10">لایسنس طراحی سایت : R.</li>
          <li className="text-sm z-10">
            سایت و تمامی محتویات آن مشمول قانون کپی رایت است و هرگونه استفاده از
            محتوای آن بدون اطلاع به صاحب اثر مجاز نخواهد بود.
          </li>
        </ul>
      </div>
    </main>
  );
}
