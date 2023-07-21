import { AttentionSpan } from "../../../components/ui/AttentionSpan";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import Error from "../../../components/ui/Error";
import { FC } from "react";
import { AuthFormProps, LoginFormValidationSchema } from "../types";
import { useFormik } from "formik";
import { LoginInitialValues } from "../data";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { tokenPersistor } from "../../../persistors/auth";
import api from "../../../services";
import { LOGIN_URL } from "../api.data";

export const LoginForm: FC<AuthFormProps> = (props) => {
  const navigate = useNavigate();
  const mutation = useMutation(api.post(LOGIN_URL));
  const formik = useFormik({
    initialValues: LoginInitialValues,
    onSubmit: (values) => mutation.mutate(values),
    validationSchema: LoginFormValidationSchema,
    validateOnChange: false,
  });

  if (mutation.isSuccess) {
    tokenPersistor.set(mutation.data.token);
    console.log("token: ", mutation.data.token);
    navigate("/admin");
  }

  if (mutation.isError) console.log("Error:", mutation.error);

  return (
    <form className="h-full w-full lg:w-2/3" onSubmit={formik.handleSubmit}>
      <div className="w-full h-full flex flex-col justify-center space-y-md lg:space-y-lg">
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
        <p className="text-primary-dark text-xs text-center">
          قبلا ثبت نام نکرده اید؟{" "}
          <AttentionSpan onClick={props.onToggleAuth}>ثبت نام</AttentionSpan>
        </p>
      </div>
    </form>
  );
};
