export interface UserItemProps {
  username: string;
  state: string;
}

export interface EditButtonProps {
  onClick: () => void;
  classnames: string;
}

export type UserItemMode = "show" | "edit";
