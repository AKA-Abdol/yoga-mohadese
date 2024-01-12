import Header from "src/components/Header";
import desktopBackground from "src/assets/images/contactUs.png";
import InstagramLogoSVG from "src/assets/svgs/InstagramLogoSVG";
import WhatsAppLogoSVG from "src/assets/svgs/WhatsAppLogoSVG";
import TelegramLogoSVG from "src/assets/svgs/TelegramLogoSVG";

export default function Contact() {
  return (
    <div className="w-screen h-screen bg-white text-brown flex flex-col items-center overflow-hidden">
      <img
        src={desktopBackground}
        className="w-[200vw] h-screen object-cover fixed top-0 lg:w-screen"
      />
      <div className="w-screen h-screen bg-[#58423a80] object-cover absolute top-0 mix-blend-multiply"></div>
      <Header />
      <div className="z-[1] flex justify-center items-center flex-col w-screen h-screen">
        <h2 className="text-2xl text-white lg:mb-12 lg:text-3xl">
          با ما در ارتباط باشید
        </h2>
        <ul className="list-none flex flex-col lg:flex-row items-center lg:items-start lg:justify-center gap-3 lg:gap-[10vw]">
          <div className="flex items-center flex-col gap-2 lg:gap-8">
            <InstagramLogoSVG />
            <li className="text-base flex justify-center items-center">
              <a
                className="text-white"
                href="https://www.instagram.com/yoga.mohadese"
              >
                صفحه اینستاگرام محدثه yoga.mohadese
              </a>
            </li>
            <li className="text-base flex justify-center items-center">
              <a
                className="text-white"
                href="https://www.instagram.com/mohadese.admin/"
              >
                صفحه اینستاگرام ادمین mohadese.admin
              </a>
            </li>
          </div>
          <div className="flex items-center flex-col gap-2 lg:gap-8">
            <TelegramLogoSVG />
            <li className="text-base flex justify-center items-center">
              <a className="text-white" href="https://t.me/yogamohadeseh">
                کانال تلگرام yogamohadeseh
              </a>
            </li>
          </div>
          <div className="flex items-center flex-col gap-2 lg:gap-8">
            <WhatsAppLogoSVG />
            <li className="text-base flex justify-center items-center text-white">
              شماره واتس‌اپ : ۰۹۲۰۶۴۹۰۵۴۹
            </li>
            <li className="text-base flex justify-center items-center text-white">
              شماره واتس‌اپ : ۰۹۰۱۹۰۸۰۶۵۴
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}
