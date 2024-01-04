import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const successPayment = (props: Props) => {
  return (
    <div className="bg-[#8ca780] w-full rounded-[8px] p-4 text-justify text-white mt-10">
      <p>کلاس سطح ماه شما با موفقیت خریداری شد. از کلاس خود لذت ببرید</p>
      <br />
      <Link to={"/user/activeterms"} className=" animated-bg">برای شروع دوره خود به پنل کاربری خود بروید</Link>
      <br />
      <br />
      <Link to={"/ticket"} className=" animated-bg">در صورت داشتن سوال یا هرگونه مشکل برای ما پیام بزارید</Link>
      <br />
      <br />
      <Link to={"/terms"} className=" animated-bg">
        اگر از قوانین و تعهدات ما اطلاع ندارید میتوانید اینجا آن ها را مطالعه
        کنید.
      </Link>
    </div>
  );
};

export default successPayment;
