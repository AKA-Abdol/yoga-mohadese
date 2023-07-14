import { FC, useState } from "react";
import Card from "../../../components/ui/Card";
import { UserItemMode, UserItemProps } from "./types";
import EditButton from "./EditButton";
import Select from "../../../components/ui/Select";
import SubmitCancelButton from "../../../components/ui/SubmitCancelButton";

const UserItem: FC<UserItemProps> = (props) => {
  const [mode, setMode] = useState<UserItemMode>("show");
  const [termState, setTermState] = useState(props.state);
  return (
    <Card flexDirection="row" justify="between" classnames={`h-14`}>
      <p className="w-2/5 text-center text-sm">{props.username}</p>
      <Select
        options={["tir-A", "tir-B", "tir-C"]}
        value={termState}
        onChange={(event) => {
          console.log(event.target.value);
          setTermState(event.target.value);
        }}
        disabled={mode === "show"}
        classnames="w-3/5 text-center mr-2 h-full"
      />
      <div className={"h-full w-24"}>
        {mode === "show" && (
          <EditButton onClick={() => setMode("edit")} classnames="" />
        )}
        {mode === "edit" && (
          <SubmitCancelButton
            classnames="justify-between pr-2"
            onCancel={() => setMode("show")}
            onSubmit={() => {}}
          />
        )}
      </div>
    </Card>
  );
};

export default UserItem;
