export interface UserItemProps {
  username: string;
  state: string;
  id: string;
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
  courses: string[];
}

export interface IUsersList {
  count: number;
  values: IUser[];
}
