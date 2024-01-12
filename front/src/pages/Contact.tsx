import { useState } from "react";
import Header from "src/components/Header";
import desktopBackground from "src/assets/images/contactUs.png";

export default function Contact() {
  return (
    <div className="w-screen h-screen bg-[#FEFAF7] text-[#58423A] flex flex-col items-center overflow-x-hidden">
      <img
        src={desktopBackground}
        className="w-[200vw] h-[100vh] object-cover fixed top-0 lg:w-screen lg:h-screen"
      />
      <div className="w-full h-[100vh] bg-[#58423a80] object-cover absolute top-0 mix-blend-multiply"></div>
      <Header />
      <div className="flex justify-center items-center flex-col w-[100vw] h-[100vh]">
        <h2 className="text-2xl text-[#FEFAF7] lg:mb-12">با ما در ارتباط باشید</h2>
        <ul className="list-none flex flex-col lg:flex-row items-center lg:items-start lg:justify-center gap-3 lg:gap-[10vw]">
          <div className="flex items-center flex-col gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
              className="mt-12"
            >
              <path
                d="M22.395 7.0501C22.0886 7.0501 21.789 7.14098 21.5342 7.31123C21.2794 7.48149 21.0808 7.72348 20.9635 8.0066C20.8463 8.28973 20.8156 8.60127 20.8754 8.90183C20.9351 9.2024 21.0827 9.47848 21.2994 9.69518C21.5161 9.91187 21.7922 10.0594 22.0928 10.1192C22.3933 10.179 22.7049 10.1483 22.988 10.0311C23.2711 9.91378 23.5131 9.71519 23.6834 9.46038C23.8536 9.20558 23.9445 8.906 23.9445 8.59955C23.9445 8.18861 23.7812 7.7945 23.4907 7.50393C23.2001 7.21335 22.806 7.0501 22.395 7.0501ZM28.3346 10.1748C28.3095 9.10351 28.1088 8.04356 27.7406 7.03719C27.4123 6.17612 26.9013 5.39642 26.2428 4.75175C25.6035 4.08991 24.8219 3.58214 23.9574 3.26686C22.9537 2.88745 21.8926 2.68221 20.8198 2.65999C19.4511 2.58252 19.0121 2.58252 15.5 2.58252C11.9879 2.58252 11.5489 2.58252 10.1802 2.65999C9.1074 2.68221 8.04627 2.88745 7.04256 3.26686C6.17962 3.58533 5.39877 4.09267 4.75712 4.75175C4.09528 5.39113 3.58751 6.17265 3.27223 7.03719C2.89282 8.0409 2.68758 9.10203 2.66536 10.1748C2.58789 11.5435 2.58789 11.9825 2.58789 15.4946C2.58789 19.0067 2.58789 19.4457 2.66536 20.8144C2.68758 21.8872 2.89282 22.9483 3.27223 23.952C3.58751 24.8166 4.09528 25.5981 4.75712 26.2375C5.39877 26.8965 6.17962 27.4039 7.04256 27.7224C8.04627 28.1018 9.1074 28.307 10.1802 28.3292C11.5489 28.4067 11.9879 28.4067 15.5 28.4067C19.0121 28.4067 19.4511 28.4067 20.8198 28.3292C21.8926 28.307 22.9537 28.1018 23.9574 27.7224C24.8219 27.4071 25.6035 26.8993 26.2428 26.2375C26.9042 25.5952 27.4157 24.8148 27.7406 23.952C28.1088 22.9457 28.3095 21.8857 28.3346 20.8144C28.3346 19.4457 28.4121 19.0067 28.4121 15.4946C28.4121 11.9825 28.4121 11.5435 28.3346 10.1748ZM26.0104 20.6594C26.001 21.4791 25.8526 22.2911 25.5714 23.0611C25.3652 23.623 25.0341 24.1308 24.603 24.546C24.1842 24.9727 23.6775 25.3032 23.1181 25.5144C22.3482 25.7956 21.5361 25.944 20.7165 25.9534C19.4253 26.018 18.9475 26.0309 15.5516 26.0309C12.1557 26.0309 11.678 26.0309 10.3868 25.9534C9.53574 25.9693 8.68833 25.8383 7.88185 25.566C7.347 25.344 6.86354 25.0144 6.46152 24.5976C6.03295 24.1828 5.70596 23.6747 5.50602 23.1127C5.19078 22.3318 5.01594 21.5012 4.98954 20.6594C4.98954 19.3682 4.91207 18.8905 4.91207 15.4946C4.91207 12.0987 4.91207 11.621 4.98954 10.3298C4.99533 9.49185 5.14829 8.66146 5.44146 7.87648C5.66878 7.33147 6.01768 6.84565 6.46152 6.45615C6.8538 6.01219 7.33862 5.65959 7.88185 5.42318C8.6689 5.13917 9.49844 4.99073 10.3351 4.98417C11.6264 4.98417 12.1041 4.9067 15.5 4.9067C18.8959 4.9067 19.3736 4.9067 20.6648 4.98417C21.4844 4.99357 22.2965 5.14201 23.0665 5.42318C23.6532 5.64094 24.1799 5.99499 24.603 6.45615C25.0261 6.85278 25.3568 7.3377 25.5714 7.87648C25.8584 8.66274 26.0069 9.49278 26.0104 10.3298C26.075 11.621 26.0879 12.0987 26.0879 15.4946C26.0879 18.8905 26.075 19.3682 26.0104 20.6594ZM15.5 8.87071C14.1904 8.87326 12.9111 9.26391 11.8235 9.99331C10.7359 10.7227 9.88887 11.7581 9.38951 12.9687C8.89014 14.1793 8.7608 15.5107 9.01784 16.7948C9.27489 18.0788 9.90677 19.2579 10.8336 20.183C11.7605 21.108 12.9408 21.7376 14.2254 21.9922C15.5099 22.2467 16.8411 22.1148 18.0507 21.613C19.2603 21.1113 20.2941 20.2623 21.0214 19.1733C21.7486 18.0843 22.1368 16.8041 22.1368 15.4946C22.1385 14.6232 21.9679 13.76 21.6348 12.9547C21.3017 12.1495 20.8127 11.418 20.1959 10.8024C19.5791 10.1868 18.8467 9.69925 18.0408 9.36773C17.2349 9.03621 16.3714 8.8673 15.5 8.87071ZM15.5 19.7943C14.6496 19.7943 13.8183 19.5422 13.1112 19.0697C12.4041 18.5972 11.853 17.9257 11.5275 17.14C11.2021 16.3544 11.117 15.4898 11.2829 14.6558C11.4488 13.8217 11.8583 13.0556 12.4596 12.4542C13.0609 11.8529 13.8271 11.4434 14.6611 11.2775C15.4952 11.1116 16.3597 11.1967 17.1454 11.5222C17.9311 11.8476 18.6026 12.3987 19.0751 13.1058C19.5475 13.8129 19.7997 14.6442 19.7997 15.4946C19.7997 16.0593 19.6885 16.6184 19.4724 17.14C19.2563 17.6617 18.9396 18.1357 18.5403 18.535C18.1411 18.9342 17.6671 19.251 17.1454 19.467C16.6237 19.6831 16.0646 19.7943 15.5 19.7943Z"
                fill="#FEFAF7"
              />
            </svg>
            <li className="text-base flex justify-center items-center">
              <a
                className="text-[#FEFAF7]"
                href="https://www.instagram.com/yoga.mohadese"
              >
                صفحه اینستاگرام محدثه yoga.mohadese
              </a>
            </li>
            <li className="text-base flex justify-center items-center">
              <a
                className="text-[#FEFAF7]"
                href="https://www.instagram.com/mohadese.admin/"
              >
                صفحه اینستاگرام ادمین mohadese.admin
              </a>
            </li>
          </div>
          <div className="flex items-center flex-col gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
              className="mt-12"
            >
              <path
                d="M28.7648 3.13457C28.3971 2.82872 27.9535 2.62828 27.481 2.55456C27.0084 2.48085 26.5248 2.53662 26.0815 2.71594L2.94185 12.0583C2.44699 12.2619 2.02576 12.6112 1.73405 13.0598C1.44235 13.5084 1.29397 14.0351 1.3086 14.57C1.32324 15.1049 1.50021 15.6227 1.81602 16.0547C2.13182 16.4866 2.57153 16.8124 3.07678 16.9886L7.75741 18.6165L10.3663 27.2439C10.4018 27.3591 10.4532 27.4688 10.5192 27.5697C10.5292 27.5852 10.5433 27.5968 10.5539 27.6118C10.6301 27.7181 10.7222 27.8121 10.8269 27.8904C10.8567 27.9131 10.8852 27.9344 10.9171 27.9546C11.0396 28.0359 11.1754 28.0954 11.3183 28.1303L11.3336 28.1316L11.3422 28.1353C11.4281 28.1528 11.5156 28.1617 11.6033 28.1618C11.6117 28.1618 11.6192 28.1578 11.6275 28.1576C11.7598 28.1553 11.891 28.1325 12.0163 28.0901C12.0455 28.0801 12.0704 28.0635 12.0987 28.0515C12.1922 28.0128 12.2807 27.9632 12.3625 27.9036C12.428 27.8484 12.4935 27.7933 12.5591 27.7381L16.0481 23.8859L21.252 27.9172C21.7102 28.2738 22.2741 28.4677 22.8547 28.4682C23.4631 28.4674 24.0527 28.2575 24.5247 27.8737C24.9967 27.4898 25.3224 26.9553 25.4472 26.3599L29.66 5.67916C29.7555 5.21371 29.7226 4.73105 29.5649 4.28284C29.4072 3.83462 29.1307 3.43771 28.7648 3.13457ZM12.1152 19.0275C11.9362 19.2059 11.8138 19.4331 11.7634 19.6807L11.3638 21.6227L10.3514 18.2745L15.6005 15.5411L12.1152 19.0275ZM22.8345 25.8757L16.6849 21.1118C16.4276 20.913 16.1049 20.8185 15.781 20.847C15.4571 20.8755 15.1558 21.025 14.9372 21.2657L13.8198 22.499L14.2147 20.5797L23.3603 11.4341C23.5786 11.2161 23.7116 10.9271 23.7353 10.6195C23.7589 10.3119 23.6715 10.006 23.4891 9.75721C23.3066 9.50844 23.0411 9.33324 22.7406 9.26335C22.4401 9.19346 22.1245 9.2335 21.851 9.37622L8.72549 16.2101L3.91657 14.4503L27.1306 5.1634L22.8345 25.8757Z"
                fill="#FEFAF7"
              />
            </svg>
            <li className="text-base flex justify-center items-center">
              <a className="text-[#FEFAF7]" href="https://t.me/yogamohadeseh">
                کانال تلگرام yogamohadeseh
              </a>
            </li>
          </div>
          <div className="flex items-center flex-col gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="27"
              viewBox="0 0 26 27"
              fill="none"
              className="mt-12"
            >
              <path
                d="M18.8039 15.7453C18.485 15.5852 16.9123 14.8105 16.6192 14.7046C16.3261 14.5974 16.1131 14.5445 15.9 14.8647C15.687 15.1836 15.0736 15.9054 14.8864 16.1185C14.7005 16.3315 14.5133 16.3574 14.1943 16.1972C13.2518 15.822 12.3819 15.2855 11.6235 14.6116C10.9241 13.9651 10.3245 13.2184 9.84424 12.3959C9.65831 12.0757 9.82487 11.9027 9.98498 11.7439C10.1283 11.6005 10.3052 11.3707 10.464 11.1835C10.5956 11.0218 10.7034 10.8423 10.7842 10.6502C10.8268 10.5619 10.8466 10.4644 10.8419 10.3666C10.8371 10.2687 10.808 10.1736 10.7571 10.0898C10.6771 9.92972 10.0379 8.35573 9.77193 7.71529C9.5124 7.09293 9.24899 7.17686 9.05144 7.16653C8.86551 7.15749 8.65246 7.15491 8.43941 7.15491C8.27734 7.15943 8.11796 7.19744 7.9713 7.26654C7.82464 7.33565 7.69387 7.43437 7.58721 7.55647C7.2257 7.89882 6.93946 8.31271 6.74672 8.77177C6.55398 9.23084 6.45897 9.72501 6.46773 10.2228C6.57141 11.4291 7.02512 12.5789 7.77314 13.5309C9.1443 15.5866 11.0265 17.2503 13.235 18.3587C13.8307 18.6146 14.4392 18.8396 15.0581 19.0327C15.7106 19.2308 16.4004 19.2737 17.0724 19.158C17.5175 19.0678 17.9391 18.8863 18.3104 18.625C18.6818 18.3636 18.9949 18.028 19.23 17.6395C19.4398 17.1617 19.5044 16.6328 19.416 16.1185C19.3372 15.9842 19.1242 15.9054 18.8039 15.7453ZM22.0216 4.02243C19.8265 1.82783 16.9087 0.505711 13.8113 0.302211C10.714 0.0987101 7.64829 1.0277 5.18489 2.91623C2.7215 4.80475 1.02833 7.52412 0.420605 10.568C-0.187121 13.612 0.332013 16.773 1.88136 19.4627L0.065918 26.0931L6.84993 24.3151C8.72626 25.3367 10.8286 25.8721 12.9651 25.8723H12.9703C15.5012 25.871 17.9749 25.1196 20.0789 23.713C22.1829 22.3064 23.8228 20.3077 24.7915 17.9695C25.7601 15.6313 26.0139 13.0585 25.5209 10.5761C25.0279 8.09366 23.8102 5.81307 22.0216 4.02242V4.02243ZM18.6219 22.0851C16.928 23.1469 14.9694 23.7103 12.9703 23.7108H12.9651C11.0604 23.7107 9.19087 23.1982 7.55235 22.2272L7.16369 21.9973L3.1377 23.0535L4.21199 19.1283L3.9602 18.7254C2.84272 16.9433 2.27877 14.8699 2.33965 12.7673C2.40054 10.6648 3.08354 8.62745 4.30227 6.91303C5.52101 5.19861 7.22075 3.88407 9.18656 3.13565C11.1524 2.38723 13.296 2.23853 15.3463 2.70837C17.3966 3.1782 19.2616 4.24545 20.7053 5.77518C22.1491 7.30491 23.1069 9.22841 23.4575 11.3024C23.8081 13.3765 23.5358 15.5079 22.6751 17.4272C21.8144 19.3465 20.4038 20.9675 18.6219 22.0851Z"
                fill="#FEFAF7"
              />
            </svg>
            <li className="text-base flex justify-center items-center text-[#FEFAF7]">
              شماره واتس‌اپ : ۰۹۲۰۶۴۹۰۵۴۹
            </li>
            <li className="text-base flex justify-center items-center text-[#FEFAF7]">
              شماره واتس‌اپ : ۰۹۰۱۹۰۸۰۶۵۴
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}
