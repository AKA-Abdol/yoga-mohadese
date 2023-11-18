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
import { useTranslation } from "react-i18next";

export const LoginForm: FC<AuthFormProps> = (props) => {
  const { t } = useTranslation();
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
    <form className="h-full w-full lg:w-2/3" onSubmit={formik.handleSubmit}>
      <div className="w-full h-full flex flex-col justify-center space-y-md lg:space-y-lg">
        <Error>{mutation.isError && (mutation.error as any).message}</Error>
        <Input
          onChange={formik.handleChange}
          placeholder={t(["pagesAuthLoginForm-username"])}
          className="text-center w-full input-primary-theme"
          id="username"
          name="username"
          error={formik.errors.username}
          value={formik.values.username}
        />
        <Input
          onChange={formik.handleChange}
          placeholder={t(["pagesAuthLoginForm-password"])}
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
            `${t(["pagesAuthLoginForm-login"])}`
          )}
        </Button>
        <div className="flex flex-col justify-around gap-3">
          <p className="text-primary-dark text-xs text-center">
            {t(["pagesAuthLoginForm-username"])}{" "}
            <AttentionSpan onClick={props.onToggleAuth}>{t(["pagesAuthLoginForm-signup"])}</AttentionSpan>
          </p>
          <Link
            state={{ data: location.pathname }}
            to={"/ticket"}
            className="text-primary-dark text-xs text-center"
          >
            {t(["pagesAuthLoginForm-forgotYourPassword"])}
            <AttentionSpan>{t(["pagesAuthLoginForm-forgotPassword"])}</AttentionSpan>
          </Link>
        </div>
      </div>
    </form>
  );
};
