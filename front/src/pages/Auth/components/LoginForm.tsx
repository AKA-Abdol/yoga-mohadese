import { AttentionSpan } from "../../../components/ui/AttentionSpan";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import Error from "../../../components/ui/Error";
import { FC } from "react";
import {
  AuthFormProps,
  ILoginFormValues,
  LoginFormValidationSchema,
} from "../types";
import { useFormik } from "formik";
import { LoginInitialValues } from "../data";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { tokenPersistor } from "../../../persistors/auth";
import api from "../../../services";
import { LOGIN_URL } from "../api.data";
import { IApiPostLogin } from "../api.types";
import { loginFormValues2Api } from "../api.converter";
import { Link, useLocation } from "react-router-dom";

export const LoginForm: FC<AuthFormProps> = (props) => {
  const navigate = useNavigate();
  let location = useLocation();

  const mutation = useMutation(
    api.post<ILoginFormValues, IApiPostLogin>(LOGIN_URL, loginFormValues2Api)
  );
  const formik = useFormik({
    initialValues: LoginInitialValues,
    onSubmit: (values) => mutation.mutate(values),
    validationSchema: LoginFormValidationSchema,
    validateOnChange: false,
  });

  if (mutation.isSuccess) {
    tokenPersistor.set(mutation.data.token);
    mutation.data.is_admin ? navigate("/admin") : navigate("/user");
  }

  return (
    <form className="h-full w-full lg:w-2/3 z-[1]" onSubmit={formik.handleSubmit}>
      <div className="w-full h-full flex flex-col justify-center space-y-md lg:space-y-lg">
        <h2 className=" text-[#58423A] text-2xl text-center">ورود</h2>
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
          placeholder="رمز عبور"
          className="text-center w-full input-primary-theme"
          type="password"
          id="password"
          name="password"
          error={formik.errors.password}
          value={formik.values.password}
        />
        <Button type="submit" className={"w-full btn-primary-theme"}>
          {mutation.isLoading ? (
            <span className="loading loading-infinity loading-lg" />
          ) : (
            "ورود"
          )}
        </Button>
        <div className="flex flex-col justify-around gap-3">
          <p className="text-brown text-sm text-center">
            قبلا ثبت نام نکرده اید؟{" "}
            <AttentionSpan onClick={props.onToggleAuth}>ثبت نام</AttentionSpan>
          </p>
          <Link
            state={{ data: location.pathname }}
            to={"/ticket"}
            className="text-brown text-sm text-center"
          >
            رمز عبور خود را فراموش کرده‌اید ؟
            <AttentionSpan>فراموشی رمز عبور</AttentionSpan>
          </Link>
        </div>
      </div>
    </form>
  );
};
