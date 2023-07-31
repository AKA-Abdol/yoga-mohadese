import { FC, useState } from "react";
import Card from "../../../components/ui/Card";
import { UserItemProps } from "./types";
import { ItemMode } from "../types";
import EditButton from "./EditButton";
import Select from "../../../components/ui/Select";
import SubmitCancelButton from "../../../components/ui/SubmitCancelButton";
import Checkbox from "src/components/ui/Checkbox";

const UserItem: FC<UserItemProps> = (props) => {
  const [mode, setMode] = useState<ItemMode>("show");
  const [termState, setTermState] = useState(props.state);
  const [tempTermState, setTempTermState] = useState("");
  return (
    <Card flexDirection="row" justify="between" classnames={`h-14 w-full`}>
      <p className="w-2/5 text-center text-sm">{props.username}</p>
      <div className="w-3/5 flex flex-row justify-center items-center">
        <Checkbox size="sm" span="کلیک" />
        <Select
          options={["تیر A", "تیر B", "تیر C"]}
          optionTexts={["تیر A", "تیر B", "تیر C"]}
          value={mode === "edit" ? tempTermState : termState}
          onChange={(event) => {
            console.log(event.target.value);
            setTempTermState(event.target.value);
          }}
          disabled={mode === "show"}
          classnames="w-full text-center mr-2 h-full"
        />
      </div>
      <div className={"h-full w-20"}>
        {mode === "show" && <EditButton onClick={() => setMode("edit")} />}
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
