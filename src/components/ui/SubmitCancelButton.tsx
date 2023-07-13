import { FC } from "react";

import SubmitBtn from "../../assets/images/submit-btn.png";
import CancelBtn from "../../assets/images/cancel-btn.png";
import { SubmitCancelButtonProps } from "@/types/components/ui";

const SubmitCancelButton: FC<SubmitCancelButtonProps> = (props) => {
  return (
    <div className={`w-full h-full flex flex-row ${props.classnames}`}>
      <button className={`h-full w-full`} onClick={props.onSubmit}>
        <img
          src={SubmitBtn}
          alt="submit"
          className={`object-contain h-full w-full`}
        />
      </button>
      <button className={`h-full w-full`} onClick={props.onCancel}>
        <img
          src={CancelBtn}
          alt="cancel"
          className={`object-contain h-full w-full`}
        />
      </button>
    </div>
  );
};

export default SubmitCancelButton;
