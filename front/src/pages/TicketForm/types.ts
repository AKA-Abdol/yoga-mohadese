import { isPersianWord, isPhoneNumber } from "src/utils/validations";
import * as Yup from "yup";
export const ticketInitialValues = {
  description: "",
  fullName: "",
  phoneNumber: "",
  type: "",
};

export const ticketFormValidationSchema = Yup.object().shape({
  description: Yup.string().max(200, "حداکثر ۲۰۰ کاراکتر"),
  fullName: Yup.string()
    .min(3, "نام شما حداقل باید 3 حرف باشد")
    .test("isAllPersian", "نام باید فارسی باشد", (val) =>
      isPersianWord(val ?? "")
    )
    .required("پر کردن این فیلد الزامی است."),
  phoneNumber: Yup.string()
    .test("isPhoneNumber", "شماره معتبر نیست", (value) =>
      isPhoneNumber(value ?? "")
    )
    .required("شماره تلفن الزامی است"),
  type: Yup.string().required("پر کردن این فیلد الزامی است."),
});
