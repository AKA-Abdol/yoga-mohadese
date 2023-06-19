import { ReactNode } from "react";

function Button({ children }: { children: string }) {
  return (
    <button className="border-2 border-white p-2 rounded-xl">{children}</button>
  );
}

export default Button;
