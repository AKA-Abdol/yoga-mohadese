import classNames from "classnames";
import { FC, useCallback } from "react";
import { ModalProps } from "src/types/components/ui";

const Modal: FC<ModalProps> = (props) => {
  const preventPropagation = useCallback(
    (e: React.MouseEvent<HTMLElement>) => e.stopPropagation(),
    []
  );
  return (
    <div
      className={classNames(
        "fixed top-0 left-0 right-0 z-50 w-full p-md overflow-x-hidden overflow-y-auto md:inset-0 h-full",
        "flex justify-center items-center",
        "bg-black bg-opacity-40",
        !props.show && "hidden",
        !props.children && "hidden"
      )}
      onClick={props.onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-full"
        onClick={preventPropagation}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
