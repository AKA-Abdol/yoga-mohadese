import { useState, useEffect } from "react";
import Header from "../components/Header";
import styles from "./styles/About.module.css";
import MultiBtn, { MultiBtnContentPair } from "../components/MultiBtn";
import img1 from "../assets/images/about-img.jpg";
import { Link, useLocation } from "react-router-dom";
import ClickToShowBox from "src/components/ui/ClickToShowBox";
import AboutBeforeScroll from "src/assets/images/AboutBeforeScroll.png";
import useScrollDirection from "src/utils/useScrollDirection";
import about from "src/assets/images/about.png";

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
  // const [scrollState, setScrollState] = useState<"up" | "down">("up");

  // const scrollDirection = useScrollDirection();
  // useEffect(() => {
  //   let nextState: "up" | "down" = scrollDirection === "up" ? "up" : "down";
  //   setScrollState(nextState);
  //   console.log(nextState);
  // }, [scrollDirection]);

  return (
    <div className="overflow-x-hidden w-screen">
      {/* <img src={img1} className=""/> */}
      <Header />
      <div className="h-screen lg:flex justify-evenly  w-screen">
        <div className="lg:w-[50vw]  lg:flex lg:flex-col lg:justify-center lg:gap-16">
          <h1 className="text-[#58423A] text-4xl w-24 leading-[48px] pt-16 pr-12 lg:p-0 lg:w-auto">
            درباره محدثه
          </h1>
          <p
            className={`mt-32 mx-10 text-justify text-[#58423A] text-sm leading-6  lg:w-[50vw] lg:leading-[200%] lg:m-0 `}
          >
            محدثه تلاش می‌کند آموزش‌های یوگا را برای همه کسانی که به دنبال یک
            پاسخ کامل برای ذهن و بدنشان هستند فراهم کند. پاسخی که خود محدثه بعد
            از یک تصادف سنگین دریافت کرد. او ورزشکار سابق در رشته شنا بود تا
            اینکه حادثه‌ای مسیر زندگی‌اش را عوض کرد. بعد از این تصادف تا ۸ ماه
            مجبور به استراحت مطلق شد. در این مدت توانایی‌های فیزیکی خود را
            تقریبا به طور کامل از دست داد و به صورت معجزه آسایی از قطع نخاع در
            امان ماند. بعد از این ماجرا با یوگا آشنا شد. رشته‌ای که به گفته خودش
            کامل‌ترین پاسخ برای نیازهای روح و جسمش بود. بعد از دریافت این پرتو
            از نور و انرژی تصمیم گرفت آن را با دیگر کسانی که روح خود را تشنه این
            پرتو میبینند به اشتراک بگذارد.
          </p>
        </div>
        <div className="hidden lg:flex lg:justify-center lg:w-[35vw]">
          <img src={about} className=" scale-[0.65]" alt="" />
        </div>
      </div>
      <div className="h-screen flex flex-col lg:items-center justify-center lg:w-[450px] lg:mx-auto px-10 lg:px-0">
        <div className=" flex items-center gap-8 flex-col">
          <h2 className=" text-2xl mb-6 font-normal text-[#58423A] lg:hidden">
            یوگا را با محدثه شروع کنید
          </h2>
        </div>
        <div className="flex flex-col gap-6 justify-center w-full ">
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
      </div>
    </div>
  );
}
