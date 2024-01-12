import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "src/services";
import IPaymentResult from "../api.types";
import Loading from "src/components/ui/Loading";
import SuccessPayment from "../components/SuccessPayment";
import FailedPayment from "../components/FailedPayment";

type Props = {};

const PaymentResult = (props: Props) => {
  const { paymentId } = useParams<{ paymentId: string }>();
  
  console.log(paymentId);
  const { data, isError, isLoading, isSuccess } = useQuery({
    queryKey: ["paymentResult"],
    queryFn: api.get<IPaymentResult>(`payments/${paymentId}`),
  });
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {data?.status === "successful" ? (
            <SuccessPayment />
          ) : (
            <FailedPayment />
          )}
        </>
      )}
    </div>
  );
};

export default PaymentResult;
