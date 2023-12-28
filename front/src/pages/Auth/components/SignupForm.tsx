import { AttentionSpan } from "../../../components/ui/AttentionSpan";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import { FC } from "react";
import {
  AuthFormProps,
  ISignupFormValues,
  SignupFormValidationSchema,
} from "../types";
import { useFormik } from "formik";
import { SignupInitialValues } from "../data";
import Error from "../../../components/ui/Error";
import { useMutation } from "@tanstack/react-query";
import { SIGNUP_URL } from "../api.data";
import api from "../../../services";
import { signupFormValues2Api } from "../api.converter";
import { tokenPersistor } from "../../../persistors/auth";
import { useNavigate, useLocation } from "react-router-dom";
import { IApiPostSignup } from "../api.types";
import { Link } from "react-router-dom";

export const SignupForm: FC<AuthFormProps> = (props) => {
  const navigate = useNavigate();

  let location = useLocation();

  const mutation = useMutation(
    api.post<ISignupFormValues, IApiPostSignup>(
      SIGNUP_URL,
      signupFormValues2Api
    )
  );
  const formik = useFormik({
    initialValues: SignupInitialValues,
    onSubmit: (values) => mutation.mutate(values),
    validationSchema: SignupFormValidationSchema,
    validateOnChange: false,
  });

  if (mutation.isSuccess) {
    tokenPersistor.set(mutation.data.token);
    switch (mutation.data.is_admin) {
      case true:
        navigate("/admin");
        break;
      case false:
        navigate("/user");
    }
  }

  return (
    <form
      className="h-full w-full lg:w-2/3 z-[1]"
      onSubmit={formik.handleSubmit}
    >
      <div className="w-full h-full flex flex-col justify-center space-y-sm lg:space-y-md">
        <h2 className=" text-[#58423A] text-2xl text-center">ثبت نام</h2>
        <Error>{mutation.isError && (mutation.error as any).message}</Error>
        <Input
          onChange={formik.handleChange}
          placeholder="نام کاربری"
          className="text-center w-full input-primary-theme"
          id="username"
          name="username"
          error={formik.errors.username}
          value={formik.values.username}
        />
        <Input
          onChange={formik.handleChange}
          placeholder="نام"
          className="text-center w-full input-primary-theme"
          id="firstName"
          name="firstName"
          error={formik.errors.firstName}
          value={formik.values.firstName}
        />
        <Input
          onChange={formik.handleChange}
          placeholder="نام خانوادگی"
          className="text-center w-full input-primary-theme"
          id="lastName"
          name="lastName"
          error={formik.errors.lastName}
          value={formik.values.lastName}
        />
        <Input
          onChange={formik.handleChange}
          placeholder="شماره"
          className="text-center w-full input-primary-theme"
          id="phoneNumber"
          name="phoneNumber"
          error={formik.errors.phoneNumber}
          value={formik.values.phoneNumber}
        />
        <Input
          onChange={formik.handleChange}
          placeholder="ایمیل"
          className="text-center w-full input-primary-theme"
          id="email"
          name="email"
          error={formik.errors.email}
          value={formik.values.email}
        />
        <Input
          onChange={formik.handleChange}
          placeholder="رمز عبور"
          className="text-center w-full input-primary-theme"
          type="password"
          id="password"
          name="password"
          error={formik.errors.password}
          value={formik.values.password}
        />
        <Input
          onChange={formik.handleChange}
          placeholder="تایید رمز عبور"
          className="text-center w-full input-primary-theme"
          type="password"
          id="passwordConfirm"
          name="passwordConfirm"
          error={formik.errors.passwordConfirm}
          value={formik.values.passwordConfirm}
        />
        <Button type="submit" className={"w-full btn-primary-theme"}>
          {mutation.isLoading ? (
            <span className="loading loading-infinity loading-lg" />
          ) : (
            "ثبت نام"
          )}
        </Button>
        <div className="flex flex-col justify-around gap-3">
          <p className="text-primary-dark text-sm text-center">
            قبلا اکانت داشتید؟{" "}
            <AttentionSpan onClick={props.onToggleAuth}>ورود</AttentionSpan>
          </p>
          <Link
            to={"/ticket"}
            className="text-primary-dark text-sm text-center"
            state={{ data: location.pathname }}
          >
            رمز عبور خود را فراموش کرده‌اید ؟
            <AttentionSpan>فراموشی رمز عبور</AttentionSpan>
          </Link>
        </div>
      </div>
    </form>
  );
};
