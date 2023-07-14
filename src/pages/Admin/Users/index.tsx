import SearchInput from "../../../components/ui/SearchInput";
import { FC } from "react";
import UserItem from "./UserItem";

const Users: FC = () => {
  return (
    <div className={`w-full h-full p-sm flex flex-col items-center`}>
      <div className="w-full lg:w-3/5 flex justify-center">
        <SearchInput />
      </div>
      <div className="w-full lg:w-3/5 h-full flex flex-col space-y-sm py-md">
        {MOCK_USERS.map((user) => (
          <UserItem username={user.username} state={user.state} />
        ))}
      </div>
    </div>
  );
};

const MOCK_USERS = [
  { username: "alvand", state: "tir-A" },
  { username: "arman", state: "tir-B" },
  { username: "arsam", state: "tir-C" },
  { username: "amirhossein", state: "tir-A" },
];

export default Users;
