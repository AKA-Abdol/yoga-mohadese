import { FC, useState } from "react";
import Card from "../../../components/ui/Card";
import { UserItemProps } from "./types";
import { ItemMode } from "../types";
import EditButton from "./EditButton";
import Select from "../../../components/ui/Select";
import SubmitCancelButton from "../../../components/ui/SubmitCancelButton";

const UserItem: FC<UserItemProps> = (props) => {
  const [mode, setMode] = useState<ItemMode>("show");
  const [termState, setTermState] = useState(props.state);
  const [tempTermState, setTempTermState] = useState("");
  return (
    <Card flexDirection="row" justify="between" classnames={`h-14`}>
      <p className="w-2/5 text-center text-sm">{props.username}</p>
      <Select
        options={["tir-A", "tir-B", "tir-C"]}
        value={mode === "edit" ? tempTermState : termState}
        onChange={(event) => {
          console.log(event.target.value);
          setTempTermState(event.target.value);
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
            onSubmit={() => {
              setTermState(tempTermState);
              setMode("show");
            }}
          />
        )}
      </div>
    </Card>
  );
};

export default UserItem;
