import { FC } from "react";

const ImageButton: FC = () => {
  return (
    <button
      className={`h-full w-full object-contain ${props.classnames}`}
      onClick={props.onClick}
    >
      <img
        src={DeleteBtn}
        alt="edit"
        className={`h-full w-full object-contain`}
      />
    </button>
  );
};

export default ImageButton;
