import ButtonGroup from "../../components/ui/ButtonGroup";
import { FC } from "react";
import Users from "./Users";

const Admin: FC = () => {
    return (
        <ButtonGroup buttonNames={["کاربران", "ترم ها"]} data={[<Users />, <p>that shit</p>]}/>
    )
}
export default Admin;
