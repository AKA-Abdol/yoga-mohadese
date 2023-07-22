import SearchInput from "../../../components/ui/SearchInput";
import { FC } from "react";
import UserItem from "./UserItem";
import { useQuery } from "@tanstack/react-query";
import api from "../../../services";
import { ALL_USERS_URL } from "./api.data";
import { IUsersList } from "./types";

const Users: FC = () => {
  const users = useQuery({
    queryKey: ["users", "users-list"],
    queryFn: api.get<IUsersList>(ALL_USERS_URL, (api) => api, {
      num: 10,
      page: 1,
    }),
  });
  return (
    <div className={`w-full h-full p-sm flex flex-col items-center`}>
      <div className="w-full lg:w-3/5 flex justify-center">
        <SearchInput />
      </div>
      <div className="w-full lg:w-3/5 h-full flex flex-col items-center space-y-sm py-md">
        {users.isLoading || users.isError ? (
          <span className="loading loading-infinity loading-lg text-primary-dark" />
        ) : (
          users.data.values.map((user) => (
            <UserItem
              id={user.id}
              key={user.id}
              username={`${user.firstname} ${user.lastname}`}
              state="تیر A"
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Users;
