import { FC, useCallback, useState } from "react";

import AuthBackground from "src/assets/images/AuthBackground.png";
import AuthDesktopBackground from "src/assets/images/authDesktopImage.png" 
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
        "w-screen h-screen flex flex-col justify-between lg:justify-start lg:flex-row"
      }
    >
      <div className={"_form_ w-full h-full px-lg py-sm flex justify-center"}>
        {authState === "login" && <LoginForm onToggleAuth={toggleAuthState} />}
        {authState === "signup" && (
          <SignupForm onToggleAuth={toggleAuthState} />
        )}
      </div>
      <img src={AuthDesktopBackground} alt="yogaMinimalVector" className="h-screen hidden lg:block" />
      <img src={AuthBackground} alt="yogaMinimalVector" className=" opacity-10 fixed left-0 bottom-0 lg:hidden " />
      {/* <div className="_image_ w-full lg:w-2/3 flex flex-row-reverse">
        <img
          src={hijab}
          alt={"BottomImage"}
          className={"w-full h-auto object-cover lg:hidden"}
        />
        <img
          src={hijab}
          alt="SideImage"
          className={"h-full w-full object-cover hidden lg:block"}
        />
      </div> */}
    </div>
  );
};

export default Auth;
