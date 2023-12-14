{
  /* <div className={`w-full ${styles.customBG}`}>
  <div onClick={handleFaqClick} className="join join-vertical m-8 bg-none">
    <div
      id="firstQ"
      className={`collapse collapse-arrow join-item ${
        isFirstQOpen ? "" : styles.customFlashing
      }`}
    >
      <input type="radio" name="my-accordion-4" />
      <div className="collapse-title text-xl font-medium">
        برای شرکت در کلاس های آنلاین چکار کنم ؟
      </div>
      <div className="collapse-content">
        <p>
          بعد از انتخاب دوره ای که می خواهید در آن شرکت کنید، از طریق راه های{" "}
          <Link style={{ textDecoration: "underline" }} to={"/contact"}>
            تماس با ما
          </Link>{" "}
          جهت پرداخت شهریه کلاس اقدام بفرمایید. سپس دسترسی به دوره در پنل
          کاربریتان باز خواهد شد.
        </p>
      </div>
    </div>
    <div className="collapse collapse-arrow join-item ">
      <input type="radio" name="my-accordion-4" />
      <div className="collapse-title text-xl font-medium">
        برای شرکت در کلاس های حضوری چکار کنم ؟
      </div>
      <div className="collapse-content">
        <p>
          با پر کردن فرم درخواست{" "}
          <Link
            style={{ textDecoration: "underline" }}
            state={{ data: location.pathname }}
            to={"/ticket"}
          >
            رزرو کلاس های حضوری
          </Link>{" "}
          ، مسئول ثبت نام در زمان ثبت نام ترم جدید به شما پیغام داده و
          راهنماییتان می کنند.
        </p>
      </div>
    </div>
    <div className="collapse collapse-arrow join-item">
      <input type="radio" name="my-accordion-4" />
      <div className="collapse-title text-xl font-medium">
        کلاس های حضوری در کدام محدوده برگزار می شوند ؟
      </div>
      <div className="collapse-content">
        <p>تهران، نیاوران.</p>
      </div>
    </div>
    <div className="collapse collapse-arrow join-item">
      <input type="radio" name="my-accordion-4" />
      <div className="collapse-title text-xl font-medium">
        کلاس‌ها آنلاین به صورت زنده پخش می‌شوند ؟
      </div>
      <div className="collapse-content">
        <p>
          خیر، به علت محدودیت‌ها و مشکلات اینترنت برای استریم کلاس‌ها و زندگی پر
          مشغله کنونی، برای شما پرتوجویان فرصتی فراهم شده است تا بتوانید در هر
          زمان که مایل هستید کلاس‌ها را تماشا کنید. به همین جهت کل جلسات از همان
          ابتدا در اختیارتان قرار می گیرد و تا پایان ترم فرصت دارید که از این
          جلسات بهره ببرید.
        </p>
      </div>
    </div>
    <div className="collapse collapse-arrow join-item">
      <input type="radio" name="my-accordion-4" />
      <div className="collapse-title text-xl font-medium">
        اگر در فرصت یک ترم نتوانم از جلسات استفاده کنم، چی می شود ؟
      </div>
      <div className="collapse-content">
        <p>
          بعد از پنج هفته، دسترسی شما به ویدیوها قطع شده و امکان عودت وجه یا
          انتقال جلسات وجود ندارد. باید طوری برنامه ریزی بفرمایید که بتوانید به
          طور میانگین دو جلسه در هفته تمرین کنید.
        </p>
      </div>
    </div>
    <div className="collapse collapse-arrow join-item">
      <input type="radio" name="my-accordion-4" />
      <div className="collapse-title text-xl font-medium">
        امکان تغییر سطح بعد از ثبت نام و شروع دوره وجود دارد ؟
      </div>
      <div className="collapse-content">
        <p>
          بله، تا قبل از ۴۸ ساعت اگر احساس کردید کلاس برایتان سخت یا آسان هست،
          می توانید سطح کلاستان را با هماهنگی با ادمین صفحه تغییر دهید.
        </p>
      </div>
    </div>
    <div className="collapse collapse-arrow join-item">
      <input type="radio" name="my-accordion-4" />
      <div className="collapse-title text-xl font-medium">
        امکان انصراف از دوره وجود دارد ؟
      </div>
      <div className="collapse-content">
        <p>
          بله، در صورت انصراف تا ۴۸ ساعت، کل مبلغ شهریه به شما عودت داده می شود.
          بعد از ۴۸ ساعت، امکان انصراف وجود ندارد و مسئولیت استفاده نکردن از
          جلسات به عهده ی شرکت کننده می باشد.
        </p>
      </div>
    </div>
    <div className="collapse collapse-arrow join-item">
      <input type="radio" name="my-accordion-4" />
      <div className="collapse-title text-xl font-medium">
        مدت زمان کلاس ها و تعداد جلسات هر دوره چقدر است ؟
      </div>
      <div className="collapse-content">
        <p>هر جلسه کلاس یک ساعت و هر دوره شامل هشت جلسه در ماه می‌باشد.</p>
      </div>
    </div>
    <div className="collapse collapse-arrow join-item">
      <input type="radio" name="my-accordion-4" />
      <div className="collapse-title text-xl font-medium">
        به چه وسایلی نیاز دارم ؟
      </div>
      <div className="collapse-content">
        <p>
          یک عدد مت یوگا (زیر انداز) با ضخامت شش میلی متر. یک عدد کمر بند به طول
          سه متر. دو عدد آجر یوگا. یک عدد پتو کوچک یا حوله.
        </p>
      </div>
    </div>
    <div className="collapse collapse-arrow join-item">
      <input type="radio" name="my-accordion-4" />
      <div className="collapse-title text-xl font-medium">
        در صورت داشتن آسیب فیریکی می توانم در کلاس شرکت کنم ؟
      </div>
      <div className="collapse-content">
        <p>
          اولویت نظر پزشکتان است. با تأیید پزشک اگر آسیب جدی هست، فقط کلاس حضوری
          جایز می باشد.
        </p>
      </div>
    </div>
    <div className="collapse collapse-arrow join-item">
      <input type="radio" name="my-accordion-4" />
      <div className="collapse-title text-xl font-medium">
        در هر سطح چه مدت باید بمانیم تا به حرکات مسلط بشیم ؟
      </div>
      <div className="collapse-content">
        <p>
          با توجه به متفاوت بودن پیشینه ی ورزشی، میزان تمرین، ژنتیک و علاقه ی هر
          فرد، متغیر هست. معمولا بین چند ماه تا یک سال تمرین مداوم لازم است تا
          حرکات در بدن شما بنشینند.
        </p>
      </div>
    </div>
  </div>
</div>;
 */
}

[
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
