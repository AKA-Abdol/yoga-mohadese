import { FC, useContext, useState } from "react";
import Card from "../../../components/ui/Card";
import { UserItemProps } from "./types";
import { ItemMode } from "../types";
import EditButton from "./EditButton";
import Select from "../../../components/ui/Select";
import SubmitCancelButton from "../../../components/ui/SubmitCancelButton";
// import Checkbox from "src/components/ui/Checkbox";
import { AdminContext } from "../ContextProvider";
import { getLevelTitle } from "../Terms/utils";
import { useMutation } from "@tanstack/react-query";
import api from "src/services";
import { BASE_USER_URL } from "./api.data";
import INFO_ICON from "src/assets/images/info-icon.png";
import { MultiSelect, Option } from "react-multi-select-component";
import Badge from "src/components/ui/Badge";

const UserItem: FC<UserItemProps> = (props) => {
  const notTeaserTerms = props.terms.filter((term) => term.level != "0");
  const initialTermState = notTeaserTerms.length
    ? notTeaserTerms[0].id
    : "no-term";

  // const beginnerTerm = props.terms.filter((term) => term.level == "1");
  // const initialBeginnerTermState = beginnerTerm.length ? true : false;

  const unGrantTerm = useMutation(
    api.delete<{ course_id: string }>(`${BASE_USER_URL}/${props.id}/access`)
  );

  const grantTerm = useMutation(
    api.post<{ course_id: string }, unknown>(
      `${BASE_USER_URL}/${props.id}/access`
    )
  );

  const [mode, setMode] = useState<ItemMode>("show");
  const [termState, setTermState] = useState<Option[]>([]); //initialTermState
  const [tempTermState, setTempTermState] = useState([]);
  // const [beginnerTermState, setBeginnerTermState] = useState(
  //   initialBeginnerTermState
  // );
  // const [tempBeginnerTermState, setTempBeginnerTermState] = useState(
  //   initialBeginnerTermState
  // );
  const adminContext = useContext(AdminContext);

  // const beginnerLevelTerm = adminContext.terms?.filter(
  //   (term) => term.level == "1"
  // )[0];

  // changed to notTeaser from notBeginner
  const notTeaserLevelTerms = adminContext.terms?.filter(
    (term) => term.level != "0"
  );

  const customValueRenderer = (selected: Option[]) => {
    return selected.length
      ? selected.map(({ label }) => <Badge className="mr-sm">{label}</Badge>)
      : "بدون ترم";
  };

  return (
    <Card flexDirection="row" justify="between" classnames={`h-16 w-full`}>
      <div className="w-2/6 h-full flex items-center justify-center">
        <button
          onClick={() =>
            props.invokeModal({ fullName: props.username, id: props.id })
          }
          className="h-full flex items-center justify-center"
        >
          <p className=" text-center text-xs md:text-sm text-primary-dark">
            {props.username}
          </p>
          <img alt="info" src={INFO_ICON} className="object-contain h-1/2" />
        </button>
      </div>
      {/* <div className="w-2/6 flex items-center justify-center lg:w-1/6 mr-sm lg:mr-0">
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
      </div> */}
      <div className="w-4/6 flex justify-center items-center lg:w-4/6">
        {/* <Select
          options={
            notTeaserLevelTerms
              ? ["no-term", ...notTeaserLevelTerms.map((term) => term.id)]
              : ["no-term"]
          }
          optionTexts={
            notTeaserLevelTerms
              ? [
                  "بدون ترم",
                  ...notTeaserLevelTerms.map(
                    (term) => `${term.title} (${getLevelTitle(term.level)})`
                  ),
                ]
              : ["بدون ترم"]
          }
          value={mode === "edit" ? tempTermState : termState}
          onChange={(event) => {
            setTempTermState(event.target.value);
          }}
          disabled={mode === "show"}
          classnames="w-full text-center mr-2 h-full"
        /> */}

        <MultiSelect
          options={[
            { label: "ترم مقدماتی", value: 1 },
            { label: "ترم متوسط", value: 2 },
          ]}
          labelledBy="Select"
          value={termState}
          disabled={mode === "show"}
          disableSearch={true}
          onChange={setTermState}
          className="w-5/6 text-primary-light text-center"
          overrideStrings={{
            selectAll: "انتخاب همه"
          }}
          valueRenderer={customValueRenderer}
        />
      </div>
      <div className={"h-full w-20"}>
        {mode === "show" && <EditButton onClick={() => setMode("edit")} />}
        {mode === "edit" && (
          <SubmitCancelButton
            classnames="justify-between pr-2"
            onCancel={() => setMode("show")}
            onSubmit={() => {
              console.log(termState);

              // new commented
              // if (termState !== "no-term")
              //   unGrantTerm.mutate({ course_id: termState });
              // if (tempTermState !== "no-term")
              //   grantTerm.mutate({ course_id: tempTermState });

              // if (tempBeginnerTermState)
              //   grantTerm.mutate({
              //     course_id: beginnerLevelTerm?.id ?? "",
              //   });
              // else
              //   unGrantTerm.mutate({ course_id: beginnerLevelTerm?.id ?? "" });

              setTermState(tempTermState);
              // setBeginnerTermState(tempBeginnerTermState);
              setMode("show");
            }}
          />
        )}
      </div>
    </Card>
  );
};

export default UserItem;
