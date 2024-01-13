import React from "react";
import { Link } from "react-router-dom";
import sadYogaTeacherImage from "../../../assets/images/paymentfailed.png";

type Props = {};

const FailedPayment = (props: Props) => {
  return (
    <div className="border-4 border-ajori shadow-2xl shadow-ajori w-10/12 mx-auto rounded-[8px] p-4 text-justify text-white my-10">
      <p className="text-base text-brown">
        متاسفانه دوره شما با موفقیت خریداری نشد.
      </p>
      <br />
      <p className="text-base text-brown">
        در صورتی که از حساب شما پولی کسر شده تا 24 ساعت آینده به حساب شما
        برخواهد گشت.{" "}
      </p>
      <br />
      <Link to={"/ticket"} className="text-base text-brown">
        در غیر این صورت از طریق <span className="text-ajori">ثبت درخواست</span> ما را در جریان قرار
        دهید.
      </Link>
      <img src={sadYogaTeacherImage} className="w-40 mx-auto mt-2" alt="" />

    </div>
  );
};

export default FailedPayment;
