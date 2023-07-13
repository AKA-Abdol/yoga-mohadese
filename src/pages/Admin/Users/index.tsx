import SearchInput from "../../../components/ui/SearchInput";
import { FC } from "react";
import UserItem from "./UserItem";

const Users: FC = () => {
  return (
    <div className={`w-full h-full p-2 flex flex-col`}>
      <div className="w-full flex justify-center">
        <SearchInput />
      </div>
      <div className="w-full h-full flex flex-col space-y-sm py-md">
        <UserItem username="first username" state="second"/>
        <UserItem username="second username" state="second"/>
      </div>
    </div>
  );
};

export default Users;
