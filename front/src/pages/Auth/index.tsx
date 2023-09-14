import { FC, useCallback, useState } from "react";

import lgAuthImage from "../../assets/images/lg-auth-img.jpg";
import smAuthImage from "../../assets/images/sm-auth-img.jpg";
import { LoginForm } from "./components/LoginForm";
import { SignupForm } from "./components/SignupForm";

const Auth: FC = () => {
  const [authState, setAuthState] = useState<"login" | "signup">("login");
  const toggleAuthState = useCallback(
    () =>
      setAuthState((prevState) => (prevState === "login" ? "signup" : "login")),
    []
  );
  return (
    <div
      className={
        "w-full h-full flex flex-col justify-between lg:justify-start lg:flex-row"
      }
    >
      <div className={"_form_ w-full h-full px-lg py-sm flex justify-center"}>
        {authState === "login" && <LoginForm onToggleAuth={toggleAuthState} />}
        {authState === "signup" && (
          <SignupForm onToggleAuth={toggleAuthState} />
        )}
      </div>
      <div className="_image_ w-full lg:w-2/3 flex flex-row-reverse">
        <img
          src={smAuthImage}
          alt={"BottomImage"}
          className={"w-full h-auto object-cover lg:hidden"}
        />
        <img
          src={lgAuthImage}
          alt="SideImage"
          className={"h-full w-full object-cover hidden lg:block"}
        />
      </div>
    </div>
  );
};

export default Auth;
