import { FC, useState } from "react";
import Card from "../../../components/ui/Card";
import { UserItemMode, UserItemProps } from "./types";
import EditButton from "./EditButton";
import Select from "../../../components/ui/Select";

const UserItem: FC<UserItemProps> = (props) => {
  const [mode, setMode] = useState<UserItemMode>("show");
  const [termState, setTermState] = useState(props.state);
  return (
    <Card flexDirection="row" justify="between" classnames={`h-14`}>
      <p>{props.username}</p>
      <Select
        options={["first", "second"]}
        value={termState}
        onChange={(event) => setTermState(event.target.value)}
      />
      <>
        {mode === "show" && <EditButton onClick={() => setMode("edit")} />}
        {/* {mode === "edit"} */}
      </>
    </Card>
  );
};

export default UserItem;
