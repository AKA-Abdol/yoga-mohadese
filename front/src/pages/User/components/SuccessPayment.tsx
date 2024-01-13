import React from "react";
import { Link } from "react-router-dom";
import happyYogaTeacherImage from "../../../assets/images/paymentsuccess.png";
type Props = {};

const successPayment = (props: Props) => {
  return (
    <div className="border-4 border-green shadow-2xl shadow-green w-10/12 mx-auto rounded-[8px] p-4 text-justify text-white my-10">
      <p className="text-base text-brown">
        کلاس سطح ماه شما با موفقیت خریداری شد. از کلاس خود لذت ببرید
      </p>
      <br />
      <Link to={"/user/activeterms"} className="text-base text-brown">
        برای شروع دوره خود به <span className="text-green">پنل کاربری</span> خود
        بروید
      </Link>
      <br />
      <br />
      <Link to={"/ticket"} className="text-base text-brown">
        در صورت داشتن سوال یا هرگونه مشکل برای ما{" "}
        <span className="text-green">پیام</span> بزارید
      </Link>
      <br />
      <br />
      <Link to={"/terms"} className="text-base text-brown">
        اگر از قوانین و تعهدات ما اطلاع ندارید میتوانید{" "}
        <span className="text-green">اینجا</span> آن ها را مطالعه کنید.
      </Link>
      <img src={happyYogaTeacherImage} className="w-40 mx-auto mt-2" alt="" />
    </div>
  );
};

export default successPayment;
