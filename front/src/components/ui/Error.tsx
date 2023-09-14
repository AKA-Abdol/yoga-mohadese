import { FC } from "react";
import { WithChildren } from "src/types/components/ui";

const Error: FC<WithChildren<String | undefined | null | false>> = (props) => {
  return (
    <div className={`w-full flex justify-center items-center`}>
      {props.children && (
        <p className={`text-error text-md`}>{props.children}</p>
      )}
    </div>
  );
};

export default Error;
