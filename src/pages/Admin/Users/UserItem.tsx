import { FC, useContext, useState } from "react";
import Card from "../../../components/ui/Card";
import { SELECT_PLACEHOLDER, UserItemProps } from "./types";
import { ItemMode } from "../types";
import EditButton from "./EditButton";
import Select from "../../../components/ui/Select";
import SubmitCancelButton from "../../../components/ui/SubmitCancelButton";
import Checkbox from "src/components/ui/Checkbox";
import { AdminContext } from "../ContextProvider";
import { getLevelTitle } from "../Terms/utils";

const UserItem: FC<UserItemProps> = (props) => {
  console.log(props);
  const notBeginnerTerms = props.terms.filter((term) => term.level != "1");
  const initialTermState = notBeginnerTerms.length
    ? notBeginnerTerms[0].id
    : "no-term";
  console.log("term:", initialTermState);

  const initialBeginnerTermState =
    props.terms.findIndex((term) => term.level == "1") != -1;

  const [mode, setMode] = useState<ItemMode>("show");
  const [termState, setTermState] = useState(initialTermState);
  const [tempTermState, setTempTermState] = useState(initialTermState);
  const [beginnerTermState, setBeginnerTermState] = useState(
    initialBeginnerTermState
  );
  const [tempBeginnerTermState, setTempBeginnerTermState] = useState(
    initialBeginnerTermState
  );
  const adminContext = useContext(AdminContext);

  const beginnerLevelTerm = adminContext.terms?.filter(
    (term) => term.level == "1"
  )[0];

  const notBeginnerLevelTerms = adminContext.terms?.filter(
    (term) => term.level != "1"
  );

  console.log("output: ", tempTermState, termState);
  return (
    <Card flexDirection="row" justify="between" classnames={`h-14 w-full`}>
      <div className="w-1/6 h-full flex items-center">
        <p className=" text-center text-sm">{props.username}</p>
      </div>
      <div className="w-2/6 flex items-center justify-center lg:w-1/6">
        <Checkbox
          size="sm"
          span={
            beginnerLevelTerm
              ? `${beginnerLevelTerm?.title} (${getLevelTitle("1")})`
              : ""
          }
          disabled={mode === "show"}
          className="checkbox-success"
          hasSpan={true}
          checked={mode === "edit" ? tempBeginnerTermState : beginnerTermState}
          onToggle={() => setTempBeginnerTermState((prevState) => !prevState)}
        />
      </div>
      <div className="w-3/6 flex justify-center items-center lg:w-4/6">
        <Select
          options={
            notBeginnerLevelTerms
              ? ["no-term", ...notBeginnerLevelTerms.map((term) => term.id)]
              : ["no-term"]
          }
          optionTexts={
            notBeginnerLevelTerms
              ? [
                  "بدون ترم",
                  ...notBeginnerLevelTerms.map(
                    (term) => `${term.title} (${getLevelTitle(term.level)})`
                  ),
                ]
              : ["بدون ترم"]
          }
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
              setBeginnerTermState(tempBeginnerTermState);
              setMode("show");
            }}
          />
        )}
      </div>
    </Card>
  );
};

export default UserItem;
