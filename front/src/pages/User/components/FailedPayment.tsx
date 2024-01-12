import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const FailedPayment = (props: Props) => {
  return (
    <div className="bg-ajori  w-full rounded-[8px] p-4 text-justify text-white mt-10">
      <p>متاسفانه دوره شما با موفقیت خریداری نشد.</p>
      <br />
      <p>
        در صورتی که از حساب شما پولی کسر شده تا 24 ساعت آینده به حساب شما
        برخواهد گشت.{" "}
      </p>
      <br />
      <Link to={"/ticket"} className=" animated-bg">
        در غیر این صورت از طریق ثبت درخواست ما را در جریان قرار دهید.
      </Link>
    </div>
  );
};

export default FailedPayment;
