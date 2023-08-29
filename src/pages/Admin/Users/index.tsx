import SearchInput from "../../../components/ui/SearchInput";
import { FC, useEffect, useState } from "react";
import UserItem from "./UserItem";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import api from "../../../services";
import { ALL_USERS_URL } from "./api.data";
import { IUsersList } from "./types";
import Pagination from "src/components/ui/Pagination";

const PER_PAGE = 9;

const Users: FC = () => {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const users = useQuery({
    queryKey: ["users", "users-list", page],
    queryFn: api.get<IUsersList>(ALL_USERS_URL, (api) => api, {
      num: PER_PAGE,
      page,
    }),
  });

  useEffect(() => {
    queryClient.invalidateQueries(["admin-context"]);
  }, [queryClient]);

  return (
    <div className={`w-full h-full p-sm flex flex-col items-center`}>
      <div className="w-full lg:w-3/5 flex justify-center">
        <SearchInput />
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
    </div>
  );
};

export default Users;
