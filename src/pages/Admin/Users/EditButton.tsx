import { FC } from "react";
import EditIcon from "../../../assets/images/edit-icon.png";
import { EditButtonProps } from "./types";
const EditButton: FC<EditButtonProps> = (props) => {
  return (
    <button
      className={`h-full`}
      onClick={props.onClick}
    >
      <img src={EditIcon} alt="edit" className={`h-full object-contain`} />
    </button>
  );
};

export default EditButton;
