import { FC } from "react";
import Card from "../../../components/ui/Card";
import EditButton from "../Users/EditButton";
import { TermItemProps } from "./types";
import VideoButton from "./VideoButton";
import DeleteButton from "../../../components/ui/DeleteButton";

const TermItem: FC<TermItemProps> = (props) => {
  return (
    <Card flexDirection="row" justify="between" classnames={`h-14`}>
      <div className="h-full w-24">
        <VideoButton onClick={() => {}} />
      </div>
      <p className="w-full text-center text-sm">{props.title}</p>
      <div className={"h-full w-40 flex flex-row"}>
        <EditButton
          onClick={() => {
            console.log("clicked");
          }}
        />
        <DeleteButton onClick={() => {}} />
      </div>
    </Card>
  );
};

export default TermItem;
