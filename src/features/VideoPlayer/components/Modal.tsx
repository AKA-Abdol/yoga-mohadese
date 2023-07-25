import { FC } from "react";
import { ModalProps } from "./types";

const Modal: FC<ModalProps> = (props) => {
  return (
    <>
      <input type="checkbox" id={props.id} className="modal-toggle" />
      <div className="modal modal-bottom md:modal-middle">
        <div className="modal-box">{props.children}</div>
        <label className="modal-backdrop" htmlFor={props.id}>
          Close
        </label>
      </div>
    </>
  );
};

export default Modal;
