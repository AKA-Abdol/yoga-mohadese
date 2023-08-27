import { FC } from "react";
import Modal from "src/components/ui/Modal";
import { AuditModalProps } from "./types";
import Button from "src/components/ui/Button";

const AuditModal: FC<AuditModalProps> = (props) => {
  return (
    <Modal show={props.show} onClose={() => console.log("closing...")}>
      <div className="w-full flex flex-col">
        <div className="w-full py-md bg-primary text-primary-light flex items-center justify-around rounded-t-lg">
          <p>{props.data.fullName}</p>
          <p>{props.data.phoneNumber}</p>
        </div>
        <div className="h-32 w-full bg-primary-light text-primary-dark p-sm">
          <InfoBody
            description={props.data.description}
            onClose={props.onClose}
            onResolve={() => console.log("resolving...")}
          />
        </div>
      </div>
    </Modal>
  );
};

interface BodyProps {
  description: string;
  onClose: () => void;
  onResolve: () => void;
}

const InfoBody: FC<BodyProps> = (props) => (
  <div className="h-full w-full flex flex-col">
    <div className="flex flex-row w-full justify-around pt-md">
      <Button onClick={props.onResolve} className="w-36 md:w-64 btn-primary-theme">تایید</Button>
      <Button onClick={props.onClose} className="w-36 md:w-64 btn-cancel">
        انصراف
      </Button>
    </div>
  </div>
);

export default AuditModal;
