import { FC } from "react";
import { ModalProps } from "./types";
import classNames from "classnames";

const Modal: FC<ModalProps> = (props) => {
  return (
    <>
      <input type="checkbox" id={props.id} className="modal-toggle" />
      <div
        className={classNames(
          "modal modal-bottom right-0 left-0 mx-auto",
          props.className
        )}
      >
        <div className="modal-box">{props.children}</div>
        <label className="modal-backdrop" htmlFor={props.id}>
          Close
        </label>
      </div>
    </>
  );
};

export default Modal;
