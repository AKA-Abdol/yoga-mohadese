import Header from "src/components/Header";
import { BgCloudOne, BgCloudTwo } from "src/components/ui/BgClouds";
import ClickToShowBox from "src/components/ui/ClickToShowBox";

const faqList = [
  {
    question: "برای شرکت در کلاس های آنلاین چکار کنم ؟",
    answer:
      "بعد از انتخاب دوره ای که می خواهید در آن شرکت کنید، از طریق راه های تماس با ما جهت پرداخت شهریه کلاس اقدام بفرمایید. سپس دسترسی به دوره در پنل کاربریتان باز خواهد شد.",
  },
  {
    question: "برای شرکت در کلاس های حضوری چکار کنم ؟",
    answer:
      "با پر کردن فرم درخواست رزرو کلاس های حضوری، مسئول ثبت نام در زمان ثبت نام ترم جدید به شما پیغام داده و راهنماییتان می کنند.",
  },
  {
    question: "کلاس های حضوری در کدام محدوده برگزار می شوند ؟",
    answer: "تهران، نیاوران.",
  },
  {
    question: "کلاس‌ها آنلاین به صورت زنده پخش می‌شوند ؟",
    answer:
      "خیر، به علت محدودیت‌ها و مشکلات اینترنت برای استریم کلاس‌ها و زندگی پر مشغله کنونی، برای شما پرتوجویان فرصتی فراهم شده است تا بتوانید در هر زمان که مایل هستید کلاس‌ها را تماشا کنید. به همین جهت کل جلسات از همان ابتدا در اختیارتان قرار می گیرد و تا پایان ترم فرصت دارید که از این جلسات بهره ببرید.",
  },
  {
    question: "اگر در فرصت یک ترم نتوانم از جلسات استفاده کنم، چی می شود ؟",
    answer:
      "بعد از پنج هفته، دسترسی شما به ویدیوها قطع شده و امکان عودت وجه یا انتقال جلسات وجود ندارد. باید طوری برنامه ریزی بفرمایید که بتوانید به طور میانگین دو جلسه در هفته تمرین کنید.",
  },
  {
    question: "امکان تغییر سطح بعد از ثبت نام و شروع دوره وجود دارد ؟",
    answer:
      "بله، تا قبل از ۴۸ ساعت اگر احساس کردید کلاس برایتان سخت یا آسان هست، می توانید سطح کلاستان را با هماهنگی با ادمین صفحه تغییر دهید.",
  },
  {
    question: "امکان انصراف از دوره وجود دارد ؟",
    answer:
      "بله، در صورت انصراف تا ۴۸ ساعت، کل مبلغ شهریه به شما عودت داده می شود. بعد از ۴۸ ساعت، امکان انصراف وجود ندارد و مسئولیت استفاده نکردن از جلسات به عهده ی شرکت کننده می باشد.",
  },
  {
    question: "مدت زمان کلاس ها و تعداد جلسات هر دوره چقدر است ؟",
    answer: "هر جلسه کلاس یک ساعت و هر دوره شامل هشت جلسه در ماه می‌باشد.",
  },
  {
    question: "به چه وسایلی نیاز دارم ؟",
    answer:
      "یک عدد مت یوگا (زیر انداز) با ضخامت شش میلی متر. یک عدد کمر بند به طول سه متر. دو عدد آجر یوگا. یک عدد پتو کوچک یا حوله.",
  },
  {
    question: "در صورت داشتن آسیب فیریکی می توانم در کلاس شرکت کنم ؟",
    answer:
      "اولویت نظر پزشکتان است. با تأیید پزشک اگر آسیب جدی هست، فقط کلاس حضوری جایز می باشد.",
  },
  {
    question: "در هر سطح چه مدت باید بمانیم تا به حرکات مسلط بشیم ؟",
    answer:
      "با توجه به متفاوت بودن پیشینه ی ورزشی، میزان تمرین، ژنتیک و علاقه ی هر فرد، متغیر هست. معمولا بین چند ماه تا یک سال تمرین مداوم لازم است تا حرکات در بدن شما بنشینند.",
  },
];

const Faq = () => {
  return (
    <div className="bg-white">
      <Header />
      <BgCloudOne />
      <BgCloudTwo />
      <div className="pt-24 pb-8 px-xl flex flex-col gap-2 lg:mx-[15vw]">
        <h2 className="text-2xl text-brown text-center mb-6 z-10">
          سوالات متداول
        </h2>
        {faqList.map((item) => (
          <ClickToShowBox
            title={item.question}
            content={item.answer}
            boxClassNames="z-10 border border-brown rounded-sm py-sm"
            contentClassNames={"text-[12px] text-brown"}
            titleClassNames={"text-brown"}
          />
        ))}
      </div>
    </div>
  );
};

export default Faq;
