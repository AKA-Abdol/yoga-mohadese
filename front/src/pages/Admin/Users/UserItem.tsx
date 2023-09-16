import { FC, useContext, useState } from "react";
import Card from "../../../components/ui/Card";
import { UserItemProps } from "./types";
import { ItemMode } from "../types";
import EditButton from "./EditButton";
import SubmitCancelButton from "../../../components/ui/SubmitCancelButton";
import { AdminContext } from "../ContextProvider";
import { getLevelTitle } from "../Terms/utils";
import { useMutation } from "@tanstack/react-query";
import api from "src/services";
import { BASE_USER_URL } from "./api.data";
import INFO_ICON from "src/assets/images/info-icon.png";
import { MultiSelect, Option } from "react-multi-select-component";
import Badge from "src/components/ui/Badge";
import { ITerm } from "../Terms/add/types";
import { WithId } from "src/types/base";

const UserItem: FC<UserItemProps> = (props) => {
  const notTeaserTerms = props.terms.filter((term) => term.level != "0");
  const initialTermState: Option[] = notTeaserTerms.map((term) => ({
    label: getTermLabel(term),
    value: term.id,
  }));

  const unGrantTerm = useMutation(
    api.delete<{ course_id: string }>(`${BASE_USER_URL}/${props.id}/access`)
  );

  const grantTerm = useMutation(
    api.post<{ course_id: string }, unknown>(
      `${BASE_USER_URL}/${props.id}/access`
    )
  );

  const [mode, setMode] = useState<ItemMode>("show");
  const [termState, setTermState] = useState<Option[]>(initialTermState);
  const [tempTermState, setTempTermState] =
    useState<Option[]>(initialTermState);
  const adminContext = useContext(AdminContext);

  const notTeaserLevelTerms = adminContext.terms?.filter(
    (term) => term.level != "0"
  );

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
      <div className="w-4/6 flex justify-center items-center lg:w-4/6">
        <MultiSelect
          options={
            notTeaserLevelTerms
              ? notTeaserLevelTerms.map((term) => ({
                  label: getTermLabel(term),
                  value: term.id,
                }))
              : []
          }
          labelledBy="Select"
          value={tempTermState}
          disabled={mode === "show"}
          disableSearch={true}
          onChange={setTempTermState}
          className="w-5/6 text-primary-light text-center"
          overrideStrings={{
            selectAll: "انتخاب همه",
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
              if (termState.length !== 0)
                termState.forEach(async (term) => {
                  unGrantTerm.mutate({ course_id: term.value });
                });

              if (tempTermState.length !== 0)
                tempTermState.forEach((term) => {
                  grantTerm.mutate({ course_id: term.value });
                });

              setTermState(tempTermState);
              setMode("show");
            }}
          />
        )}
      </div>
    </Card>
  );
};

const getTermLabel = (term: ITerm & WithId) =>
  `${term.title} (${getLevelTitle(term.level)})`;

const customValueRenderer = (selected: Option[]) => {
  return selected.length
    ? selected.map(({ label }) => <Badge className="mr-sm py-3">{label}</Badge>)
    : "بدون ترم";
};

export default UserItem;
