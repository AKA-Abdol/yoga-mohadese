import ButtonGroup from "../../components/ui/ButtonGroup";
import { FC } from "react";
import Users from "./Users";
import Terms from "./Terms";
import Tickets from "./Tickets";

const Admin: FC = () => {
  return (
    <ButtonGroup
      buttonNames={["کاربران", "ترم ها", "تیکت ها"]}
      routes={["users", "terms", "tickets"]}
      data={[<Users />, <Terms />, <Tickets />]}
    />
  );
};
export default Admin;
