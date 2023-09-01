import { isPersianWord, isPhoneNumber } from "src/utils/validations";
import * as Yup from "yup";
export const ticketInitialValues = {
  description: "",
  fullName: "",
  phoneNumber: "",
  type: "",
};

export const ticketFormValidationSchema = Yup.object().shape({
  description: Yup.string().max(200, "حداکثر ۲۰۰ کاراکتر").required("الزامی"),
  fullName: Yup.string()
    .min(3, "حداقل ۳ کلمه")
    .test("isAllPersian", "نام باید فارسی باشد", (val) =>
      isPersianWord(val ?? "")
    )
    .required("الزامی"),
  phoneNumber: Yup.string()
    .test("isPhoneNumber", "شماره معتبر نیست", (value) =>
      isPhoneNumber(value ?? "")
    )
    .required("الزامی"),
  type: Yup.string().required("الزامی"),
});
