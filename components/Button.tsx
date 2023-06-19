import { ReactNode } from "react";

function Button({ children }: { children: string }) {
  return <button onClick={() => alert("shit!")}>{children}</button>;
}

export default Button;
