import { AttentionSpan } from "../../../components/ui/AttentionSpan";
import { Button } from "../../../components/ui/Button";
import { Input } from "../../../components/ui/Input";
import { FC } from "react";
import { AuthFormProps, LoginFormValidationSchema } from "../types";
import { useFormik } from "formik";
import { LoginInitialValues } from "../data";

export const LoginForm: FC<AuthFormProps> = (props) => {
  const formik = useFormik({
    initialValues: LoginInitialValues,
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: LoginFormValidationSchema,
    validateOnChange: false,
  });
  console.log("errors", formik.errors);
  return (
    <form className="h-full w-full lg:w-2/3" onSubmit={formik.handleSubmit}>
      <div className="w-full h-full flex flex-col justify-center space-y-md lg:space-y-lg">
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
          ورود
        </Button>
        <p className="text-primary-dark text-xs text-center">
          قبلا ثبت نام نکرده اید؟{" "}
          <AttentionSpan onClick={props.onToggleAuth}>ثبت نام</AttentionSpan>
        </p>
      </div>
    </form>
  );
};
