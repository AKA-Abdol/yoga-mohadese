import { ReactNode } from "react";
import { Level, PersianMonth } from "src/types/base";

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
  className?: string;
}

export interface SideControlProps {
  sessionListModalId: string;
  infoModalId: string;
}

export interface SessionInfoProps {
  session: {
    title: string;
    num: number;
  };
  term: {
    title: string;
    month: PersianMonth;
    level: Level;
  };
}

export interface DrawerProps {
  children?: ReactNode;
  show: boolean;
}
