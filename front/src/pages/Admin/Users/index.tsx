import SearchInput from "../../../components/ui/SearchInput";
import { FC, useEffect, useState } from "react";
import UserItem from "./UserItem";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import api from "../../../services";
import { ALL_USERS_URL } from "./api.data";
import { IUserInfo, IUsersList, initialUserInfo } from "./types";
import Pagination from "src/components/ui/Pagination";
import useModal from "src/hooks/useModal";
import UserInfoModal from "./components/UserInfoModal";

const PER_PAGE = 9;

const Users: FC = () => {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [selectedUserInfo, setSelectedUserInfo] =
    useState<IUserInfo>(initialUserInfo);
  const { viewState: modalState, handleClose, handleOpen } = useModal();

  const users = useQuery({
    queryKey: ["users", page, search],
    queryFn: api.get<IUsersList>(ALL_USERS_URL, (api) => api, {
      num: PER_PAGE,
      page,
      search,
    }),
  });

  useEffect(() => {
    queryClient.invalidateQueries(["admin-context"]);
  }, [queryClient]);

  return (
    <div className={`w-full h-full p-sm flex flex-col items-center`}>
      <div className="w-full lg:w-3/5 flex justify-center">
        <SearchInput
          value={search}
          setValue={(value: string) => {
            setPage(1);
            setSearch(value);
          }}
        />
      </div>
      <div className="w-full lg:w-3/5 h-full flex flex-col items-center space-y-sm py-md overflow-auto">
        {users.isLoading || users.isError ? (
          <span className="loading loading-infinity loading-lg text-primary-dark" />
        ) : (
          users.data.values.map((user) => (
            <UserItem
              id={user.id}
              key={user.id}
              username={`${user.firstname} ${user.lastname}`}
              terms={user.courses}
              invokeModal={(userInfo: IUserInfo) => {
                setSelectedUserInfo(userInfo);
                handleOpen();
              }}
            />
          ))
        )}
      </div>
      {users.isSuccess && (
        <Pagination
          page={page}
          perPage={PER_PAGE}
          setPage={setPage}
          totalCount={users.data.count}
        />
      )}
      <UserInfoModal
        show={modalState === "show"}
        onClose={handleClose}
        fullName={selectedUserInfo.fullName}
        userId={selectedUserInfo.id}
      />
    </div>
  );
};

export default Users;
