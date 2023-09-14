import { WithId } from "src/types/base";
import { ITerm } from "../Terms/add/types";

export interface UserItemProps {
  username: string;
  terms: Array<ITerm & WithId>;
  id: string;
  invokeModal: (userInfo: IUserInfo) => void;
}

export interface EditButtonProps {
  onClick?: () => void;
  className?: string;
}

export interface IUser {
  id: string;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: number;
  courses: Array<ITerm & WithId>;
}

export interface IUsersList {
  count: number;
  values: IUser[];
}

export interface IUserInfo {
  id: string;
  fullName: string;
}

export const initialUserInfo: IUserInfo = {
  id: "",
  fullName: "",
};

export const SELECT_PLACEHOLDER = "انتخاب ترم";
