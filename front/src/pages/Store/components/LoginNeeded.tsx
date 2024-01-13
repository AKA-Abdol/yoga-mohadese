import React from "react";
import { Link } from "react-router-dom";
import calmYogaTeacherImage from "../../../assets/images/storeshoploginNeeded.png";
type Props = {};

const LoginNeeded = (props: Props) => {
  return (
    <div className="w-full flex items-center justify-center px-12 flex-col">
      <Link to="/auth" className=" text-center text-brown">
        لطفا برای مشاهده سبد خرید
        <span className=" text-ajori"> وارد </span> حساب کاربری خود شوید.
      </Link>
      <img src={calmYogaTeacherImage} className="w-80" />
    </div>
  );
};

export default LoginNeeded;
