import { InputProps } from "@/types/components/ui";
import { FC } from "react";

const TextArea: FC<InputProps> = (props) => {
  return (
    <div className="flex flex-col items-center space-y-1">
      <textarea
        className={`textarea textarea-lg text-normal resize-none bg-inherit ${props.className} ${
          props.error && "border-error-300"
        }`}
        onChange={props.onChange}
        placeholder={props.placeholder}
        id={props.id}
        name={props.name}
        value={props.value}
      />
      <p
        className={`_error_ text-xs text-error-300 font-bold ${
          props.error ? "block" : "hidden"
        }`}
      >
        {props.error}
      </p>
    </div>
  );
};

export default TextArea;
