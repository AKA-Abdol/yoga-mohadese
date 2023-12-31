import Header from "../components/Header";
import { Link, useLocation } from "react-router-dom";
import ClickToShowBox from "src/components/ui/ClickToShowBox";
import pageBackground from "src/assets/images/about2.png";
import { useState } from "react";

export default function About() {
  let location = useLocation();
  const coursesList = [
    {
      content:
        "این دوره برای پرتوجویانی که سابقه ی ورزشی یا آشنایی با یوگا ندارند، در هشت جلسه طراحی شده است.",
      data: "مبتدی",
    },
    {
      content:
        "**به زودی** اگر با مبانی یوگا آشنا هستید یا دوره ی مبتدی را گذرانده اید، این دوره برایتان مناسب هست. هر ترم هشت جلسه بوده و هر ماه سیکل جدید ارائه می شود. از تاریخ ثبت نام فقط یک ماه فرصت دارید که از این جلسات استفاده کنید.",
      data: "متوسط",
    },
    {
      content:
        "**به زودی** این دوره برای پرتوجویانی که حداقل یک سال سابقه ی یوگا دارند مناسب است. هر ترم شامل هشت جلسه با تمرین های متنوع و جدید برای سطح متوسط تا پیشرفته می باشد. فرصت استفاده از این جلسات فقط یک ماه از تاریخ ثبت نام هست.",
      data: "پیشرفته",
    },
  ];

  const [aboutState, setAboutState] = useState<"about" | "classes">("about");

  return (
    <div
      className="w-screen h-screen lg:w-[50vw] lg:mx-auto"
      style={{ backgroundImage: `linear-gradient(180deg, #FEFAF780 0, #FEFAF780 100%),url(${pageBackground})`,
              backgroundRepeat: "no-repeat",
            backgroundSize: 'cover',
          backgroundPositionX: '50%'
         }}
    >
      <Header />
      <button
        onClick={() => setAboutState("about")}
        className="text-[#58423A] text-4xl w-24 leading-[48px] fixed top-24 right-10 lg:right-[27vw] animated-bg"
      >
        درباره محدثه
      </button>
      <button
        onClick={() => setAboutState("classes")}
        className="text-[#58423A] text-4xl w-24 leading-[48px] fixed top-24 left-10 lg:left-[27vw] animated-bg"
      >
        یوگا با محدثه
      </button>
      {aboutState === "about" && (
        <p
          className={`text-justify text-[#58423A] text-sm leading-[200%] px-10 pt-60`}
        >
          محدثه تلاش می‌کند آموزش‌های یوگا را برای همه کسانی که به دنبال یک پاسخ
          کامل برای ذهن و بدنشان هستند فراهم کند. پاسخی که خود محدثه بعد از یک
          تصادف سنگین دریافت کرد. او ورزشکار سابق در رشته شنا بود تا اینکه
          حادثه‌ای مسیر زندگی‌اش را عوض کرد. بعد از این تصادف تا ۸ ماه مجبور به
          استراحت مطلق شد. در این مدت توانایی‌های فیزیکی خود را تقریبا به طور
          کامل از دست داد و به صورت معجزه آسایی از قطع نخاع در امان ماند. بعد از
          این ماجرا با یوگا آشنا شد. رشته‌ای که به گفته خودش کامل‌ترین پاسخ برای
          نیازهای روح و جسمش بود. بعد از دریافت این پرتو از نور و انرژی تصمیم
          گرفت آن را با دیگر کسانی که روح خود را تشنه این پرتو میبینند به اشتراک
          بگذارد.
        </p>
      )}
      {aboutState === "classes" && (
        <div className="flex flex-col gap-4 justify-center mx-auto mb-8 pt-52 px-10">
          {coursesList.map((item, index) => (
            <ClickToShowBox
              key={index}
              title={item.data}
              content={item.content}
              index={index}
              titleClassNames="text-center text-xl"
              contentClassNames={"text-[12px]"}
            />
          ))}
          <Link
            className="text-xl text-center py-2 px-8 bg-[#c1795f] text-[#ffffff] rounded-[32px]"
            state={{ data: location.pathname }}
            to={"/ticket"}
            preventScrollReset={false}
          >
            رزرو کلاس های حضوری
          </Link>
        </div>
      )}
    </div>
  );
}
