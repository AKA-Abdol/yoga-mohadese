import ButtonGroup from "../../components/ui/ButtonGroup";
import { FC } from "react";
import Users from "./Users";
import Terms from "./Terms";

const Admin: FC = () => {
  return (
    <ButtonGroup
      buttonNames={["کاربران", "ترم ها"]}
      data={[<Users />, <Terms />]}
    />
  );
};
export default Admin;
