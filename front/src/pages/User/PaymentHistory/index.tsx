import React, { useEffect } from "react";

type Props = {};

const PaymentHistory = (props: Props) => {
  useEffect(() => {
    console.log("we are in payment history");
  }, []);
  return <div>PaymentHistory</div>;
};

export default PaymentHistory;
