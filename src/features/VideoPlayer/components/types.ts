import { ReactNode } from "react";

export interface ImageButtonProps {
  onClick: () => void;
  src: string;
  className?: string;
  alt?: string;
  subtitle?: string;
}

export type ModalImageButtonProps = Omit<ImageButtonProps, "onClick"> & {
  id: string;
};

export interface ModalProps {
  children: ReactNode;
  id: string;
}

export interface SideControlProps {
  modalId: string;
}
