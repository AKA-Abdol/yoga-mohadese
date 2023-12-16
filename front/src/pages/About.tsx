import { useState, useEffect } from "react";
import Header from "../components/Header";
import styles from "./styles/About.module.css";
import MultiBtn, { MultiBtnContentPair } from "../components/MultiBtn";
import img1 from "../assets/images/about-img.jpg";
import { Link, useLocation } from "react-router-dom";

export default function About() {
  const [isFirstQOpen, setIsFirstQOpen] = useState(false);
  let location = useLocation();
  const sampleList: MultiBtnContentPair[] = [
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

  const handleFaqClick = () => {
    setIsFirstQOpen(true);
  };

  const [imgSize, setImgSize] = useState<number>(50);
  const [scrollPercent, setScrollPercent] = useState<number>(0);

  /* SCROLL PERCENTAGE CALCULATOR */
  useEffect(() => {
    const handleScroll = () => {
      const scrollableHeight = window.innerHeight;
      const scrolled = window.scrollY;
      const scrollPercentage = scrolled / scrollableHeight;
      setScrollPercent(scrollPercentage);
      const calculatedImgSize =
        scrollPercentage < 0.75 ? 50 + 200 * scrollPercentage : 200;
      setImgSize(calculatedImgSize);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // <div className={styles.bodyStyle}>
    <div className=" overflow-x-hidden h-[250vh] bg-[#fefaf7] ">
      <Header />
      {/* <img
        src={img1}
        style={{
          width: `${imgSize}vw`,
          right: `${(100 - imgSize) / 2}vw`,
          opacity: `${scrollPercent < 0.5 ? 1 - 0.5 * scrollPercent : 0.5}`,
          top: `${scrollPercent < 0.3333 ? 100 - scrollPercent * 300 : 0}px`,
        }}
        className={`fixed overflow-hidden transition-all duration-500`}
      /> */}
      <div className=" relative">
        <h1 className=" absolute top-20 right-12 text-4xl z-10 w-24 leading-[48px]">
          درباره محدثه
        </h1>
        <p className=" absolute mt-72 z-10 text-justify max-w-[80vw] mr-[10vw]">
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
      </div>
      <div className=" absolute w-[100vw] top-[120vh] flex items-center gap-8 flex-col">
        <h2 className=" text-2xl font-normal ">یوگا را با محدثه شروع کنید</h2>
        <div className={styles["vertical-line"]}></div>
      </div>
      <div className=" absolute w-[100vw] top-[160vh] flex justify-center">
        <MultiBtn contents={sampleList} />
      </div>
      <div className=" absolute w-[100vw] top-[235vh] flex items-center justify-center">
        <Link
          className="text-2xl py-4 px-8 bg-[#c1795f] text-[#fff] rounded-[32px]"
          state={{ data: location.pathname }}
          to={"/ticket"}
          preventScrollReset={false}
        >
          رزرو کلاس های حضوری
        </Link>{" "}
      </div>
    </div>
  );
}


