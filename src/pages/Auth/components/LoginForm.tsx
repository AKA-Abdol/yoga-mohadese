import { AttentionSpan } from "../../../components/ui/AttentionSpan";
import { Button } from "../../../components/ui/Button";
import { Input } from "../../../components/ui/Input";
import { FC } from "react";
import { LoginFormProps } from "./types";

export const LoginForm: FC<LoginFormProps> = (props) => {
  return (
    <form className="h-full w-full lg:w-2/3">
      <div className="w-full h-full flex flex-col justify-center space-y-lg lg:space-y-xl">
        <Input
          onChange={() => {}}
          placeholder="نام کاربری"
          className="text-center w-full input-primary-theme"
        />
        <Input
          onChange={() => {}}
          placeholder="رمز عبور"
          className="text-center w-full input-primary-theme"
        />
        <Button
          type="submit"
          onClick={(event) => console.log("shit")}
          className={"w-full btn-primary-theme"}
        >
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
