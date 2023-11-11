import { FC, useEffect, useMemo, useState } from "react";
import Modal from "src/components/ui/Modal";
import { UserInfoModalProps } from "./UserInfoModal.types";
import TextArea from "src/components/ui/TextArea";
import useDebounce from "src/hooks/useDebounce";
import { useMutation, useQuery } from "@tanstack/react-query";
import api from "src/services";
import { BASE_USER_URL } from "../api.data";
import Loading from "src/components/ui/Loading";
import { useTranslation } from "react-i18next";

const UserInfoModal: FC<UserInfoModalProps> = (props) => {
  const { t } = useTranslation();
  const [note, setNote] = useState("");
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["note", props.userId],
    queryFn: api.get<{ note: string }>(`${BASE_USER_URL}/${props.userId}/note`),
  });

  const mutateNote = useMutation({
    mutationFn: api.put<{ note: string }>(
      `${BASE_USER_URL}/${props.userId}/note`
    ),
  });

  useDebounce(
    mutateNote.mutate,
    useMemo(() => ({ note }), [note])
  );

  useEffect(() => {
    if (isSuccess) setNote(data.note);
  }, [isSuccess, data]);

  return (
    <Modal show={props.show} onClose={props.onClose}>
      <div className="w-full flex flex-col">
        <div className="w-full py-md bg-primary text-primary-light flex items-center justify-around rounded-t-lg">
          <p>{props.fullName}</p>
        </div>
        <div className="w-full bg-primary-light text-primary-dark p-sm">
          {isLoading || isError ? (
            <Loading />
          ) : (
            <TextArea
              onChange={(e) => setNote(e.target.value)}
              name="note"
              placeholder={t("adminUsersInfoModal-note")}
              value={note}
              className="w-full text-center"
            />
          )}
        </div>
      </div>
    </Modal>
  );
};

export default UserInfoModal;
