import { FC } from "react";
import Badge from "src/components/ui/Badge";
import Card from "src/components/ui/Card";
import { ticketName } from "src/types/tickets";
import { TicketItemProps } from "./types";

const TicketItem: FC<TicketItemProps> = (props) => {
  return (
    <Card
      flexDirection="row"
      justify="between"
      classnames="h-24 w-full mt-0"
      onClick={props.onClick}
    >
      <div className="h-full flex flex-col justify-around space-y-2 w-40 md:w-48">
        <p className="text-normal w-full">{props.fullName}</p>
        <p className="text-normal w-full">{props.phoneNumber}</p>
      </div>
      <textarea
        className="text-sm bg-inherit h-full overflow-hidden resize-none w-full mr-sm lg:mr-0 outline-0"
        readOnly
        value={props.description}
      />
      <Badge className="w-36 lg:w-48 badge-lg h-2/3 mr-sm text-center text-sm">
        {ticketName[props.type]}
      </Badge>
    </Card>
  );
};

export default TicketItem;
