import { FC, useCallback } from "react";
import Card from "../../../components/ui/Card";
import EditButton from "../Users/EditButton";
import { TermItemProps } from "./types";
import VideoButton from "./VideoButton";
import DeleteButton from "../../../components/ui/DeleteButton";
import { Link, useNavigate } from "react-router-dom";
import Badge from "src/components/ui/Badge";
import { getLevelTitle } from "./utils";

const TermItem: FC<TermItemProps> = (props) => {
  
  return (
    <Card flexDirection="row" justify="between" classnames={`h-14 w-full`}>
      <div className="w-full flex items-center justify-start">
        <p className="text-normal">{props.title}</p>
        <Badge className="text-xs mx-sm text-primary">
          {getLevelTitle(props.level)}
        </Badge>
      </div>
      <div className={"h-full w-60 flex flex-row"}>
        <Link to={`/admin/terms/${props.id}/videos`} className="h-full w-full">
          <VideoButton />
        </Link>
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
