export interface UserItemProps {
  username: string;
  state: string;
}

export interface EditButtonProps {
  onClick: () => void;
}

export type UserItemMode = "show" | "edit";
