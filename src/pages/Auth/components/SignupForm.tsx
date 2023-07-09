import { AttentionSpan } from "../../../components/ui/AttentionSpan";
import { Button } from "../../../components/ui/Button";
import { Input } from "../../../components/ui/Input";
import { FC } from "react";
import { AuthFormProps } from "../types";
import { useFormik } from "formik";
import { SignupInitialValues } from "../data";
import { signupHandleValidation } from "../utils";

export const SignupForm: FC<AuthFormProps> = (props) => {
  const formik = useFormik({
    initialValues: SignupInitialValues,
    onSubmit: (values) => {
      console.log(values);
    },
    validate: signupHandleValidation,
    validateOnChange: false,
  });
  return (
    <form className="h-full w-full lg:w-2/3" onSubmit={formik.handleSubmit}>
      <div className="w-full h-full flex flex-col justify-center space-y-sm lg:space-y-md">
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
          ثبت نام
        </Button>
        <p className="text-primary-dark text-xs text-center">
          قبلا اکانت داشتید؟{" "}
          <AttentionSpan onClick={props.onToggleAuth}>ورود</AttentionSpan>
        </p>
      </div>
    </form>
  );
};
