import { FC } from "react";
import LinkIcon from "../../assets/images/link-icon.png";
import { LinkButtonProps } from "@/types/components/ui";

const LinkButton: FC<LinkButtonProps> = (props) => {
  return (
    <button
      className={`h-full w-full object-contain ${props.classnames}`}
      onClick={props.onClick}
    >
      <img
        src={LinkIcon}
        alt="edit"
        className={`h-full w-full object-contain`}
      />
    </button>
  );
};

export default LinkButton;
