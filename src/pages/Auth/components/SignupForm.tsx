import { AttentionSpan } from "../../../components/ui/AttentionSpan";
import { Button } from "../../../components/ui/Button";
import { Input } from "../../../components/ui/Input";
import { FC } from "react";
import { LoginFormProps } from "./types";

export const SignupForm: FC<LoginFormProps> = (props) => {
  return (
    <form className="h-full w-full lg:w-2/3">
      <div className="w-full h-full flex flex-col justify-center space-y-sm lg:space-y-md">
        <Input
          onChange={() => {}}
          placeholder="نام کاربری"
          className="text-center w-full input-primary-theme"
        />
        <Input
          onChange={() => {}}
          placeholder="نام"
          className="text-center w-full input-primary-theme"
        />
        <Input
          onChange={() => {}}
          placeholder="نام خانوادگی"
          className="text-center w-full input-primary-theme"
        />
        <Input
          onChange={() => {}}
          placeholder="شماره"
          className="text-center w-full input-primary-theme"
        />
        <Input
          onChange={() => {}}
          placeholder="ایمیل"
          className="text-center w-full input-primary-theme"
          type="email"
        />
        <Input
          onChange={() => {}}
          placeholder="رمز عبور"
          className="text-center w-full input-primary-theme"
          type="password"
        />
        <Input
          onChange={() => {}}
          placeholder="تایید رمز عبور"
          className="text-center w-full input-primary-theme"
          type="password"
        />
        <Button
          type="submit"
          onClick={(event) => console.log("shit")}
          className={"w-full btn-primary-theme"}
        >
        ثبت نام
        </Button>
        <p className="text-primary-dark text-xs text-center">
          قبلا اکانت داشته اید؟{" "}
          <AttentionSpan onClick={props.onToggleAuth}>ورود</AttentionSpan>
        </p>
      </div>
    </form>
  );
};
