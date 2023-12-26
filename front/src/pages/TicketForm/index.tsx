import { useFormik } from "formik";
import { FC, useEffect, useState } from "react";
import Button from "src/components/ui/Button";
import Input from "src/components/ui/Input";
import TextArea from "src/components/ui/TextArea";
import { ticketFormValidationSchema, ticketInitialValues } from "./types";
import Select from "src/components/ui/Select";
import {
  TICKET_TYPE_NAMES,
  TICKET_TYPE_VALUES,
  Ticket,
} from "src/types/tickets";
import { isError, useMutation } from "@tanstack/react-query";
import api from "src/services";
import { TICKET_URL, localTicket2Api } from "./api";
import Header from "src/components/Header";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { error } from "console";
import { getNumberFromMessage } from "src/utils/convertors";

const TicketForm: FC = () => {
  const location = useLocation();
  useEffect(() => {
    const historyPath = location.state?.data;
    if (historyPath && historyPath === "/auth") {
      formik.setValues((prevState) => ({
        ...prevState,
        type: "forget-password",
      }));
    } else if (historyPath && historyPath === "/about") {
      formik.setValues((prevState) => ({
        ...prevState,
        type: "onsite-class",
      }));
    } else {
      formik.setValues((prevState) => ({
        ...prevState,
        type: "technical-issue",
      }));
    }
  }, [location.state]);

  const formik = useFormik({
    initialValues: ticketInitialValues,
    onSubmit: (values) => {
      mutation.mutate(values as Ticket);
    },
    validationSchema: ticketFormValidationSchema,
    validateOnChange: false,
  });
  const mutation = useMutation(api.post(TICKET_URL, localTicket2Api));
  if (mutation.isSuccess) {
    mutation.reset();
    formik.setValues(ticketInitialValues);
    toast.success("درخواست شما ارسال شد. با شما در ارتباط خواهیم بود.");
  }

  useEffect(() => {
    if (mutation.isError) {
      {
        const { statusCode, message, error } = mutation.error as {
          statusCode: number;
          message: string;
          error: string;
        };
        if (statusCode !== 400) {
          toast.error(`${message} لطفا دقایقی دیگر تلاش کنید.`);
        } else if (statusCode === 400) {
          toast.error("متاسفانه اکانتی با این  شماره ساخته نشده است.");
        }
      }
    }
  }, [mutation.isError]);

  return (
    <main className={`w-full h-full px-lg py-sm flex justify-center`}>
      <Header />
      <ToastContainer position="top-center" rtl={true} theme="light" />
      <form
        className="w-full h-fit mt-24 lg:w-1/2"
        onSubmit={formik.handleSubmit}
      >
        <div
          className="w-full h-full flex flex-col justify-center space-y-md lg:space-y-lg"
          style={{ direction: "ltr" }}
        >
          <Input
            onChange={formik.handleChange}
            placeholder="نام و نام خانوادگی"
            className="text-center w-full input-primary-theme"
            id="fullName"
            name="fullName"
            error={formik.errors.fullName}
            value={formik.values.fullName}
          />
          <Input
            onChange={formik.handleChange}
            placeholder="شماره تلفن"
            className="text-center w-full input-primary-theme"
            id="phoneNumber"
            name="phoneNumber"
            value={formik.values.phoneNumber}
            error={formik.errors.phoneNumber}
          />
          <Select
            optionTexts={TICKET_TYPE_NAMES}
            options={TICKET_TYPE_VALUES}
            onChange={formik.handleChange}
            value={formik.values.type}
            id="type"
            name="type"
            placeholder={`نوع درخواست خود را انتخاب کنید`}
            error={formik.errors.type}
            classnames="text-center"
            optionsClassnames="text-center"
          />
          <TextArea
            onChange={formik.handleChange}
            placeholder="توضیحات"
            className="text-center w-full input-primary-theme text-le"
            id="description"
            name="description"
            error={formik.errors.description}
            value={formik.values.description}
          />
          <div className="w-full flex flex-row justify-around">
            <Button type="submit" className={"w-36 md:w-64 btn-primary-theme"}>
              {mutation.isLoading ? (
                <span className="loading loading-infinity loading-lg" />
              ) : (
                "ارسال"
              )}
            </Button>
          </div>
        </div>
      </form>
    </main>
  );
};

export default TicketForm;
