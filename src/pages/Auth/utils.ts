import { ValidationError } from "yup";
import { ISignupFormValues, SignupFormValidationSchema } from "./types";

export const signupHandleValidation = async (values: ISignupFormValues) => {
  try {
    const fields = await SignupFormValidationSchema.validate(values, {
      abortEarly: false,
    });
    if (fields.email || fields.phoneNumber)
        return {};
    else 
        return {
            email: "یا ایمیل یا شماره الزامی است",
            phoneNumber: "یا شماره یا ایمیل اجباری است"
        }
  } catch (e) {
    const err = e as ValidationError;
    const errorMessages = err.inner.reduce(
      (errorsToNow, currentError) => ({
        ...errorsToNow,
        [currentError.path ?? "default"]: currentError.message,
      }),
      {}
    );
    return errorMessages;
  }
};
