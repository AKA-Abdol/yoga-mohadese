import Card from "../../../../../../components/ui/Card";
import EditButton from "../../../../Users/EditButton";
import { FC } from "react";
import { TermInfoProps } from "./types";
import Badge from "src/components/ui/Badge";
import { getLevelTitle } from "../../../utils";
import { Link } from "react-router-dom";

const TermInfo: FC<TermInfoProps> = (props) => {
  return (
    <Card flexDirection="row" justify="between" classnames={`h-14 w-full`}>
      <div className="w-80 flex items-center justify-start">
        <p className="text-normal">{props.title}</p>
        <Badge className="text-xs mx-sm text-primary">
          {getLevelTitle(props.level)}
        </Badge>
      </div>
      <div className="w-full flex items-center">
        <p>{props.description}</p>
      </div>
      <div className={"h-full w-20 flex flex-row"}>
        <Link to={`/admin/terms/${props.id}/edit`}>
          <EditButton />
        </Link>
        {/* <DeleteButton onClick={() => {}} /> */}
      </div>
    </Card>
  );
};

export default TermInfo;
