import Card from "../../../../../components/ui/Card";
import EditButton from "../../../../Admin/Users/EditButton";
import { FC } from "react";
import { TermInfoProps } from "./types";

const TermInfo: FC<TermInfoProps> = (props) => {
  return (
    <Card flexDirection="row" justify="between" classnames={`h-14`}>
      <div className="h-full w-32 flex items-center">
        <p className="w-full">{props.title}</p>
      </div>
      <p className="w-full text-center text-sm">{props.description}</p>
      <div className={"h-full w-24"}>
        <EditButton
          onClick={() => {
            console.log("clicked");
          }}
        />
      </div>
    </Card>
  );
};

export default TermInfo;
